/* TODO(david): license
 */

var igv = (function (igv) {
    /**
     * Configure the CNVTrack, initializing the reader, samples and display
     *
     * @param config - configuration for generalized track
     *
     * @class
     * @classdesc Track for the Varscan output as a .copynumber.called file.
     */
    igv.CNVTrack = function (config) {
        igv.configTrack(this, config);

        this.sampleName = null;
        this.samples = {};

        this.featureSource = new igv.FeatureSource(this.config);

        this.supportsWholeGenome = true;

        this.paintAxis = igv.paintAxis;
    };

    /**
     * Get a list of items to be included in the menu (gear icon) next to the
     * track.
     *
     * @param popover - element that comes up with the menu
     * @return {list} list of \{name, click\} pairs.
     */
    igv.CNVTrack.prototype.menuItemList = function (popover) {
        var myself = this;

        return [
        ];
    };

    /**
     * grab the features for the current view
     *
     * @param {string} chr - chromosome being viewed
     * @param {number} bpStart - first base pair
     * @param {number} bpEnd - last base pair
     *
     * @return {Promise}
     */
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

    /**
     * Draw the track
     *
     * @param options - options holding reference frame with pixel boundaries
     * and base pair values.
     */
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
            color,
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
            this.dataRange = { min: -yScale*yCenter, max: yScale*yCenter };

            for (i = 0; i < featureList.length; i++) {
                cnv = featureList[i];

                if (cnv.end < bpStart) continue;
                if (cnv.start > bpEnd) break;

                if (Math.abs(cnv.log2val) < myself.tolerance) continue;

                y = yCenter - Math.round(cnv.log2val / yScale);

                x1 = Math.round((cnv.start - bpStart) / bpPerPixel);
                x2 = Math.round((cnv.end - bpStart) / bpPerPixel);

                color = (cnv.log2val < 0.0) ? "rgb(255, 0, 0)" : "rgb(0, 0, 255)";

                if ((x2 - x1) > 5) {
                    igv.graphics.strokeLine(ctx, x1, y, x2, y, {'strokeStyle': color}, 2);
                } else {
                    igv.graphics.fillCircle(ctx, x1, y, 2, {'fillStyle': color});
                }
            }
        }
    };

    return igv;
})(igv || {});
