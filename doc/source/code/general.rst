IGV Classes
===========

.. class:: igv.Browser(options, trackContainerDiv)

   browser.js

   .. function:: igv.Browser.prototype.disableZoomWidget()

      browser.js

   .. function:: igv.Browser.prototype.enableZoomWidget(zoomHandlers)

      browser.js

   .. function:: igv.Browser.prototype.toggleCursorGuide(genomicStateList)

      browser.js

   .. function:: igv.Browser.prototype.toggleCenterGuide(genomicStateList)

      browser.js

   .. function:: igv.Browser.prototype.getFormat(name)

      browser.js

   .. function:: igv.Browser.prototype.loadTracksWithConfigList(configList)

      browser.js

   .. function:: igv.Browser.prototype.loadTrack(config)

      browser.js

   .. function:: igv.Browser.prototype.addTrack(track)

      browser.js

   .. function:: igv.Browser.prototype.reorderTracks()

      browser.js

   .. function:: igv.Browser.prototype.removeTrack(track)

      browser.js

   .. function:: igv.Browser.prototype.findTracks(property, value)

      browser.js

   .. function:: igv.Browser.prototype.reduceTrackOrder(trackView)

      browser.js

   .. function:: igv.Browser.prototype.increaseTrackOrder(trackView)

      browser.js

   .. function:: igv.Browser.prototype.setTrackHeight(newHeight)

      browser.js

   .. function:: igv.Browser.prototype.resize()

      browser.js

   .. function:: igv.Browser.prototype.repaint()

      browser.js

   .. function:: igv.Browser.prototype.repaintWithLocusIndex(locusIndex)

      browser.js

   .. function:: igv.Browser.prototype.update()

      browser.js

   .. function:: igv.Browser.prototype.updateWithLocusIndex(locusIndex)

      browser.js

   .. function:: igv.Browser.prototype.loadInProgress()

      browser.js

   .. function:: igv.Browser.prototype.updateLocusSearchWithGenomicState(genomicState)

      browser.js

   .. function:: igv.Browser.prototype.syntheticViewportContainerBBox()

      browser.js

   .. function:: igv.Browser.prototype.syntheticViewportContainerWidth()

      browser.js

   .. function:: igv.Browser.prototype.viewportContainerWidth()

      browser.js

   .. function:: igv.Browser.prototype.minimumBasesExtent()

      browser.js

   .. function:: igv.Browser.prototype.goto(chrName, start, end)

      browser.js

   .. function:: igv.Browser.prototype.zoomIn()

      browser.js

   .. function:: igv.Browser.prototype.zoomOut()

      browser.js

   .. function:: igv.Browser.prototype.selectMultiLocusPanelWithGenomicState(genomicState)

      browser.js

   .. function:: igv.Browser.prototype.closeMultiLocusPanelWithGenomicState(genomicState)

      browser.js

   .. function:: igv.Browser.prototype.multiLocusPanelLayoutWithTruthFunction(filterFunction)

      browser.js

   .. function:: igv.Browser.prototype.emptyViewportContainers($trackContainer)

      browser.js

   .. function:: igv.Browser.prototype.buildViewportsWithGenomicStateList(genomicStateList)

      browser.js

   .. function:: igv.Browser.prototype.parseSearchInput(string)

      browser.js

   .. function:: igv.Browser.prototype.getGenomicStateList(loci, viewportContainerWidth, continuation)

      browser.js

   .. function:: igv.Browser.prototype.on(eventName, fn)

      browser.js

   .. function:: igv.Browser.prototype.un(eventName, fn)

      browser.js

   .. function:: igv.Browser.prototype.fireEvent(eventName, args, thisObj)

      browser.js

   .. function:: igv.Browser.prototype.search(feature, callback, force)

      browser.js

.. class:: igv.EncodeTable(parentModalBodyObject, continuation)

   encode/encode.js

   .. function:: igv.EncodeTable.prototype.loadWithDataSource(dataSource)

      encode/encode.js

   .. function:: igv.EncodeTable.prototype.encodeTrackLabel(record)

      encode/encode.js

.. class:: igv.EncodeDataSource(config)

   encode/encode.js

   .. function:: igv.EncodeDataSource.prototype.loadJSON(continuation)

      encode/encode.js

   .. function:: igv.EncodeDataSource.prototype.ingestJSON(json, continuation)

      encode/encode.js

   .. function:: igv.EncodeDataSource.prototype.ingestFile(file, continuation)

      encode/encode.js

   .. function:: igv.EncodeDataSource.prototype.dataTablesData()

      encode/encode.js

   .. function:: igv.EncodeDataSource.prototype.columnHeadings()

      encode/encode.js

.. class:: igv.FastaSequence(reference)

   fasta.js

   .. function:: igv.FastaSequence.prototype.init()

      fasta.js

   .. function:: igv.FastaSequence.prototype.getSequence(chr, start, end)

      fasta.js

   .. function:: igv.FastaSequence.prototype.getIndex()

      fasta.js

   .. function:: igv.FastaSequence.prototype.loadAll()

      fasta.js

   .. function:: igv.FastaSequence.prototype.readSequence(chr, qstart, qend)

      fasta.js

.. class:: igv.TribbleIndex(chrIndexTable)

   feature/tribble.js

   .. function:: igv.TribbleIndex.prototype.blocksForRange(queryChr, min, max)

      feature/tribble.js

.. class:: igv.IdeoPanel($content_header)

   ideogram.js

   .. function:: igv.IdeoPanel.prototype.buildPanels($content_header)

      ideogram.js

   .. function:: igv.IdeoPanel.prototype.panelWithLocusIndex(locusIndex)

      ideogram.js

   .. function:: igv.IdeoPanel.prototype.resize()

      ideogram.js

   .. function:: igv.IdeoPanel.prototype.repaint()

      ideogram.js

.. class:: igv.AbortLoad()

   igvxhr.js

.. class:: igv.IntervalTree()

   intervalTree.js

   .. function:: igv.IntervalTree.prototype.insert(start, end, value)

      intervalTree.js

   .. function:: igv.IntervalTree.prototype.findOverlapping(start, end)

      intervalTree.js

   .. function:: igv.IntervalTree.prototype.logIntervals()

      intervalTree.js

   .. function:: igv.IntervalTree.prototype.mapIntervals(func)

      intervalTree.js

   .. function:: igv.IntervalTree.prototype.treeInsert(x)

      intervalTree.js

.. class:: igv.KaryoPanel($parent, config)

   karyo/karyo.js

   .. function:: igv.KaryoPanel.prototype.resize()

      karyo/karyo.js

   .. function:: igv.KaryoPanel.prototype.repaint()

      karyo/karyo.js

.. class:: igv.ReferenceFrame(chrName, start, bpPerPixel)

   referenceFrame.js

   .. function:: igv.ReferenceFrame.prototype.toPixels(bp)

      referenceFrame.js

   .. function:: igv.ReferenceFrame.prototype.toBP(pixels)

      referenceFrame.js

   .. function:: igv.ReferenceFrame.prototype.shiftPixels(pixels)

      referenceFrame.js

   .. function:: igv.ReferenceFrame.prototype.description()

      referenceFrame.js

.. class:: igv.SVG()

   svg.js

   .. function:: igv.SVG.prototype.setProperties(properties)

      svg.js

   .. function:: igv.SVG.prototype.setTransforms(transforms, x, y)

      svg.js

   .. function:: igv.SVG.prototype.clearRect(x, y, w, h)

      svg.js

   .. function:: igv.SVG.prototype.strokeLine(x1, y1, x2, y2, properties, transforms)

      svg.js

   .. function:: igv.SVG.prototype.fillRect(x, y, w, h, properties, transforms)

      svg.js

   .. function:: igv.SVG.prototype.fillRectWithCenter(centerX, centerY, width, height, properties, transforms)

      svg.js

   .. function:: igv.SVG.prototype.fillPolygon(x, y, properties, transforms)

      svg.js

   .. function:: igv.SVG.prototype.fillText(text, x, y, properties, transforms)

      svg.js

   .. function:: igv.SVG.prototype.strokeText(text, x, y, properties, transforms)

      svg.js

   .. function:: igv.SVG.prototype.strokeCircle(x, y, radius, properties, transforms)

      svg.js

   .. function:: igv.SVG.prototype.string()

      svg.js

   .. function:: igv.SVG.prototype.innerString()

      svg.js

.. class:: igv.Viewport(trackView, locusIndex)

   viewport.js

   .. function:: igv.Viewport.prototype.setWidth(width)

      viewport.js

   .. function:: igv.Viewport.prototype.initializationHelper(trackView, locusIndex)

      viewport.js

   .. function:: igv.Viewport.prototype.addMouseHandlers()

      viewport.js

   .. function:: igv.Viewport.prototype.addRulerMouseHandlers()

      viewport.js

   .. function:: igv.Viewport.prototype.removeRulerMouseHandlers()

      viewport.js

   .. function:: igv.Viewport.prototype.goto(chr, start, end)

      viewport.js

   .. function:: igv.Viewport.prototype.startSpinner()

      viewport.js

   .. function:: igv.Viewport.prototype.stopSpinner()

      viewport.js

   .. function:: igv.Viewport.prototype.resize()

      viewport.js

   .. function:: igv.Viewport.prototype.update()

      viewport.js

   .. function:: igv.Viewport.prototype.repaint()

      viewport.js

   .. function:: igv.Viewport.prototype.setContentHeight(newHeight)

      viewport.js

   .. function:: igv.Viewport.prototype.paintImageWithReferenceFrame(referenceFrame)

      viewport.js

   .. function:: igv.Viewport.prototype.isLoading()

      viewport.js

   .. function:: igv.Viewport.prototype.redrawTile(features)

      viewport.js

.. class:: igv.WindowSizePanel($parent)

   windowSizePanel.js

   .. function:: igv.WindowSizePanel.prototype.show()

      windowSizePanel.js

   .. function:: igv.WindowSizePanel.prototype.hide()

      windowSizePanel.js

   .. function:: igv.WindowSizePanel.prototype.updateWithGenomicState(genomicState)

      windowSizePanel.js

