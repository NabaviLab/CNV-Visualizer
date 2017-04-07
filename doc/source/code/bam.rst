BAM Helper Classes
==================

.. class:: BamAlignment()

   bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isMapped()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isPaired()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isProperPair()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isFirstOfPair()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isSecondOfPair()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isSecondary()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isSupplementary()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isFailsVendorQualityCheck()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isDuplicate()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isMateMapped()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isNegativeStrand()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.isMateNegativeStrand()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.tags()

      bam/bamAlignment.js

   .. function:: BamAlignment.prototype.popupData(genomicLocation)

      bam/bamAlignment.js

.. class:: BamFilter(options)

   bam/bamAlignment.js

   .. function:: BamFilter.prototype.pass(alignment)

      bam/bamAlignment.js


.. class:: BAMTrack(config)

   bam/bamTrack.js

   .. function:: BAMTrack.prototype.getFeatures(chr, bpStart, bpEnd)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.altClick(genomicLocation, referenceFrame, event)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.computePixelHeight(alignmentContainer)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.draw(options)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.paintAxis(ctx, pixelWidth, pixelHeight)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.popupMenuItemList(config)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.popupData(genomicLocation, xOffset, yOffset, referenceFrame)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.popupDataWithConfiguration(config)

      bam/bamTrack.js

   .. function:: BAMTrack.prototype.menuItemList(popover)

      bam/bamTrack.js


.. class:: AlignmentContainer(chr, start, end, samplingWindowSize, \
                                     samplingDepth, pairsSupported)

   bam/alignmentContainer.js

   .. function:: AlignmentContainer.prototype.push(alignment)

      bam/alignmentContainer.js

   .. function:: AlignmentContainer.prototype.forEach(callback)

      bam/alignmentContainer.js

   .. function:: AlignmentContainer.prototype.finish()

      bam/alignmentContainer.js

   .. function:: AlignmentContainer.prototype.contains(chr, start, end)

      bam/alignmentContainer.js

   .. function:: AlignmentContainer.prototype.hasDownsampledIntervals()

      bam/alignmentContainer.js

   .. function:: CoverageMap.prototype.incCounts(alignment)

      bam/alignmentContainer.js


.. class:: CoverageMap(chr, start, end, alignments, refSeq)

   bam/coverageMap.js

.. class:: BamAlignmentRow()

   bam/bamAlignmentRow.js

   .. function:: BamAlignmentRow.prototype.findCenterAlignment(bpStart, bpEnd)

      bam/bamAlignmentRow.js

   .. function:: BamAlignmentRow.prototype.updateScore(genomicLocation, genomicInterval, sortOption)

      bam/bamAlignmentRow.js

   .. function:: BamAlignmentRow.prototype.calculateScore(bpStart, bpEnd, interval, sortOption)

      bam/bamAlignmentRow.js


.. class:: PairedAlignment(firstAlignment)

   bam/pairedAlignment.js

   .. function:: PairedAlignment.prototype.setSecondAlignment(alignment)

      bam/pairedAlignment.js

   .. function:: PairedAlignment.prototype.popupData(genomicLocation)

      bam/pairedAlignment.js

   .. function:: PairedAlignment.prototype.isPaired()

      bam/pairedAlignment.js

   .. function:: PairedAlignment.prototype.firstOfPairStrand()

      bam/pairedAlignment.js


.. class:: BamIndex(indices, blockMin, blockMax, sequenceIndexMap, \
                           tabix)

   bam/bamIndex.js

   .. function:: BamIndex.prototype.blocksForRange(refId, min, max)

      bam/bamIndex.js


.. class:: BGZFile(config)

   bam/bgzf.js

   .. function:: BGZFile.prototype.nextBlock()

      bam/bgzf.js

