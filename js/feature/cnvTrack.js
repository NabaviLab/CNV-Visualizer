/* TODO(david): license
 */

var igv = (function (igv) {
    /* Configure the CNVTrack, initializing the reader, samples and display */
    igv.CNVTrack = function (config) {
        igv.configTrack(this, config);

        this.sampleName = null;
        this.samples = {};

        // TODO(david): create a parser for this
        this.featureSource = new igv.FeatureSource(this.config);

        this.supportsWholeGenome = true;
    };

    /* Get a list of items to be included in the menu (gear icon) next to the track */
    igv.CNVTrack.prototype.menuItemList = function (popover) {
        var myself = this;

        return [
        ];
    };

    /* grab the features for the current view */
    igv.CNVTrack.prototype.getFeatures = function (chr, bpStart, bpEnd) {
        var myself = this;

        return new Promise(function (fulfill, reject) {
            // have to grab features if there are no samples
            myself.featureSource
                  .getFeatures(chr, bpStart, bpEnd)
                  .then(fulfill)
                  .catch(reject);
        });
    };

    /* draw the track */
    igv.CNVTrack.prototype.draw = function (options) {
        var myself = this,
            featureList,
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
            x1,
            x2,
            y;

        ctx = options.context;
        pixelWidth = options.pixelWidth;
        pixelHeight = options.pixelHeight;
        
        igv.graphics.fillRect(ctx,
            0, 0, pixelWidth, pixelHeight,
            {'fillStyle': 'rgb(255, 255, 255)'});

        featureList = options.features;
        if (featureList) {
            bpPerPixel = options.bpPerPixel;
            bpStart = options.bpStart;
            bpEnd = bpStart + pixelWidth * bpPerPixel + 1;

            yCenter = pixelHeight / 2.0;
            igv.graphics.strokeLine(ctx,
                0,          yCenter,
                pixelWidth, yCenter,
                {'color': 'rgb(100, 100, 100)'});

            for (i = 0; i < featureList.length; i++) {
                yMin = Math.min(yMin, featureList[i].log2val);
                yMax = Math.max(yMax, featureList[i].log2val);
            }
            yScale = Math.max(-yMin, yMax) / yCenter;

            for (i = 0; i < featureList.length; i++) {
                cnv = featureList[i];

                if (cnv.end < bpStart) continue;
                if (cnv.start > bpEnd) break;

                if (Math.abs(cnv.log2val) < myself.tolerance) continue;

                y = yCenter + Math.round(cnv.log2val / yScale);

                x1 = Math.round((cnv.start - bpStart) / bpPerPixel);
                x2 = Math.round((cnv.end - bpStart) / bpPerPixel);

                if ((x2 - x1) > 5) {
                    igv.graphics.strokeLine(ctx, x1, y, x2, y, {'strokeStyle': 'rgb(0, 0, 255)'}, 2);
                } else {
                    igv.graphics.fillCircle(ctx, x1, y, 2, {'fillStyle': 'rgb(0, 0, 255)'});
                }
            }
        }
    };

    return igv;
})(igv || {});
