const {BrowserWindow} = require('electron').remote;
const path = require('path').remote;
const url = require('url').remote;

let newwin;
let contents;
var igv = (function (igv) {

  /**
  * Opens up a new browser window with an IGV browser containing only the gene track
  * and the selected track loaded in.
  *
  * @TODO: Fix unreadable local file bug.
  *
  * @param {Config} config - configuration information for the selected track
  */
  const newWindow = function (config) {
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

  const openInNewBrowser = function (trackCls) {
    const origPopupMenuItemList =
      igv[trackCls].prototype.popupMenuItemList;

    igv[trackCls].prototype.popupMenuItemList = function (config) {
      const self = this;
      var clickHandler = function () {
        newWindow(self.config);
        config.popover.hide();
      }

      return (origPopupMenuItemList.call(self, config)
        .concat([{name: "Open In New Window", click: clickHandler, init: undefined}]));
    }
  }

  openInNewBrowser("SegTrack");
  openInNewBrowser("CNVTrack");

  return igv;
})(igv || {});
