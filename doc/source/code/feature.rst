Feature Sourcing Classes
========================

.. class:: igv.FeatureCache(featureList, range)

   feature/featureCache.js

   .. function:: igv.FeatureCache.prototype.queryFeatures(chr, start, end)

      feature/featureCache.js

   .. function:: igv.FeatureCache.prototype.allFeatures()

      feature/featureCache.js

.. class:: igv.FeatureSource(config)

   feature/featureSource.js

   .. function:: igv.FeatureSource.prototype.getFileHeader()

      feature/featureSource.js

   .. function:: igv.FeatureSource.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      feature/featureSource.js

.. class:: igv.AneuFeatureSource(config, thefilename)

   feature/aneuSource.js

   .. function:: igv.AneuFeatureSource.prototype.getFeatures(chr, bpStart, bpEnd, success)

      feature/aneuSource.js

   .. function:: igv.AneuFeatureSource.prototype.getFeatureCache(success)

      feature/aneuSource.js

   .. function:: igv.AneuFeatureSource.prototype.loadFeatures(continuation, range)

      feature/aneuSource.js

   .. function:: igv.AneuFeatureSource.prototype.getFeatures(chr, bpStart, bpEnd, success)

      feature/aneuSource.js

   .. function:: igv.AneuFeatureSource.prototype.getFeatureCache(success)

      feature/aneuSource.js

   .. function:: igv.AneuFeatureSource.prototype.loadFeatures(continuation, range)

      feature/aneuSource.js

.. class:: igv.T2DVariantSource(config)

   gwas/t2dVariantSource.js

   .. function:: igv.T2DVariantSource.prototype.getFeatures(chr, bpStart, bpEnd)

      gwas/t2dVariantSource.js

.. class:: igv.TDFSource(config)

   tdf/tdfSource.js
   .. function:: igv.TDFSource.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      tdf/tdfSource.js

.. class:: igv.BamSource(config)

   bam/bamSource.js

   .. function:: igv.BamSource.prototype.setViewAsPairs(bool)

      bam/bamSource.js

   .. function:: igv.BamSource.prototype.getAlignments(chr, bpStart, bpEnd)

      bam/bamSource.js

