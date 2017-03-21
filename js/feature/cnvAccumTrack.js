/*
 * TODO(david): license
 */

var igv = (function (igv) {
    igv.CNVAccumTrack = function (config) {
        igv.configTrack(this, config);

        this.selected = [];
        this.selectFrom = [];

        var myself = this;
        if (igv.trackViews !== undefined) {
            igv.trackViews.filter(function (trackview) {
                return trackview.track.type === "seg";
            }).forEach(function (trackview) {
                myself.selectFrom.push(trackview.track)
            });
        }

        igv.browser.on('addtrack', this.addToSelectFrom(this));
        igv.browser.on('removetrack', this.removeFromSelectFrom(this));

        this.supportsWholeGenome = true;
    };

    igv.CNVAccumTrack.prototype.addToSelectFrom = function (thisObj) {
        return function (track) {
            if (track.type === "seg")
                thisObj.selectFrom.push({ isLog: false, track: track });
        };
    };

    igv.CNVAccumTrack.prototype.removeFromSelectFrom = function (thisObj) {
        /* TODO(david): fix removing
        return function (track) {
            if (thisObj.selectFrom.indexOf(track) > -1)
                thisObj.selectFrom.splice(thisObj.selectFrom.indexOf(track), 1);

            if (thisObj.selected.indexOf(track) > -1)
                thisObj.selected.splice(thisObj.selected.indexOf(track), 1);
        };
        */
    };

    igv.CNVAccumTrack.prototype.menuItemList = function (popover) {
        var myself = this,
            toggleList = [];

        this.selectFrom.forEach(function (track) {
            var i;
            for (i = 0; i < track.track.sampleCount; i++) {
                var name = track.track.sampleNames[i];
                var tName = (myself.selected.indexOf(name) > -1) ? "- " : "+ ";

                toggleList.push({
                    name: tName + name,
                    click: function (name) {
                        return function () {
                            popover.hide();
                            myself.toggleTrack((' ' + name).slice(1));
                        }
                    }(name)
                });
            }
        });

        return toggleList;
    };

    igv.CNVAccumTrack.prototype.toggleTrack = function (sampleName) {
        var index = this.selected.indexOf(sampleName);
        if (index > -1)
            this.selected.splice(index, 1);
        else
            this.selected.push(sampleName);
        this.trackView.update();
    };

    igv.CNVAccumTrack.prototype.getFeatures = function (chr, bpStart, bpEnd) {
        var myself = this,
            promises = [],
            i;

        for (i = 0; i < this.selectFrom.length; i++) {
            if (this.selectFrom[i].track.sampleNames.some(function (a) {
                        return myself.selected.indexOf(a) > -1;
                    }))
                promises.push(myself.selectFrom[i].track.getFeatures(chr, bpStart, bpEnd));
        }

        return Promise.all(promises);
    };

    igv.CNVAccumTrack.prototype.draw = function (options) {
        var myself = this,
            featureLists,
            ctx,
            bpStart,
            bpEnd,
            bpPerPixel,
            pixelWidth,
            pixelHeight,
            yCenter,
            yMin = 0.0,
            yMax = 0.0,
            yScale,
            cnv,
            val,
            lineMaps,
            mean,
            x1,
            x2,
            y,
            color;

        ctx = options.context;
        pixelWidth = options.pixelWidth;
        pixelHeight = options.pixelHeight;

        igv.graphics.fillRect(ctx,
            0, 0, pixelWidth, pixelHeight,
            { 'fillStyle' : 'rgb(255, 255, 255)' });

        featureLists = [].concat.apply([], options.features);
        featureLists = featureLists.filter(function (a) {
                           var result = myself.selected.some(function (b) {
                               var result = (a.sample == b);
                               return result;
                           });
                           return result;
                       });
        if (featureLists) {
            bpPerPixel = options.bpPerPixel;
            bpStart    = options.bpStart;
            bpEnd      = bpStart + pixelWidth * bpPerPixel + 1;

            yCenter = pixelHeight / 2.0;
            igv.graphics.strokeLine(ctx,
                0         , yCenter,
                pixelWidth, yCenter,
                { 'color' : 'rgb(100, 100, 100)' });

            parsedLines = createAverage(featureLists, bpStart, bpEnd, bpPerPixel);
            yScale = Math.max(-parsedLines.min, parsedLines.max) / yCenter;

            for (i = 0; i < parsedLines.lines.length; i++) {
                cnv = parsedLines.lines[i];

                if (cnv.end < bpStart) continue;
                if (cnv.start > bpEnd) break;

                if (Math.abs(cnv.value) < myself.tolerance) continue;

                y = yCenter - Math.round(cnv.value / yScale);

                x1 = Math.round((cnv.start - bpStart) / bpPerPixel);
                x2 = Math.round((cnv.end - bpStart) / bpPerPixel);

                if (cnv.value < 0.0)
                    color = "rgb(255, 0, 0)";
                else
                    color = "rgb(0, 0, 255)";

                igv.graphics.strokeLine(ctx, x1, y, x2, y, {'strokeStyle': color}, 2);
            }
        }
    };

    createAverage = function (featureList, bpStart, bpEnd, bpPerPixel) {
        var i, j, k,
            cnv,
            mean,
            yMin = 0.0,
            yMax = 0.0,
            lineMaps = [ { start  : bpStart ,
                           end    : bpEnd   ,
                           sum    : 0.0     ,
                           count  : 1       ,
                           value  : 0.0     ,
                           data   : []      } ],
            newMaps, newMap,
            adjust;

        for (j = 0; j < featureList.length; j++) {
            cnv = featureList[j];
            if (cnv.end < bpStart || bpEnd < cnv.start)
                continue; // skip everything outside of the view

            function find(list, start, end) {
                var len = list.length,
                    a0 = 0, a1 = len - 1,
                    b0 = 0, b1 = len - 1,
                    mid;

                while (a1 - a0 > 1) {
                    mid = Math.floor((a0 + a1) / 2);
                    if (list[mid].start <= start)
                        a0 = mid;
                    else
                        a1 = mid;
                }
                while (b1 - b0 > 1) {
                    mid = Math.floor((b0 + b1) / 2);
                    if (list[mid].end <= end)
                        b0 = mid;
                    else
                        b1 = mid;
                }

                return { index: a0, count: b1 - a0 + 1, data: list.slice(a0, b1 + 1) };
            }

            adjust = find(lineMaps, cnv.start, cnv.end);
            newMaps = [];

            if (adjust.data.length === 0) {
                console.log("create average error: " + cnv);
                return [];
            }

            newMap = {};
            newMap.start = adjust.data[0].start;
            newMap.end   = cnv.start;
            newMap.sum   = adjust.data[0].sum;
            newMap.count = adjust.data[0].count;
            newMap.value = newMap.sum / newMap.count;
            newMaps.push(newMap);

            for (i = 0; i < adjust.data.length; i++) {
                newMap = {};
                newMap.start = Math.max(cnv.start, adjust.data[i].start);
                newMap.end   = Math.min(cnv.end,   adjust.data[i].end);
                newMap.count = adjust.data[i].count + 1;
                newMap.sum   = adjust.data[i].sum + cnv.value;
                newMap.value = newMap.sum / newMap.count;
                newMaps.push(newMap);
            }

            newMap = {};
            newMap.start = cnv.end;
            newMap.end   = adjust.data[adjust.data.length - 1].end;
            newMap.count = adjust.data[adjust.data.length - 1].count;
            newMap.sum   = adjust.data[adjust.data.length - 1].sum;
            newMap.value = newMap.sum / newMap.count;
            newMaps.push(newMap);

            newMaps = newMaps.filter(function (a) { return (a.start !== a.end) })

            newMaps = [adjust.index, adjust.count].concat(newMaps);
            lineMaps["splice"].apply(lineMaps, newMaps);
        }

        for (i = 0; i < lineMaps.length; i++) {
            yMin = Math.min(yMin, lineMaps[i].value);
            yMax = Math.max(yMax, lineMaps[i].value);
        }

        return {
            min: yMin,
            max: yMax,
            lines: lineMaps
        };
    };

    return igv;
}) (igv || {});
