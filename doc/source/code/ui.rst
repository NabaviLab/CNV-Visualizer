UI Helper Classes
=================

.. class:: igv.TrackView(track, browser)

   trackView.js

   .. function:: igv.TrackView.prototype.configureViewportContainer($viewportContainer, viewports)

      trackView.js

   .. function:: igv.TrackView.prototype.attachDragWidget()

      trackView.js

   .. function:: igv.TrackView.prototype.appendLeftHandGutterDivToTrackDiv($track)

      trackView.js

   .. function:: igv.TrackView.prototype.createRightHandGutter()

      trackView.js

   .. function:: igv.TrackView.prototype.setContentHeightForViewport(viewport, height)

      trackView.js

   .. function:: igv.TrackView.prototype.setTrackHeight(newHeight, update)

      trackView.js

   .. function:: igv.TrackView.prototype.isLoading()

      trackView.js

   .. function:: igv.TrackView.prototype.resize()

      trackView.js

   .. function:: igv.TrackView.prototype.update()

      trackView.js

   .. function:: igv.TrackView.prototype.repaint()

      trackView.js

.. class:: igv.TrackScrollbar($viewportContainer, viewports)

   trackView.js

   .. function:: igv.TrackScrollbar.prototype.update()

      trackView.js

.. class:: igv.ColorPicker($parent, userPalette)

   ui/colorpicker.js

   .. function:: igv.ColorPicker.prototype.configure(trackView)

      ui/colorpicker.js

   .. function:: igv.ColorPicker.prototype.hide()

      ui/colorpicker.js

   .. function:: igv.ColorPicker.prototype.show()

      ui/colorpicker.js

.. class:: igv.DataRangeDialog($parent)

   ui/dataRangeDialog.js

   .. function:: igv.DataRangeDialog.prototype.configureWithTrackView(trackView)

      ui/dataRangeDialog.js

   .. function:: igv.DataRangeDialog.prototype.hide()

      ui/dataRangeDialog.js

   .. function:: igv.DataRangeDialog.prototype.show()

      ui/dataRangeDialog.js

.. class:: igv.CenterGuide($parent, config)

   ui/centerGuide.js

   .. function:: igv.CenterGuide.prototype.repaint()

      ui/centerGuide.js

   .. function:: igv.CenterGuide.prototype.resize()

      ui/centerGuide.js

.. class:: igv.AlertDialog($parent, id)

   ui/alertDialog.js

   .. function:: igv.AlertDialog.prototype.alertTextContainer()

      ui/alertDialog.js

   .. function:: igv.AlertDialog.prototype.rowOfOk()

      ui/alertDialog.js

   .. function:: igv.AlertDialog.prototype.hide()

      ui/alertDialog.js

   .. function:: igv.AlertDialog.prototype.show($host)

      ui/alertDialog.js

.. class:: igv.Popover($parent)

   ui/popover.js

   .. function:: igv.Popover.prototype.initializationHelper($parent)

      ui/popover.js

   .. function:: igv.Popover.prototype.hide()

      ui/popover.js

   .. function:: igv.Popover.prototype.presentTrackGearMenu(pageX, pageY, trackView)

      ui/popover.js

   .. function:: igv.Popover.prototype.presentTrackPopupMenu(e, viewport)

      ui/popover.js

   .. function:: igv.Popover.prototype.presentTrackPopup(e, viewport)

      ui/popover.js

   .. function:: igv.Popover.prototype.presentContent(pageX, pageY, content)

      ui/popover.js

.. class:: igv.TrackMenuPopupDialog(trackMenu, dialogLabel, inputValue, ok, width, height)

   ui/trackMenuPopupDialog.js

   .. function:: igv.TrackMenuPopupDialog.prototype.updateTips( t )

      ui/trackMenuPopupDialog.js

.. class:: igv.Dialog($parent, constructorHelper)

   ui/dialog.js

   .. function:: igv.Dialog.prototype.rowOfOk()

      ui/dialog.js

   .. function:: igv.Dialog.prototype.rowOfOkCancel()

      ui/dialog.js

   .. function:: igv.Dialog.prototype.rowOfLabel()

      ui/dialog.js

   .. function:: igv.Dialog.prototype.rowOfInput()

      ui/dialog.js

   .. function:: igv.Dialog.prototype.configure(labelHTMLFunction, inputValue, clickFunction)

      ui/dialog.js

   .. function:: igv.Dialog.prototype.hide()

      ui/dialog.js

   .. function:: igv.Dialog.prototype.show($host)

      ui/dialog.js

.. class:: igv.UserFeedback($parent)

   ui/userFeedback.js

   .. function:: igv.UserFeedback.prototype.show()

      ui/userFeedback.js

   .. function:: igv.UserFeedback.prototype.hide()

      ui/userFeedback.js

   .. function:: igv.UserFeedback.prototype.bodyCopy(htmlString)

      ui/userFeedback.js

