API Overview
============

While the main use of CNVisualizer is to be a web application, the browser
does have functions available to be interfaced with or to extend the
functionality of different tracks or views.

**The web application is less suitable for**

* Forcing other elements to react to the genomic locations.
* Customizing the loading of various files.

The internals are exposed via practically all of the functions, however
some are not implemented on specific tracks.

.. toctree::
   :maxdepth: 3

   quickstart

   ../code/igv
