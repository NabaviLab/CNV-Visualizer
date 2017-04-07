Parser Classes
==============

.. class:: igv.FeatureParser(format, decode, config)

   feature/featureParsers.js

   .. function:: igv.FeatureParser.prototype.parseHeader(data)

      feature/featureParsers.js

   .. function:: igv.FeatureParser.prototype.parseFeatures(data)

      feature/featureParsers.js

.. class:: igv.SegParser()

   feature/segParser.js

   .. function:: igv.SegParser.prototype.parseHeader(data)

      feature/segParser.js

   .. function:: igv.SegParser.prototype.parseFeatures(data)

      feature/segParser.js

.. class:: igv.CNVParser()

   feature/cnvParser.js
   .. function:: igv.CNVParser.prototype.parseHeader(data)

      feature/cnvParser.js

   .. function:: igv.CNVParser.prototype.parseFeatures(data)

      feature/cnvParser.js

.. class:: igv.VcfParser()

   variant/vcfParser.js

   .. function:: igv.VcfParser.prototype.parseHeader(data)

      variant/vcfParser.js

   .. function:: igv.VcfParser.prototype.parseFeatures(data)

      variant/vcfParser.js

   .. function:: Variant.prototype.popupData(genomicLocation)

      variant/vcfParser.js

.. class:: igv.BinaryParser(dataView, littleEndian)

   binary.js

   .. function:: igv.BinaryParser.prototype.remLength()

      binary.js

   .. function:: igv.BinaryParser.prototype.hasNext()

      binary.js

   .. function:: igv.BinaryParser.prototype.getByte()

      binary.js

   .. function:: igv.BinaryParser.prototype.getShort()

      binary.js

   .. function:: igv.BinaryParser.prototype.getInt()

      binary.js

   .. function:: igv.BinaryParser.prototype.getUInt()

      binary.js

   .. function:: igv.BinaryParser.prototype.getLong()

      binary.js

   .. function:: igv.BinaryParser.prototype.getString(len)

      binary.js

   .. function:: igv.BinaryParser.prototype.getFixedLengthString(len)

      binary.js

   .. function:: igv.BinaryParser.prototype.getFloat()

      binary.js

   .. function:: igv.BinaryParser.prototype.getDouble()

      binary.js

   .. function:: igv.BinaryParser.prototype.skip(n)

      binary.js

   .. function:: igv.BinaryParser.prototype.getVPointer()

      binary.js

