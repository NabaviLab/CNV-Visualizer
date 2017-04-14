Track Classes
=============

.. highlight:: js

Tracks are meant to be created with a few specifics demands in mind. Every
track needs to implement the following functions::

   Track.prototype.getFeatures(chr, bpStart, bpEnd)
   Track.prototype.draw(options)

Where `getFeatures()` must return a `Promise` for an array of the data. And
`draw()` doesn't return anything.

The other functions that are optional include (but not limited to)::

   TrackName.prototype.menuItemList(popover)
   TrackName.prototype.popupData(genomicLocation, x, y, referenceFrame)
   TrackName.prototype.altClick(genomicLocation, referenceFrame, event)
   TrackName.prototype.popupMenuItemList(config)
   TrackName.prototype.paintAxis(ctx, pixelWidth, pixelHeight)
   TrackName.prototype.computePixelHeight(features)

You can find examples of these functions below.

Configuration
-------------

When creating a track, the `config`, it follows the structure (where everthing
left without a value has no default)::

    config = {
        name:                   , /* **REQUIRED** Display name (label). */
        url:                    , /* **REQUIRED** URL to the track data resource,
                                     such as a file or webservice. */
        indexURL:               , /* URL to a file index, such as a BAM .bai,
                                     Tabix .tbi, or Tribble .idx file. */
        sourceType: "file"      , /* Type of data source.  Valid values are "file",
                                     "gcs" for Google Cloud Storage, and "ga4gh" for
                                     the Global Alliance API */
        type:                   , /* Track type, infered from file extension if none */
        format:                 , /* File format, infered from file extension if none */
        indexed:                , /* Flag used to indicate if a file is indexed or not.
                                     If indexURL is provided this flag is redundant,
                                     its main purpose is to indicate that a file is not
                                     indexed.  */
        order:                  , /* Integer value specifying relative order of track
                                     position on the screen.  To pin a track to the
                                     bottom use Number.MAX_VALUE.  If no order is
                                     specified, tracks appear in order of their addition. */
        color:                  , /* CSS color value for track features, e.g. "#ff0000"
                                     or "rgb(100,0,100)"  */
        height: 50              , /* Initial height of track viewport in pixels */
        autoHeight: true        , /* If true, then track height is adjusted dynamically,
                                     within the bounds set by minHeight and maxHeight,
                                     to accomdodate features in view */
        minHeight: 50           , /* Minimum height of track in pixels */
        maxHeight: 500          , /* Maximum height of track in pixels */
        visibilityWindow: 30000 , /* Maximum window size in base pairs for which indexed
                                     annotations or variants are displayed */
        /** ANNOTATIONS ONLY **/
        displayMode: "COLLAPSED" , /* Annotation display mode, one of "COLLAPSED",
                                      "EXPANDED", "SQUISHED" */
        expandedRowHeight: 30    , /* Height of each row of features in "EXPANDED" mode */
        squishedRowHeight: 15    , /* Height of each row of features in "SQUISHED" mode */
        nameField: "Name"        , /* For GFF/GTF file formats.  Name of column 9 property
                                      to be used for feature label */
        maxRows: 500             , /* Maximum number of rows of features to display */
        searchable: false        , /* If true, feature names for this track can be
                                      searched for.  Use this option with caution, it
                                      is memory intensive.  This option should
                                      **will not work** with indexed tracks. */
        /** WIG ONLY **/
        min: 0                    , /* Sets the minimum value for the data (y-axis)
                                       scale.  Usually zero.  */
        max:                      , /* Sets the  maximum value for the data (y-axis)
                                       scale. */
        color: "rgb(150,150,150)" , /* Track color. */
        /** ALIGNMENT ONLY (BAM, etc) **/
        viewAsPairs: false      , /* If true, paired reads are drawn as a single
                                     alignment.  */
        pairsSupported: true    , /* If false, mate information in paired reads is
                                     ignored during downsampling and the
                                     'View as Pairs' option is removed from the
                                     alignment track menu. */
        deletionColor: "black"; , /* Color of line representing a deletion */
        skippedColor: "rgb(150, 170, 170)"   , /* Color of line representing a
                                                  skipped region (e.g. splice
                                                  junction) */
        insertionColor: "rgb(138, 94, 161)"  , /* Color of marker for insertions */
        negStrandColor: "rgba(150, 150, 230, 0.75)" , /* Color of alignment on negative
                                                         strand.
                                                         Applicable if colorBy = "strand" */
        posStrandColor: "rgba(230, 150, 150, 0.75)" , /* Color of alignment or position
                                                         strand.
                                                         Applicable if colorBy = "strand" */
        colorBy: "none"         , /* Alignment color option:
                                     one of "none", "strand",
                                     "firstInPairStrand", or "tag".
                                     Specify tag with colorByTag */
        colorByTag:             , /* Specific tag to color alignment by.  */
        bamColorTag: "YC"       , /* Specifies a special tag that
                                     explicitly encodes an r,g,b color
                                     value. If "YC" does not encode
                                     an r,g,b color value set bamColorTag
                                     to null.  Must also set "colorBy"
                                     to "tag" to enable this option.  */
        samplingWindowSize: 100 , /* Window (bucket) size for
                                     alignment downsampling in base pairs */
        samplingDepth: 50.      , /* Number of alignments to keep per
                                     bucket.
                                     WARNING:  Setting this sampling
                                     depth to a high value will likely
                                     freeze the browser when viewing
                                     areas of deep coverage. */
        maxRows: 1000           , /* Maximum number of rows of alignments
                                     to display.
                                     Note: due to a limit on canvas
                                     height the maximum value for this
                                     parameter is ~2300 at the default
                                     row height of 14. */
        alignmentRowHeight: 14  , /* Height in pixels of an alignment
                                     row when in expanded mode */
        filter:                 , /* Alignment filter object. */
        /** GA4GH ALIGNMENT (sourceType: "ga4gh") **/
        url:             , /* **REQUIRED** URL to the ga4gh endpoint 
                              (e.g. https://www.googleapis.com/genomics/v1beta2). */
        readGroupSetIds: , /* **REQUIRED** ID of the read group set represented
                              by this track. (e.g. 'CMvnhpKTFhCjz9_25e_lCw'). */
        /** ALIGNMENT FILTER **/
        vendorFailed: true   , /* filter alignments marked as failing vendor
                                  quality checks (bit 0x200) */
        duplicates: true     , /* filter alignments marked as a duplicate
                                  (bit 0x400) */
        secondary: false     , /* filter alignments marked secondary 
                                  (bit 0x100) */
        supplementary: false , /* filter alignments marked as supplmentary
                                  (bit 0x800) */
        mqThreshold: 0       , /* filter alignments with mapping quality < supplied
                                   value (a number) */
        /** VARIANT ONLY **/
        displayMode: EXPANDED             , /* Display option.
                                               COLLAPSED => show variants only,
                                               SQUISHED and EXPANDED => show calls. */
        homvarColor: "rgb(17,248,254)"    , /* CSS color used to represent homozygous
                                               non-reference calls.  */
        hetvarColor: "rgb(34,12,253)"     , /* CSS color used to represent 
                                               heterozygous calls. */
        homrefColor: "rgb(200, 200, 200)" , /* CSS color used to represent homozygous
                                               reference calls. */
        /** GA4GH VARIANT (sourceType: "ga4gh") **/
        url:          , /* **REQUIRED** URL to the ga4gh endpoint 
                           (e.g. https://www.googleapis.com/genomics/v1beta2). */
        variantSetId: , /* **REQUIRED** ID of the variant set represented by
                           this track. (e.g. '10473108253681171589'). */
        callSetIds:   , /* Array of GACallSet IDs to include with track.
                           Optional. If omitted, all call sets are included */
    }

.. class:: AneuTrack(config)

   feature/aneuTrack.js

   .. function:: AneuTrack.prototype.getSummary(chr, bpStart, bpEnd, continuation)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.loadSummary(chr, bpStart, bpEnd, continuation)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.getColor(value)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.draw(options)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.computePixelHeight(features)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.sortSamples(chr, bpStart, bpEnd, direction, callback)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.altClick(genomicLocation, referenceFrame, event)

      feature/aneuTrack.js

   .. function:: AneuTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      feature/aneuTrack.js

.. class:: CNVAccumTrack(config)

   feature/cnvAccumTrack.js

   .. function:: CNVAccumTrack.prototype.addToSelectFrom(thisObj)

      feature/cnvAccumTrack.js

   .. function:: CNVAccumTrack.prototype.removeFromSelectFrom(thisObj)

      feature/cnvAccumTrack.js

   .. function:: CNVAccumTrack.prototype.popupData(genomicLocation, xOffset, \
                                                   yOffset, referenceFrame)

      feature/cnvAccumTrack.js

   .. function:: CNVAccumTrack.prototype.menuItemList(popover)

      feature/cnvAccumTrack.js

   .. function:: CNVAccumTrack.prototype.toggleTrack(sampleName)

      feature/cnvAccumTrack.js

   .. function:: CNVAccumTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/cnvAccumTrack.js

   .. function:: CNVAccumTrack.prototype.draw(options)

      feature/cnvAccumTrack.js

.. class:: CNVTrack(config)

   feature/cnvTrack.js

   .. function:: CNVTrack.prototype.menuItemList(popover)

      feature/cnvTrack.js

   .. function:: CNVTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/cnvTrack.js

   .. function:: CNVTrack.prototype.draw(options)

      feature/cnvTrack.js

.. class:: EqtlTrack(config)

   gtex/eqtlTrack.js

   .. function:: EqtlTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      gtex/eqtlTrack.js

   .. function:: EqtlTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      gtex/eqtlTrack.js

   .. function:: EqtlTrack.prototype.draw(options)

      gtex/eqtlTrack.js

   .. function:: EqtlTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      gtex/eqtlTrack.js

.. class:: FeatureTrack(config)

   feature/featureTrack.js

   .. function:: FeatureTrack.prototype.getFileHeader()

      feature/featureTrack.js

   .. function:: FeatureTrack.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      feature/featureTrack.js

   .. function:: FeatureTrack.prototype.computePixelHeight(features)

      feature/featureTrack.js

   .. function:: FeatureTrack.prototype.draw(options)

      feature/featureTrack.js

   .. function:: FeatureTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      feature/featureTrack.js

   .. function:: FeatureTrack.prototype.menuItemList(popover)

      feature/featureTrack.js

.. class:: GWASTrack(config)

   gwas/gwasTrack.js

   .. function:: GWASTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      gwas/gwasTrack.js

   .. function:: GWASTrack.prototype.draw(options)

      gwas/gwasTrack.js

   .. function:: GWASTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      gwas/gwasTrack.js

   .. function:: GWASTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      gwas/gwasTrack.js

.. class:: RulerTrack()

   rulerTrack.js

   .. function:: RulerTrack.prototype.locusLabelWithViewport(viewport)

      rulerTrack.js

   .. function:: RulerTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      rulerTrack.js

   .. function:: RulerTrack.prototype.draw(options)

      rulerTrack.js

.. class:: SegTrack(config)

   feature/segTrack.js

   .. function:: SegTrack.prototype.menuItemList(popover)

      feature/segTrack.js

   .. function:: SegTrack.prototype.toggleSampleHeight()

      feature/segTrack.js

   .. function:: SegTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/segTrack.js

   .. function:: SegTrack.prototype.draw(options)

      feature/segTrack.js

   .. function:: SegTrack.prototype.computePixelHeight(features)

      feature/segTrack.js

   .. function:: SegTrack.prototype.sortSamples(chr, bpStart, bpEnd, direction)

      feature/segTrack.js

   .. function:: SegTrack.prototype.altClick(genomicLocation, referenceFrame, event)

      feature/segTrack.js

   .. function:: SegTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      feature/segTrack.js

   .. function:: SegTrack.prototype.popupMenuItemList(config)

      feature/segTrack.js

.. class:: SequenceTrack(config)

   sequenceTrack.js

   .. function:: SequenceTrack.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      sequenceTrack.js

   .. function:: SequenceTrack.prototype.draw(options)

      sequenceTrack.js

.. class:: VariantTrack(config)

   variant/variantTrack.js

   .. function:: VariantTrack.prototype.getFileHeader()

      variant/variantTrack.js

   .. function:: VariantTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      variant/variantTrack.js

   .. function:: VariantTrack.prototype.computePixelHeight(features)

      variant/variantTrack.js

   .. function:: VariantTrack.prototype.draw(options)

      variant/variantTrack.js

   .. function:: VariantTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      variant/variantTrack.js

   .. function:: VariantTrack.prototype.menuItemList(popover)

      variant/variantTrack.js

.. class:: WIGTrack(config)

   feature/wigTrack.js

   .. function:: WIGTrack.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      feature/wigTrack.js

   .. function:: WIGTrack.prototype.menuItemList(popover)

      feature/wigTrack.js

   .. function:: WIGTrack.prototype.draw(options)

      feature/wigTrack.js

