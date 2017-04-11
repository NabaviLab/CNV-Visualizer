IGV Classes
===========

.. class:: Browser(options, trackContainerDiv)

   browser.js

   .. function:: Browser.prototype.disableZoomWidget()

      browser.js

   .. function:: Browser.prototype.enableZoomWidget(zoomHandlers)

      browser.js

   .. function:: Browser.prototype.toggleCursorGuide(genomicStateList)

      browser.js

   .. function:: Browser.prototype.toggleCenterGuide(genomicStateList)

      browser.js

   .. function:: Browser.prototype.getFormat(name)

      browser.js

   .. function:: Browser.prototype.loadTracksWithConfigList(configList)

      browser.js

   .. function:: Browser.prototype.loadTrack(config)

      browser.js

   .. function:: Browser.prototype.addTrack(track)

      browser.js

   .. function:: Browser.prototype.reorderTracks()

      browser.js

   .. function:: Browser.prototype.removeTrack(track)

      browser.js

   .. function:: Browser.prototype.findTracks(property, value)

      browser.js

   .. function:: Browser.prototype.reduceTrackOrder(trackView)

      browser.js

   .. function:: Browser.prototype.increaseTrackOrder(trackView)

      browser.js

   .. function:: Browser.prototype.setTrackHeight(newHeight)

      browser.js

   .. function:: Browser.prototype.resize()

      browser.js

   .. function:: Browser.prototype.repaint()

      browser.js

   .. function:: Browser.prototype.repaintWithLocusIndex(locusIndex)

      browser.js

   .. function:: Browser.prototype.update()

      browser.js

   .. function:: Browser.prototype.updateWithLocusIndex(locusIndex)

      browser.js

   .. function:: Browser.prototype.loadInProgress()

      browser.js

   .. function:: Browser.prototype.updateLocusSearchWithGenomicState(genomicState)

      browser.js

   .. function:: Browser.prototype.syntheticViewportContainerBBox()

      browser.js

   .. function:: Browser.prototype.syntheticViewportContainerWidth()

      browser.js

   .. function:: Browser.prototype.viewportContainerWidth()

      browser.js

   .. function:: Browser.prototype.minimumBasesExtent()

      browser.js

   .. function:: Browser.prototype.goto(chrName, start, end)

      browser.js

   .. function:: Browser.prototype.zoomIn()

      browser.js

   .. function:: Browser.prototype.zoomOut()

      browser.js

   .. function:: Browser.prototype.selectMultiLocusPanelWithGenomicState(genomicState)

      browser.js

   .. function:: Browser.prototype.closeMultiLocusPanelWithGenomicState(genomicState)

      browser.js

   .. function:: Browser.prototype.multiLocusPanelLayoutWithTruthFunction(filterFunction)

      browser.js

   .. function:: Browser.prototype.emptyViewportContainers($trackContainer)

      browser.js

   .. function:: Browser.prototype.buildViewportsWithGenomicStateList(genomicStateList)

      browser.js

   .. function:: Browser.prototype.parseSearchInput(string)

      browser.js

   .. function:: Browser.prototype.getGenomicStateList(loci, viewportContainerWidth, continuation)

      browser.js

   .. function:: Browser.prototype.on(eventName, fn)

      browser.js

   .. function:: Browser.prototype.un(eventName, fn)

      browser.js

   .. function:: Browser.prototype.fireEvent(eventName, args, thisObj)

      browser.js

   .. function:: Browser.prototype.search(feature, callback, force)

      browser.js

.. class:: EncodeTable(parentModalBodyObject, continuation)

   encode/encode.js

   .. function:: EncodeTable.prototype.loadWithDataSource(dataSource)

      encode/encode.js

   .. function:: EncodeTable.prototype.encodeTrackLabel(record)

      encode/encode.js

.. class:: EncodeDataSource(config)

   encode/encode.js

   .. function:: EncodeDataSource.prototype.loadJSON(continuation)

      encode/encode.js

   .. function:: EncodeDataSource.prototype.ingestJSON(json, continuation)

      encode/encode.js

   .. function:: EncodeDataSource.prototype.ingestFile(file, continuation)

      encode/encode.js

   .. function:: EncodeDataSource.prototype.dataTablesData()

      encode/encode.js

   .. function:: EncodeDataSource.prototype.columnHeadings()

      encode/encode.js

.. class:: FastaSequence(reference)

   fasta.js

   .. function:: FastaSequence.prototype.init()

      fasta.js

   .. function:: FastaSequence.prototype.getSequence(chr, start, end)

      fasta.js

   .. function:: FastaSequence.prototype.getIndex()

      fasta.js

   .. function:: FastaSequence.prototype.loadAll()

      fasta.js

   .. function:: FastaSequence.prototype.readSequence(chr, qstart, qend)

      fasta.js

.. class:: TribbleIndex(chrIndexTable)

   feature/tribble.js

   .. function:: TribbleIndex.prototype.blocksForRange(queryChr, min, max)

      feature/tribble.js

.. class:: IdeoPanel($content_header)

   ideogram.js

   .. function:: IdeoPanel.prototype.buildPanels($content_header)

      ideogram.js

   .. function:: IdeoPanel.prototype.panelWithLocusIndex(locusIndex)

      ideogram.js

   .. function:: IdeoPanel.prototype.resize()

      ideogram.js

   .. function:: IdeoPanel.prototype.repaint()

      ideogram.js

.. class:: AbortLoad()

   igvxhr.js

.. class:: IntervalTree()

   intervalTree.js

   .. function:: IntervalTree.prototype.insert(start, end, value)

      intervalTree.js

   .. function:: IntervalTree.prototype.findOverlapping(start, end)

      intervalTree.js

   .. function:: IntervalTree.prototype.logIntervals()

      intervalTree.js

   .. function:: IntervalTree.prototype.mapIntervals(func)

      intervalTree.js

   .. function:: IntervalTree.prototype.treeInsert(x)

      intervalTree.js

.. class:: KaryoPanel($parent, config)

   karyo/karyo.js

   .. function:: KaryoPanel.prototype.resize()

      karyo/karyo.js

   .. function:: KaryoPanel.prototype.repaint()

      karyo/karyo.js

.. class:: ReferenceFrame(chrName, start, bpPerPixel)

   referenceFrame.js

   .. function:: ReferenceFrame.prototype.toPixels(bp)

      referenceFrame.js

   .. function:: ReferenceFrame.prototype.toBP(pixels)

      referenceFrame.js

   .. function:: ReferenceFrame.prototype.shiftPixels(pixels)

      referenceFrame.js

   .. function:: ReferenceFrame.prototype.description()

      referenceFrame.js

.. class:: SVG()

   svg.js

   .. function:: SVG.prototype.setProperties(properties)

      svg.js

   .. function:: SVG.prototype.setTransforms(transforms, x, y)

      svg.js

   .. function:: SVG.prototype.clearRect(x, y, w, h)

      svg.js

   .. function:: SVG.prototype.strokeLine(x1, y1, x2, y2, properties, transforms)

      svg.js

   .. function:: SVG.prototype.fillRect(x, y, w, h, properties, transforms)

      svg.js

   .. function:: SVG.prototype.fillRectWithCenter(centerX, centerY, width, height, properties, transforms)

      svg.js

   .. function:: SVG.prototype.fillPolygon(x, y, properties, transforms)

      svg.js

   .. function:: SVG.prototype.fillText(text, x, y, properties, transforms)

      svg.js

   .. function:: SVG.prototype.strokeText(text, x, y, properties, transforms)

      svg.js

   .. function:: SVG.prototype.strokeCircle(x, y, radius, properties, transforms)

      svg.js

   .. function:: SVG.prototype.string()

      svg.js

   .. function:: SVG.prototype.innerString()

      svg.js

.. class:: Viewport(trackView, locusIndex)

   viewport.js

   .. function:: Viewport.prototype.setWidth(width)

      viewport.js

   .. function:: Viewport.prototype.initializationHelper(trackView, locusIndex)

      viewport.js

   .. function:: Viewport.prototype.addMouseHandlers()

      viewport.js

   .. function:: Viewport.prototype.addRulerMouseHandlers()

      viewport.js

   .. function:: Viewport.prototype.removeRulerMouseHandlers()

      viewport.js

   .. function:: Viewport.prototype.goto(chr, start, end)

      viewport.js

   .. function:: Viewport.prototype.startSpinner()

      viewport.js

   .. function:: Viewport.prototype.stopSpinner()

      viewport.js

   .. function:: Viewport.prototype.resize()

      viewport.js

   .. function:: Viewport.prototype.update()

      viewport.js

   .. function:: Viewport.prototype.repaint()

      viewport.js

   .. function:: Viewport.prototype.setContentHeight(newHeight)

      viewport.js

   .. function:: Viewport.prototype.paintImageWithReferenceFrame(referenceFrame)

      viewport.js

   .. function:: Viewport.prototype.isLoading()

      viewport.js

   .. function:: Viewport.prototype.redrawTile(features)

      viewport.js

.. class:: WindowSizePanel($parent)

   windowSizePanel.js

   .. function:: WindowSizePanel.prototype.show()

      windowSizePanel.js

   .. function:: WindowSizePanel.prototype.hide()

      windowSizePanel.js

   .. function:: WindowSizePanel.prototype.updateWithGenomicState(genomicState)

      windowSizePanel.js

