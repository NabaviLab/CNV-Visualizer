CNVisualizer
============

An iteration on the lightweight HTML-5 version of the [Integrated Genomics
Viewer](http://www.broadinstitute.org/igv).

igv.js is an embeddable interactive genome visualization component written in
JavaScript and CSS. The base functionality was created by the same team that
made IGV, and has received specializations from the University of Connecticut
to build it into a usable web application. 

See the [Wiki](https://github.com/igvteam/igv.js/wiki) for more information, as
well as our [Read the
Docs](http://cnv-visualizer.readthedocs.io/en/latest/index.html).

To Launch Locally
-----------------

1. Ensure [Node.js and
   NPM](https://docs.npmjs.com/getting-started/installing-node) are installed.
2. Run `npm install -g grunt-cli`. This may need `sudo` permissions.
3. Run `npm install` from the base project directory.
4. Run `grunt` from the base project directory.
5. The app/ directory should now be populated correctly.

In order to build without `sudo` permissions, replace step 2 with `npm install
grunt-cli`.  Then replace step 4 with `./node_modules/grunt-cli/bin/grunt`.

To Develop
----------

The layout of classes can be found in the [API
Overview](http://cnv-visualizer.readthedocs.io/en/latest/code/igv.html). This
is useful for finding functions that already exist under certain classes,
although does very little for describing the actual _purpose_ of the functions
and classes.

In general, to add a new track changes must be made in `browser.js` in the
`igv.browser.loadTrack(config)` function. There needs to be a parser added for
the configuration type, and the ability to infer from filetypes.

If the track will use a Feature Source (ability to read files set up as a tab
separated value file), there must be a Parser created as well (see
`cnvParser.js` and `segParser.js`). The `featureFileReader.js` must add a case
in `getParser()` to handle the format, or it will default to a very simple
parser.
