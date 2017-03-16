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
                return trackview.track.type === "cnv";
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
            if (track.type === "cnv")
                thisObj.selectFrom.push(track);
        };
    };

    igv.CNVAccumTrack.prototype.removeFromSelectFrom = function (thisObj) {
        return function (track) {
            if (thisObj.selectFrom.indexOf(track) > -1)
                thisObj.selectFrom.splice(thisObj.selectFrom.indexOf(track), 1);

            if (thisObj.selected.indexOf(track) > -1)
                thisObj.selected.splice(thisObj.selected.indexOf(track), 1);
        };
    };

    igv.CNVAccumTrack.prototype.menuItemList = function (popover) {
        var myself = this,
            toggleList = [],
            tName;

        this.selectFrom.forEach(function (track) {
            tName = "";

            if (myself.selected.indexOf(track) > -1)
                tName += "- ";
            else
                tName += "+ ";

            toggleList.push({
                name: tName + track.name,
                click: function () {
                    popover.hide();
                    myself.toggleTrack(track);
                }
            });
        });

        return toggleList;
    };

    igv.CNVAccumTrack.prototype.toggleTrack = function (track) {
        var index = this.selected.indexOf(track);
        if (index > -1)
            this.selected.splice(index, 1);
        else
            this.selected.push(track);
        this.trackView.update();
    };

    igv.CNVAccumTrack.prototype.getFeatures = function (chr, bpStart, bpEnd) {
        var myself = this,
            promises = [],
            i;

        for (i = 0; i < this.selected.length; i++) {
            promises.push(this.selected[i].getFeatures(chr, bpStart, bpEnd));
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
            y;

        ctx = options.context;
        pixelWidth = options.pixelWidth;
        pixelHeight = options.pixelHeight;

        igv.graphics.fillRect(ctx,
            0, 0, pixelWidth, pixelHeight,
            { 'fillStyle' : 'rgb(255, 255, 255)' });

        featureLists = options.features;
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

                if ((x2 - x1) > 3) {
                    igv.graphics.strokeLine(ctx, x1, y, x2, y, {'fillStyle': 'rgb(0, 0 255)'}, 2);
                }
                else {
                    igv.graphics.fillCircle(ctx, x1, y, 2, {'fillStyle': 'rgb(0, 0, 255)'});
                }

                igv.graphics.fillRect(ctx, x1, y, x2 - x1, yCenter - y, {'fillStyle': 'rgb(125, 125, 125)'});
            }
        }
    };

    createAverage = function (featureLists, bpStart, bpEnd, bpPerPixel) {
        var i, j, k,
            cnv,
            mean,
            yMin = 0.0,
            yMax = 0.0,
            lineMaps = [ { start  : bpStart ,
                           end    : bpStart ,
                           sum    : 0.0     ,
                           count  : 0       ,
                           value  : 0.0     ,
                           data   : []      } ] ;

        for (var i = 0; i < featureLists.length; i++) {
            var k = 0;
            for (var j = 0; j < featureLists[i].length; j++) {
                cnv = featureLists[i][j];
                if (cnv.end < bpStart || bpEnd < cnv.start)
                    continue; // skip everything outside of the view

                yMin = Math.min(yMin, cnv.log2val);
                yMax = Math.max(yMax, cnv.log2val);

                // Ensure the CNV is within reasonable bounds of the current features
                while (k < lineMaps.length) {
                    if ((cnv.start - lineMaps[k].end) < (3 * bpPerPixel)
                            && (lineMaps[k].start - cnv.end) < (3 * bpPerPixel)) {
                        // We're within reasonable estimates of the average
                        if (Math.abs(lineMaps[k].value - cnv.log2val) < 2.5) {
                            lineMaps[k].start  = Math.min(lineMaps[k].start, cnv.start);
                            lineMaps[k].end    = Math.max(lineMaps[k].end,   cnv.end);
                            lineMaps[k].sum   += cnv.log2val;
                            lineMaps[k].count += 1;
                            lineMaps[k].value  = lineMaps[k].sum / lineMaps[k].count;
                            lineMaps[k].data.push(cnv);
                        }
                        // Outside of the average, need to create a new line from here
                        else {
                            // ensure that we can split somewhere along the list
                            lineMaps[k].data.sort(function (a, b) { return a.start - b.start });
                            newLine = {};
                            newLine.data  = lineMaps[k].data
                                                       .splice(lineMaps[k].data
                                                                          .findIndex(function (a) { 
                                                                              return a.start > cnv.start 
                                                                          }));
                            lineMaps[k].sum = lineMaps[k].data.reduce(function (a,b) { return a + b.log2val }, 0)
                            console.log(lineMaps[k].data.length);
                            lineMaps[k].count = lineMaps[k].data.length
                            lineMaps[k].value = lineMaps[k].sum / lineMaps[k].count
                            newLine.start = cnv.start;
                            newLine.end   = Math.max(lineMaps[k].end, cnv.end);
                            newLine.sum   = newLine.data.reduce(function (a,b) { return a + b.log2val }, 0) + cnv.log2val;
                            console.log(newLine.data.length)
                            newLine.count = newLine.data.length + 1;
                            newLine.data.push(cnv);
                            lineMaps.splice(k+1, 0, newLine);
                            k += 1;
                        }
                    }
                    else if (k + 1 < lineMaps.length) {
                        k += 1;
                        continue;
                    }
                    else {
                        newLine = {};
                        newLine.start = cnv.start;
                        newLine.end   = cnv.end;
                        newLine.sum   = cnv.log2val;
                        newLine.count = 1;
                        newLine.value = newLine.sum / newLine.count
                        newLine.data  = [cnv];
                        lineMaps.push(newLine);
                    }
                    break;
                }
            }
        }

        return {
            min: yMin,
            max: yMax,
            lines: lineMaps
        };
    };

    return igv;
}) (igv || {});
