igv.js
=======

Lightweight HTML-5 version of the Integrative Genomics Viewer (http://www.broadinstitute.org/igv).


igv.js is an embeddable interactive genome visualization component written in JavaScript and CSS.
It is based on the desktop [Integrative Genomics Viewer (IGV)](http://www.broadinstitute.org/igv), and developed by the same team.

See the [Wiki](https://github.com/igvteam/igv.js/wiki) for more information.

To Launch Locally
-----------------

1. Ensure [Node.js and NPM](https://docs.npmjs.com/getting-started/installing-node)
   are installed.
2. Run `npm install -g grunt-cli`. This may need `sudo` permissions.
3. Run `npm install` from the base project directory.
4. Run `grunt` from the base project directory.
5. The app/ directory should now be populated correctly.

In order to build without `sudo` permissions, replace step 2 with `npm install grunt-cli`.
Then replace step 4 with `./node_modules/grunt-cli/bin/grunt`.
