const {BrowserWindow} = require('electron').remote
const path = require('path').remote
const url = require('url').remote

let newwin
let contents
var igv = (function (igv) {

  /**
  * Opens up a new browser window with an IGV browser containing only the gene track
  * and the selected track loaded in.
  *
  * @TODO: Fix unreadable local file bug.
  *
  * @param {Config} config - configuration information for the selected track
  */
  newWindow = function (config) {
    var url_, local_;
    var name_ = config.name;
    var indexed_ = config.indexed;

    newwin = new BrowserWindow({width: 800, height: 600})

    var pathname = window.location.pathname;
    pathname = pathname.substring(0, pathname.indexOf("index.html"));

    newwin.loadURL('file://' + pathname + 'subBrowser.html');

    newwin.webContents.openDevTools();

    newwin.webContents.on('did-finish-load', function () {
      if(config.localFile) {
      // Currently does not work for local files. Passing through the config.localFile to IGV renders it as an unreadable object,
      // not a File object.
      //  local_ = config.localFile;
      //  newwin.webContents.executeJavaScript("console.log('opening track from localfile')");
      //  newwin.webContents.executeJavaScript("console.log('" + config.localFile.name + "', '" + config.localFile.path + "', '" + config.localFile.type + "')");
      //  newwin.webContents.executeJavaScript("constructLocalTrack('" + local_ + "', '" + name_ + "', '" + indexed_ + "')");
      } else {
        url_ = config.url;
        newwin.webContents.executeJavaScript("console.log('opening track from url')");
        newwin.webContents.executeJavaScript("constructTrack('" + url_ + "', '" + name_ + "', '" + indexed_ + "')");
      }

    });

  }

  /**
   * Items to place on the popup menu when right-clicked in the track
   *
   * @param {Config} config - holds configuration info for the menu
   */
  igv.SegTrack.prototype.popupMenuItemList = function (config) {

      var self = this,
          $e,
          $e2,
          clickHandler,
          clickHandler2;

      $e = $('<div class="igv-track-menu-item">');
      $e.text('Sort by value');

      clickHandler = function () {

          self.altClick(config.genomicLocation, config.viewport.genomicState.referenceFrame);

          config.popover.hide();

      };

      $e2 = $('<div class="igv-track-menu-item">');
      $e2.text('Open in own browser');

      clickHandler2 = function () {
        newWindow(self.config);
        config.popover.hide();
      }

      return [{ name: undefined, object: $e, click: clickHandler, init: undefined }, {name: undefined, object: $e2, click: clickHandler2, init: undefined}];

  };

  /**
   * Items to place on the popup menu when right-clicked in the track
   *
   * @param {Config} config - holds configuration info for the menu
   */
  igv.CNVTrack.prototype.popupMenuItemList = function (config) {
    var self = this,
        $e,
        clickHandler;

    $e = $('<div class="igv-track-menu-item">');
    $e.text('Open in own browser');

    clickHandler = function () {
      newWindow(self.config);
      config.popover.hide();
    }

    return [{ name: undefined, object: $e, click: clickHandler, init: undefined } ];
  }


  return igv;

})(igv || {});
