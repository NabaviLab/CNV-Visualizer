const {BrowserWindow} = require('electron').remote
const path = require('path').remote
const url = require('url').remote

let newwin
let contents
var igv = (function (igv) {

  /*
   * Opens a new tab/window containing a new IGV browser
   * containing only the selected CNV segment track and gene track.
   */
  newWindow = function (config) {
    var url_ = config.url;
    var name_ = config.name;
    var indexed_ = config.indexed;

    newwin = new BrowserWindow({width: 800, height: 600})

    var pathname = window.location.pathname;
    pathname = pathname.substring(0, pathname.indexOf("index.html"));

    newwin.loadURL('file://' + pathname + 'subBrowser.html');

    newwin.webContents.on('did-finish-load', function () {
      if(config.localFile) {
        newwin.webContents.executeJavaScript("console.log('opening track from localfile')");
        newwin.webContents.executeJavaScript("constructLocalTrack('" + url_ + "', '" + name_ + "', '" + indexed_ + "')");
      } else {
          newwin.webContents.executeJavaScript("console.log('opening track from url')");
          newwin.webContents.executeJavaScript("constructTrack('" + url_ + "', '" + name_ + "', '" + indexed_ + "')");
      }
      //newwin.webContents.executeJavaScript("igv.browser.loadTrack( { url: '" + url_ + "', name: '" + name_ + "', indexed: '" + indexed_ + "'})")
    });

    // newwin.onload = function() {
    //   var igvDiv = document.getElementById('#igvDiv');
    //   igvDiv.onload = function() {
    //     igv.Browser.loadTrack({
    //       url: url_,
    //       indexed: indexed_,
    //       name: name_
    //     });
    //   };
    // }

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

  igv.CNVTrack.prototype.popupMenuItemList = function (config) {
    var self = this,
        $e,
        clickHandler;

    $e = $('<div class="igv-track-menu-item">');
    $e.text('Open in own browser');

    clickHandler = function () {
      newWindow(self.config);
      config.popopver.hide();
    }

    return [{ name: undefined, object: $e, click: clickHandler, init: undefined } ];
  }


  return igv;

})(igv || {});
