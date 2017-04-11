BigWig Helper Classes
=====================

.. class:: BWTotalSummary(byteBuffer)

   bigwig/bwTotalSummary.js

   .. function:: BWTotalSummary.prototype.updateStats(stats)

      bigwig/bwTotalSummary.js


.. class:: BPTree(binaryParser, treeOffset)

   bigwig/bwBPTree.js


.. class:: BWSource(config)

   bigwig/bwSource.js

   .. function:: BWSource.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      bigwig/bwSource.js


.. class:: RPTree(fileOffset, contentLength, config, littleEndian)

   bigwig/bwRPTree.js

   .. function:: RPTree.prototype.load()

      bigwig/bwRPTree.js

   .. function:: RPTree.prototype.readNode(filePosition, bufferedReader)

      bigwig/bwRPTree.js

   .. function:: RPTree.prototype.findLeafItemsOverlapping(chrIdx, startBase, endBase)

      bigwig/bwRPTree.js

