Track Classes
=============

.. class:: igv.WIGTrack(config)

   feature/wigTrack.js

   .. function:: igv.WIGTrack.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      feature/wigTrack.js

   .. function:: igv.WIGTrack.prototype.menuItemList(popover)

      feature/wigTrack.js

   .. function:: igv.WIGTrack.prototype.draw(options)

      feature/wigTrack.js

.. class:: igv.CNVAccumTrack(config)

   feature/cnvAccumTrack.js

   .. function:: igv.CNVAccumTrack.prototype.addToSelectFrom(thisObj)

      feature/cnvAccumTrack.js

   .. function:: igv.CNVAccumTrack.prototype.removeFromSelectFrom(thisObj)

      feature/cnvAccumTrack.js

   .. function:: igv.CNVAccumTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      feature/cnvAccumTrack.js

   .. function:: igv.CNVAccumTrack.prototype.menuItemList(popover)

      feature/cnvAccumTrack.js

   .. function:: igv.CNVAccumTrack.prototype.toggleTrack(sampleName)

      feature/cnvAccumTrack.js

   .. function:: igv.CNVAccumTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/cnvAccumTrack.js

   .. function:: igv.CNVAccumTrack.prototype.draw(options)

      feature/cnvAccumTrack.js

.. class:: igv.SegTrack(config)

   feature/segTrack.js

   .. function:: igv.SegTrack.prototype.menuItemList(popover)

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.toggleSampleHeight()

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.draw(options)

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.computePixelHeight(features)

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.sortSamples(chr, bpStart, bpEnd, direction)

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.altClick(genomicLocation, referenceFrame, event)

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      feature/segTrack.js

   .. function:: igv.SegTrack.prototype.popupMenuItemList(config)

      feature/segTrack.js

.. class:: igv.AneuTrack(config)

   feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.getSummary(chr, bpStart, bpEnd, continuation)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.loadSummary(chr, bpStart, bpEnd, continuation)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.getColor(value)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.draw(options)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.computePixelHeight(features)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.sortSamples(chr, bpStart, bpEnd, direction, callback)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.altClick(genomicLocation, referenceFrame, event)

      feature/aneuTrack.js

   .. function:: igv.AneuTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      feature/aneuTrack.js

.. class:: igv.FeatureTrack(config)

   feature/featureTrack.js

   .. function:: igv.FeatureTrack.prototype.getFileHeader()

      feature/featureTrack.js

   .. function:: igv.FeatureTrack.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      feature/featureTrack.js

   .. function:: igv.FeatureTrack.prototype.computePixelHeight(features)

      feature/featureTrack.js

   .. function:: igv.FeatureTrack.prototype.draw(options)

      feature/featureTrack.js

   .. function:: igv.FeatureTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      feature/featureTrack.js

   .. function:: igv.FeatureTrack.prototype.menuItemList(popover)

      feature/featureTrack.js

.. class:: igv.CNVTrack(config)

   feature/cnvTrack.js

   .. function:: igv.CNVTrack.prototype.menuItemList(popover)

      feature/cnvTrack.js

   .. function:: igv.CNVTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      feature/cnvTrack.js

   .. function:: igv.CNVTrack.prototype.draw(options)

      feature/cnvTrack.js

.. class:: igv.EqtlTrack(config)

   gtex/eqtlTrack.js

   .. function:: igv.EqtlTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      gtex/eqtlTrack.js

   .. function:: igv.EqtlTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      gtex/eqtlTrack.js

   .. function:: igv.EqtlTrack.prototype.draw(options)

      gtex/eqtlTrack.js

   .. function:: igv.EqtlTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      gtex/eqtlTrack.js

.. class:: igv.GWASTrack(config)

   gwas/gwasTrack.js

   .. function:: igv.GWASTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      gwas/gwasTrack.js

   .. function:: igv.GWASTrack.prototype.draw(options)

      gwas/gwasTrack.js

   .. function:: igv.GWASTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      gwas/gwasTrack.js

   .. function:: igv.GWASTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      gwas/gwasTrack.js

.. class:: igv.RulerTrack()

   rulerTrack.js

   .. function:: igv.RulerTrack.prototype.locusLabelWithViewport(viewport)

      rulerTrack.js

   .. function:: igv.RulerTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      rulerTrack.js

   .. function:: igv.RulerTrack.prototype.draw(options)

      rulerTrack.js

.. class:: igv.SequenceTrack(config)

   sequenceTrack.js

   .. function:: igv.SequenceTrack.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      sequenceTrack.js

   .. function:: igv.SequenceTrack.prototype.draw(options)

      sequenceTrack.js

.. class:: igv.VariantTrack(config)

   variant/variantTrack.js

   .. function:: igv.VariantTrack.prototype.getFileHeader()

      variant/variantTrack.js

   .. function:: igv.VariantTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      variant/variantTrack.js

   .. function:: igv.VariantTrack.prototype.computePixelHeight(features)

      variant/variantTrack.js

   .. function:: igv.VariantTrack.prototype.draw(options)

      variant/variantTrack.js

   .. function:: igv.VariantTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      variant/variantTrack.js

   .. function:: igv.VariantTrack.prototype.menuItemList(popover)

      variant/variantTrack.js

