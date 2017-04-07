UI Helper Classes
=================

.. class:: TrackView(track, browser)

   trackView.js

   .. function:: TrackView.prototype.configureViewportContainer($viewportContainer, viewports)

      trackView.js

   .. function:: TrackView.prototype.attachDragWidget()

      trackView.js

   .. function:: TrackView.prototype.appendLeftHandGutterDivToTrackDiv($track)

      trackView.js

   .. function:: TrackView.prototype.createRightHandGutter()

      trackView.js

   .. function:: TrackView.prototype.setContentHeightForViewport(viewport, height)

      trackView.js

   .. function:: TrackView.prototype.setTrackHeight(newHeight, update)

      trackView.js

   .. function:: TrackView.prototype.isLoading()

      trackView.js

   .. function:: TrackView.prototype.resize()

      trackView.js

   .. function:: TrackView.prototype.update()

      trackView.js

   .. function:: TrackView.prototype.repaint()

      trackView.js

.. class:: TrackScrollbar($viewportContainer, viewports)

   trackView.js

   .. function:: TrackScrollbar.prototype.update()

      trackView.js

.. class:: ColorPicker($parent, userPalette)

   ui/colorpicker.js

   .. function:: ColorPicker.prototype.configure(trackView)

      ui/colorpicker.js

   .. function:: ColorPicker.prototype.hide()

      ui/colorpicker.js

   .. function:: ColorPicker.prototype.show()

      ui/colorpicker.js

.. class:: DataRangeDialog($parent)

   ui/dataRangeDialog.js

   .. function:: DataRangeDialog.prototype.configureWithTrackView(trackView)

      ui/dataRangeDialog.js

   .. function:: DataRangeDialog.prototype.hide()

      ui/dataRangeDialog.js

   .. function:: DataRangeDialog.prototype.show()

      ui/dataRangeDialog.js

.. class:: CenterGuide($parent, config)

   ui/centerGuide.js

   .. function:: CenterGuide.prototype.repaint()

      ui/centerGuide.js

   .. function:: CenterGuide.prototype.resize()

      ui/centerGuide.js

.. class:: AlertDialog($parent, id)

   ui/alertDialog.js

   .. function:: AlertDialog.prototype.alertTextContainer()

      ui/alertDialog.js

   .. function:: AlertDialog.prototype.rowOfOk()

      ui/alertDialog.js

   .. function:: AlertDialog.prototype.hide()

      ui/alertDialog.js

   .. function:: AlertDialog.prototype.show($host)

      ui/alertDialog.js

.. class:: Popover($parent)

   ui/popover.js

   .. function:: Popover.prototype.initializationHelper($parent)

      ui/popover.js

   .. function:: Popover.prototype.hide()

      ui/popover.js

   .. function:: Popover.prototype.presentTrackGearMenu(pageX, pageY, trackView)

      ui/popover.js

   .. function:: Popover.prototype.presentTrackPopupMenu(e, viewport)

      ui/popover.js

   .. function:: Popover.prototype.presentTrackPopup(e, viewport)

      ui/popover.js

   .. function:: Popover.prototype.presentContent(pageX, pageY, content)

      ui/popover.js

.. class:: TrackMenuPopupDialog(trackMenu, dialogLabel, inputValue, ok, width, height)

   ui/trackMenuPopupDialog.js

   .. function:: TrackMenuPopupDialog.prototype.updateTips( t )

      ui/trackMenuPopupDialog.js

.. class:: Dialog($parent, constructorHelper)

   ui/dialog.js

   .. function:: Dialog.prototype.rowOfOk()

      ui/dialog.js

   .. function:: Dialog.prototype.rowOfOkCancel()

      ui/dialog.js

   .. function:: Dialog.prototype.rowOfLabel()

      ui/dialog.js

   .. function:: Dialog.prototype.rowOfInput()

      ui/dialog.js

   .. function:: Dialog.prototype.configure(labelHTMLFunction, inputValue, clickFunction)

      ui/dialog.js

   .. function:: Dialog.prototype.hide()

      ui/dialog.js

   .. function:: Dialog.prototype.show($host)

      ui/dialog.js

.. class:: UserFeedback($parent)

   ui/userFeedback.js

   .. function:: UserFeedback.prototype.show()

      ui/userFeedback.js

   .. function:: UserFeedback.prototype.hide()

      ui/userFeedback.js

   .. function:: UserFeedback.prototype.bodyCopy(htmlString)

      ui/userFeedback.js

