BAM Helper Classes
==================

.. class:: igv.BamAlignment()

   bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isMapped()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isPaired()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isProperPair()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isFirstOfPair()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isSecondOfPair()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isSecondary()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isSupplementary()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isFailsVendorQualityCheck()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isDuplicate()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isMateMapped()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isNegativeStrand()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.isMateNegativeStrand()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.tags()

      bam/bamAlignment.js

   .. function:: igv.BamAlignment.prototype.popupData(genomicLocation)

      bam/bamAlignment.js

.. class:: igv.BamFilter(options)

   bam/bamAlignment.js

   .. function:: igv.BamFilter.prototype.pass(alignment)

      bam/bamAlignment.js


.. class:: igv.BAMTrack(config)

   bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.altClick(genomicLocation, referenceFrame, event)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.computePixelHeight(alignmentContainer)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.draw(options)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.popupMenuItemList(config)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.popupDataWithConfiguration(config)

      bam/bamTrack.js

   .. function:: igv.BAMTrack.prototype.menuItemList(popover)

      bam/bamTrack.js


.. class:: igv.AlignmentContainer(chr, start, end, samplingWindowSize, \
                                     samplingDepth, pairsSupported)

   bam/alignmentContainer.js

   .. function:: igv.AlignmentContainer.prototype.push(alignment)

      bam/alignmentContainer.js

   .. function:: igv.AlignmentContainer.prototype.forEach(callback)

      bam/alignmentContainer.js

   .. function:: igv.AlignmentContainer.prototype.finish()

      bam/alignmentContainer.js

   .. function:: igv.AlignmentContainer.prototype.contains(chr, start, end)

      bam/alignmentContainer.js

   .. function:: igv.AlignmentContainer.prototype.hasDownsampledIntervals()

      bam/alignmentContainer.js

   .. function:: CoverageMap.prototype.incCounts(alignment)

      bam/alignmentContainer.js


.. class:: igv.CoverageMap(chr, start, end, alignments, refSeq)

   bam/coverageMap.js

.. class:: igv.BamAlignmentRow()

   bam/bamAlignmentRow.js

   .. function:: igv.BamAlignmentRow.prototype.findCenterAlignment(bpStart, bpEnd)

      bam/bamAlignmentRow.js

   .. function:: igv.BamAlignmentRow.prototype.updateScore(genomicLocation, genomicInterval, sortOption)

      bam/bamAlignmentRow.js

   .. function:: igv.BamAlignmentRow.prototype.calculateScore(bpStart, bpEnd, interval, sortOption)

      bam/bamAlignmentRow.js


.. class:: igv.PairedAlignment(firstAlignment)

   bam/pairedAlignment.js

   .. function:: igv.PairedAlignment.prototype.setSecondAlignment(alignment)

      bam/pairedAlignment.js

   .. function:: igv.PairedAlignment.prototype.popupData(genomicLocation)

      bam/pairedAlignment.js

   .. function:: igv.PairedAlignment.prototype.isPaired()

      bam/pairedAlignment.js

   .. function:: igv.PairedAlignment.prototype.firstOfPairStrand()

      bam/pairedAlignment.js


.. class:: igv.BamIndex(indices, blockMin, blockMax, sequenceIndexMap, \
                           tabix)

   bam/bamIndex.js

   .. function:: igv.BamIndex.prototype.blocksForRange(refId, min, max)

      bam/bamIndex.js


.. class:: igv.BGZFile(config)

   bam/bgzf.js

   .. function:: igv.BGZFile.prototype.nextBlock()

      bam/bgzf.js

