File Reader Classes
===================

.. class:: CustomServiceReader(config)

   feature/customServiceReader.js

   .. function:: CustomServiceReader.prototype.readFeatures(chr, start, end)

      feature/customServiceReader.js

.. class:: FeatureFileReader(config)

   feature/featureFileReader.js

   .. function:: FeatureFileReader.prototype.readHeader()

      feature/featureFileReader.js

   .. function:: FeatureFileReader.prototype.readFeatures(chr, start, end)

      feature/featureFileReader.js

.. class:: Ga4ghVariantReader(config)

   ga4gh/ga4ghVariantReader.js

   .. function:: Ga4ghVariantReader.prototype.readHeader()

      ga4gh/ga4ghVariantReader.js

   .. function:: Ga4ghVariantReader.prototype.readFeatures(chr, bpStart, bpEnd)

      ga4gh/ga4ghVariantReader.js

   .. function:: Ga4ghVariantReader.prototype.readMetadata()

      ga4gh/ga4ghVariantReader.js

.. class:: Ga4ghAlignmentReader(config)

   ga4gh/ga4ghAlignmentReader.js

   .. function:: Ga4ghAlignmentReader.prototype.readAlignments(chr, bpStart, bpEnd)

      ga4gh/ga4ghAlignmentReader.js

   .. function:: Ga4ghAlignmentReader.prototype.readMetadata()

      ga4gh/ga4ghAlignmentReader.js

.. class:: ImmVarReader(config)

   gtex/immvarReader.js

   .. function:: ImmVarReader.prototype.readFeatures(queryChr, queryStart, queryEnd)

      gtex/immvarReader.js

.. class:: GtexFileReader(config)

   gtex/gtexFileReader.js

   .. function:: GtexFileReader.prototype.readFeatures(chr, bpStart, bpEnd)

      gtex/gtexFileReader.js

.. class:: GtexReader(config)

   gtex/gtexReader.js

   .. function:: GtexReader.prototype.readFeatures(chr, bpStart, bpEnd)

      gtex/gtexReader.js

.. class:: HiCReader(config)

   hic/hicReader.js

   .. function:: HiCReader.prototype.readHeader()

      hic/hicReader.js

   .. function:: HiCReader.prototype.readFooter(key)

      hic/hicReader.js

   .. function:: HiCReader.prototype.readMatrix(key)

      hic/hicReader.js

   .. function:: HiCReader.prototype.readBlock(blockNumber, zd)

      hic/hicReader.js

.. class:: TDFReader(config)

   tdf/tdfReader.js

   .. function:: TDFReader.prototype.readHeader()

      tdf/tdfReader.js

   .. function:: TDFReader.prototype.readDataset(chr, windowFunction,  zoom)

      tdf/tdfReader.js

   .. function:: TDFReader.prototype.readRootGroup()

      tdf/tdfReader.js

   .. function:: TDFReader.prototype.readGroup(name)

      tdf/tdfReader.js

   .. function:: TDFReader.prototype.readTile(indexEntry, nTracks)

      tdf/tdfReader.js

.. class:: BamReader(config)

   bam/bamReader.js

   .. function:: BamReader.prototype.readAlignments(chr, bpStart, bpEnd)

      bam/bamReader.js

   .. function:: BamReader.prototype.readHeader()

      bam/bamReader.js

.. class:: BWReader(config)

   bigwig/bwReader.js

   .. function:: BWReader.prototype.getZoomHeaders()

      bigwig/bwReader.js

   .. function:: BWReader.prototype.loadHeader()

      bigwig/bwReader.js

   .. function:: BWReader.prototype.loadRPTree(offset)

      bigwig/bwReader.js


.. class:: BufferedReader(config, contentLength, bufferSize)

   bigwig/bufferedReader.js

   .. function:: BufferedReader.prototype.dataViewForRange(requestedRange, asUint8)

      bigwig/bufferedReader.js

