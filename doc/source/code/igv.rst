igv
===

.. toctree::
   :maxdepth: 1

   general

   genome

   feature

   tracks

   readers

   parsers

   bam

   bigwig

   misc

   ui

   color


.. function:: igv.loadBamIndex(indexURL, config, tabix)

   bam/bamIndex.js

.. function:: igv.unbgzf(data, lim)

   bam/bgzf.js

.. function:: igv.gotoLocusFeature(locusFeature, genome, browser)

   browser.js

.. function:: igv.encodeSearch(continuation)

   encode/encodeSearch.js

.. function:: igv.decodeGa4ghReadset(json)

   ga4gh/ga4ghAlignmentReader.js

.. function:: igv.ga4ghGet(options)

   ga4gh/ga4ghHelper.js

.. function:: igv.ga4ghSearch(options)

   ga4gh/ga4ghHelper.js

.. function:: igv.ga4ghSearchReadGroupSets(options)

   ga4gh/ga4ghHelper.js

.. function:: igv.ga4ghSearchVariantSets(options)

   ga4gh/ga4ghHelper.js

.. function:: igv.ga4ghSearchCallSets(options)

   ga4gh/ga4ghHelper.js

.. function:: igv.ga4ghSearchReadAndCallSets(options)

   ga4gh/ga4ghHelper.js

.. function:: igv.createVCFVariant(tokens)

   variant/variant.js

.. function:: igv.createGAVariant(json)

   variant/variant.js

.. function:: igv.loadGenome(reference)

   genome.js

.. function:: igv.hex2Color(hex)

   igv-color.js

.. function:: igv.rgbaColor(r, g, b, a)

   igv-color.js

.. function:: igv.rgbColor(r, g, b)

   igv-color.js

.. function:: igv.addAlphaToRGB(rgbString, alpha)

   igv-color.js

.. function:: igv.greyScale(value)

   igv-color.js

.. function:: igv.randomGrey(min, max)

   igv-color.js

.. function:: igv.randomRGB(min, max)

   igv-color.js

.. function:: igv.randomRGBConstantAlpha(min, max, alpha)

   igv-color.js

.. function:: igv.getCompositeColor(dest, src, alpha)

   igv-color.js

.. function:: igv.createColorString(token)

   igv-color.js

.. function:: igv.createBrowser(parentDiv, config)

   igv-create.js

.. function:: igv.removeBrowser()

   igv-create.js

.. function:: igv.makeToggleButton(buttonOnLabel, buttonOffLabel, configurationKey, get$Target, continuation)

   igv-utils.js

.. function:: igv.presentAlert(string)

   igv-utils.js

.. function:: igv.attachDialogCloseHandlerWithParent($parent, closeHandler)

   igv-utils.js

.. function:: igv.spinner(size)

   igv-utils.js

.. function:: igv.getSpinnerObjectWithParentElement(parentElement)

   igv-utils.js

.. function:: igv.startSpinnerAtParentElement(parentElement)

   igv-utils.js

.. function:: igv.stopSpinnerAtParentElement(parentElement)

   igv-utils.js

.. function:: igv.parseUri(str)

   igv-utils.js

.. function:: igv.domElementRectAsString(element)

   igv-utils.js

.. function:: igv.isNumber(n)

   igv-utils.js

.. function:: igv.guid()

   igv-utils.js

.. function:: igv.random(min, max)

   igv-utils.js

.. function:: igv.prettyBasePairNumber(raw)

   igv-utils.js

.. function:: igv.numberFormatter(rawNumber)

   igv-utils.js

.. function:: igv.numberUnFormatter(formatedNumber)

   igv-utils.js

.. function:: igv.translateMouseCoordinates(e, target)

   igv-utils.js

.. function:: igv.formatPopoverText(nameValueArray)

   igv-utils.js

.. function:: igv.throttle(fn, threshhold, scope)

   igv-utils.js

.. function:: igv.splitStringRespectingQuotes(string, delim)

   igv-utils.js

.. function:: igv.addAjaxExtensions()

   igv-utils.js

.. function:: igv.isStringOrNumber(value)

   igv-utils.js

.. function:: igv.constrainBBox($child, $parent)

   igv-utils.js

.. function:: igv.log(message)

   igv-utils.js

.. function:: igv.navigateKaryo(mouseX, mouseY)

   karyo/karyo.js

.. function:: igv.isBlank(line)

   parseUtils.js

.. function:: igv.isComment(line)

   parseUtils.js

.. function:: igv.getQueryValue(name)

   parseUtils.js

.. function:: igv.configTrack(track, config)

   trackCore.js

.. function:: igv.setTrackLabel(track, label)

   trackCore.js

.. function:: igv.setTrackColor(track, color)

   trackCore.js

.. function:: igv.paintAxis(ctx, pixelWidth, pixelHeight)

   trackCore.js

.. function:: igv.trackPopupMenuItemList(popover, viewport, genomicLocation, xOffset, yOffset)

   trackCore.js

.. function:: igv.trackMenuItemList(popover, trackView)

   trackCore.js

.. function:: igv.trackMenuItem(popover, trackView, menuItemLabel, dialogLabelHandler, dialogInputValue, dialogClickHandler, doAddTopBorder)

   trackCore.js

.. function:: igv.dataRangeMenuItem(popover, trackView)

   trackCore.js

.. function:: igv.colorPickerMenuItem(popover, trackView)

   trackCore.js

.. function:: igv.loadTribbleIndex(indexFile, config)

   feature/tribble.js

