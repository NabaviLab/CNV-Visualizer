Feature Sourcing Classes
========================

.. class:: FeatureCache(featureList, range)

   feature/featureCache.js

   .. function:: FeatureCache.prototype.queryFeatures(chr, start, end)

      feature/featureCache.js

   .. function:: FeatureCache.prototype.allFeatures()

      feature/featureCache.js

.. class:: FeatureSource(config)

   feature/featureSource.js

   .. function:: FeatureSource.prototype.getFileHeader()

      feature/featureSource.js

   .. function:: FeatureSource.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      feature/featureSource.js

.. class:: AneuFeatureSource(config, thefilename)

   feature/aneuSource.js

   .. function:: AneuFeatureSource.prototype.getFeatures(chr, bpStart, bpEnd, success)

      feature/aneuSource.js

   .. function:: AneuFeatureSource.prototype.getFeatureCache(success)

      feature/aneuSource.js

   .. function:: AneuFeatureSource.prototype.loadFeatures(continuation, range)

      feature/aneuSource.js

.. class:: T2DVariantSource(config)

   gwas/t2dVariantSource.js

   .. function:: T2DVariantSource.prototype.getFeatures(chr, bpStart, bpEnd)

      gwas/t2dVariantSource.js

.. class:: TDFSource(config)

   tdf/tdfSource.js

   .. function:: TDFSource.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      tdf/tdfSource.js

.. class:: BamSource(config)

   bam/bamSource.js

   .. function:: BamSource.prototype.setViewAsPairs(bool)

      bam/bamSource.js

   .. function:: BamSource.prototype.getAlignments(chr, bpStart, bpEnd)

      bam/bamSource.js

