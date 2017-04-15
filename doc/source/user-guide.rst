CNVisualizer User Guide
=======================

.. note:: This is subject to change, mostly minor aesthetic changes.


Loading Tracks
--------------

In order to view the data, files must be loaded from one of the top two menu
buttons. Choose which button based on where the file is being loaded from:

.. image:: images/buttons.png

#. File from a web server, must support `Range Requests`_.
#. File found locally on the computer.

And then you can input the relevant information, including

.. image:: images/loadinput.png

* `URL` or `File`, which is the data to be loaded. Track type is inferred off
  of the extension itself.
* `Name`, which can be changed later (todo: ref)
* `Indexed`, can **NOT** be used for local files. When used for URL files,
  it expects the indexed file to have the same `URL`, with the extra indexed
  extension (i.e. http://files.com/a.bam would be http://files.com/a.bam.bai).

Track configuration can be partially controlled with the gear icon, found to
the right of each track:

.. image:: images/control.png

Segment Track
-------------

Segment tracks have the following options available

CNV Called Track
----------------

CNV called tracks allow controlling

CNV Accumulated Track
---------------------

Accumulation tracks allow choosing the segment tracks to include in the
aggregation of data, as well as selecting an aggregation method. These can
be seen as

.. image:: images/accum.png

#. Selected samples are marked with a '-' in front of them.
#. Deselected samples are marked with a '+' in front of them.
#. Enabled aggregation method is marked with an 'X'.
#. Disabled aggregation method is let unmarked.

.. _Range Requests: https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests

