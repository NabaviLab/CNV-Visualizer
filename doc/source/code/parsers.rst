Parser Classes
==============

.. class:: FeatureParser(format, decode, config)

   feature/featureParsers.js

   .. function:: FeatureParser.prototype.parseHeader(data)

      feature/featureParsers.js

   .. function:: FeatureParser.prototype.parseFeatures(data)

      feature/featureParsers.js

.. class:: SegParser()

   feature/segParser.js

   .. function:: SegParser.prototype.parseHeader(data)

      feature/segParser.js

   .. function:: SegParser.prototype.parseFeatures(data)

      feature/segParser.js

.. class:: CNVParser()

   feature/cnvParser.js
   .. function:: CNVParser.prototype.parseHeader(data)

      feature/cnvParser.js

   .. function:: CNVParser.prototype.parseFeatures(data)

      feature/cnvParser.js

.. class:: VcfParser()

   variant/vcfParser.js

   .. function:: VcfParser.prototype.parseHeader(data)

      variant/vcfParser.js

   .. function:: VcfParser.prototype.parseFeatures(data)

      variant/vcfParser.js

   .. function:: Variant.prototype.popupData(genomicLocation)

      variant/vcfParser.js

.. class:: BinaryParser(dataView, littleEndian)

   binary.js

   .. function:: BinaryParser.prototype.remLength()

      binary.js

   .. function:: BinaryParser.prototype.hasNext()

      binary.js

   .. function:: BinaryParser.prototype.getByte()

      binary.js

   .. function:: BinaryParser.prototype.getShort()

      binary.js

   .. function:: BinaryParser.prototype.getInt()

      binary.js

   .. function:: BinaryParser.prototype.getUInt()

      binary.js

   .. function:: BinaryParser.prototype.getLong()

      binary.js

   .. function:: BinaryParser.prototype.getString(len)

      binary.js

   .. function:: BinaryParser.prototype.getFixedLengthString(len)

      binary.js

   .. function:: BinaryParser.prototype.getFloat()

      binary.js

   .. function:: BinaryParser.prototype.getDouble()

      binary.js

   .. function:: BinaryParser.prototype.skip(n)

      binary.js

   .. function:: BinaryParser.prototype.getVPointer()

      binary.js

