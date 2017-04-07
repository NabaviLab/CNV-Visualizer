File Reader Classes
===================

.. class:: igv.CustomServiceReader(config)

   feature/customServiceReader.js

   .. function:: igv.CustomServiceReader.prototype.readFeatures(chr, start, end)

      feature/customServiceReader.js

.. class:: igv.FeatureFileReader(config)

   feature/featureFileReader.js

   .. function:: igv.FeatureFileReader.prototype.readHeader()

      feature/featureFileReader.js

   .. function:: igv.FeatureFileReader.prototype.readFeatures(chr, start, end)

      feature/featureFileReader.js

.. class:: igv.Ga4ghVariantReader(config)

   ga4gh/ga4ghVariantReader.js

   .. function:: igv.Ga4ghVariantReader.prototype.readHeader()

      ga4gh/ga4ghVariantReader.js

   .. function:: igv.Ga4ghVariantReader.prototype.readFeatures(chr, bpStart, bpEnd)

      ga4gh/ga4ghVariantReader.js

   .. function:: igv.Ga4ghVariantReader.prototype.readMetadata()

      ga4gh/ga4ghVariantReader.js

.. class:: igv.Ga4ghAlignmentReader(config)

   ga4gh/ga4ghAlignmentReader.js

   .. function:: igv.Ga4ghAlignmentReader.prototype.readAlignments(chr, bpStart, bpEnd)

      ga4gh/ga4ghAlignmentReader.js

   .. function:: igv.Ga4ghAlignmentReader.prototype.readMetadata()

      ga4gh/ga4ghAlignmentReader.js

.. class:: igv.ImmVarReader(config)

   gtex/immvarReader.js

   .. function:: igv.ImmVarReader.prototype.readFeatures(queryChr, queryStart, queryEnd)

      gtex/immvarReader.js

.. class:: igv.GtexFileReader(config)

   gtex/gtexFileReader.js

   .. function:: igv.GtexFileReader.prototype.readFeatures(chr, bpStart, bpEnd)

      gtex/gtexFileReader.js

.. class:: igv.GtexReader(config)

   gtex/gtexReader.js

   .. function:: igv.GtexReader.prototype.readFeatures(chr, bpStart, bpEnd)

      gtex/gtexReader.js

.. class:: igv.HiCReader(config)

   hic/hicReader.js

   .. function:: igv.HiCReader.prototype.readHeader()

      hic/hicReader.js

   .. function:: igv.HiCReader.prototype.readFooter(key)

      hic/hicReader.js

   .. function:: igv.HiCReader.prototype.readMatrix(key)

      hic/hicReader.js

   .. function:: igv.HiCReader.prototype.readBlock(blockNumber, zd)

      hic/hicReader.js

.. class:: igv.TDFReader(config)

   tdf/tdfReader.js

   .. function:: igv.TDFReader.prototype.readHeader()

      tdf/tdfReader.js

   .. function:: igv.TDFReader.prototype.readDataset(chr, windowFunction,  zoom)

      tdf/tdfReader.js

   .. function:: igv.TDFReader.prototype.readRootGroup()

      tdf/tdfReader.js

   .. function:: igv.TDFReader.prototype.readGroup(name)

      tdf/tdfReader.js

   .. function:: igv.TDFReader.prototype.readTile(indexEntry, nTracks)

      tdf/tdfReader.js

.. class:: igv.BamReader(config)

   bam/bamReader.js

   .. function:: igv.BamReader.prototype.readAlignments(chr, bpStart, bpEnd)

      bam/bamReader.js

   .. function:: igv.BamReader.prototype.readHeader()

      bam/bamReader.js

.. class:: igv.BWReader(config)

   bigwig/bwReader.js

   .. function:: igv.BWReader.prototype.getZoomHeaders()

      bigwig/bwReader.js

   .. function:: igv.BWReader.prototype.loadHeader()

      bigwig/bwReader.js

   .. function:: igv.BWReader.prototype.loadRPTree(offset)

      bigwig/bwReader.js


.. class:: igv.BufferedReader(config, contentLength, bufferSize)

   bigwig/bufferedReader.js

   .. function:: igv.BufferedReader.prototype.dataViewForRange(requestedRange, asUint8)

      bigwig/bufferedReader.js

