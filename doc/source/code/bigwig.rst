BigWig Helper Classes
=====================

.. class:: igv.BWTotalSummary(byteBuffer)

   bigwig/bwTotalSummary.js

   .. function:: igv.BWTotalSummary.prototype.updateStats(stats)

      bigwig/bwTotalSummary.js


.. class:: igv.BPTree(binaryParser, treeOffset)

   bigwig/bwBPTree.js


.. class:: igv.BWSource(config)

   bigwig/bwSource.js

   .. function:: igv.BWSource.prototype.getFeatures(chr, bpStart, bpEnd, bpPerPixel)

      bigwig/bwSource.js


.. class:: igv.RPTree(fileOffset, contentLength, config, littleEndian)

   bigwig/bwRPTree.js

   .. function:: igv.RPTree.prototype.load()

      bigwig/bwRPTree.js

   .. function:: igv.RPTree.prototype.readNode(filePosition, bufferedReader)

      bigwig/bwRPTree.js

   .. function:: igv.RPTree.prototype.findLeafItemsOverlapping(chrIdx, startBase, endBase)

      bigwig/bwRPTree.js

