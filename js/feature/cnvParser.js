/* TODO(david): LICENSE
 */

var igv = (function (igv) {

    /**
     * Parser for the Varscan output files (.copynumber.called) files. A
     * noisy version of the copynumber data, before they are turned into
     * .seg files
     *
     * @class
     */
    igv.CNVParser = function () {
    }

    /**
     * Gets a list of tokens related to the headers
     * 
     * @param {string} data - columnized input data
     * @return {Object} header list
     */
    igv.CNVParser.prototype.parseHeader = function (data) {
        var lines = data.splitLines(),
            len   = lines.length,
            line,
            i,
            tokens;

        for (i = 0; i < len; i++) {
            line = lines[i];
            if (line.startsWith("#")) {
                continue;
            }
            else {
                tokens = line.split("\t");
                this.header = {
                    headings: tokens,
                    lineCount: i + 1
                };
                return this.header;
            }
        }

        return this.header;
    }

    /**
     * Gets a list of the features out of the input data
     *
     * @param {string} data - columnized input data
     * @return {list} feature list
     */
    igv.CNVParser.prototype.parseFeatures = function (data) {
        var lines = data ? data.splitLines() : [],
            len   = lines.length,
            tokens,
            allFeatures = [],
            line,
            i,
            dataColumns;

        if (!this.header) {
            this.header = this.parseHeader(data);
        }

        dataColumns = this.header.headings.length - 1;

        for (i = this.header.lineCount; i < len; i++) {
            line = lines[i];
            tokens = lines[i].split("\t");
            if (tokens.length > dataColumns) {
                allFeatures.push({
                    chr: tokens[0],
                    start: parseInt(tokens[1]),
                    end: parseInt(tokens[2]),
                    log2val: parseFloat(tokens[6])
                });
            }
        }

        return allFeatures;
    }

    return igv;
})(igv || {});
