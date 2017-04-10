Track Classes
=============

Tracks are meant to be created with a few specifics demands in mind. Every
track needs to implement the following functions::

   Track.prototype.getFeatures(chr, bpStart, bpEnd)
   Track.prototype.draw(options)

Where :code:`getFeatures()` must return a :code:`Promise` for an array of the
data. And :code:`draw()` doesn't return anything.

The other functions that are optional include (but not limited to)::

   TrackName.prototype.menuItemList(popover)
   TrackName.prototype.popupData(genomicLocation, x, y, referenceFrame)
   TrackName.prototype.altClick(genomicLocation, referenceFrame, event)
   TrackName.prototype.popupMenuItemList(config)

You can find examples of these functions below.

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

