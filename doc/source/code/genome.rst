Genome Helper Classes
=====================

.. class:: igv.Genome(sequence, ideograms, aliases)

   genome.js

   .. function:: igv.Genome.prototype.getChromosomeName(str)

      genome.js

   .. function:: igv.Genome.prototype.getChromosome(chr)

      genome.js

   .. function:: igv.Genome.prototype.getCytobands(chr)

      genome.js

   .. function:: igv.Genome.prototype.getLongestChromosome()

      genome.js

   .. function:: igv.Genome.prototype.getChromosomes()

      genome.js

   .. function:: igv.Genome.prototype.getGenomeCoordinate(chr, bp)

      genome.js

   .. function:: igv.Genome.prototype.getChromosomeCoordinate(genomeCoordinate)

      genome.js

   .. function:: igv.Genome.prototype.getCumulativeOffset(chr)

      genome.js

.. class:: igv.Chromosome(name, order, bpLength)

   genome.js

.. class:: igv.Cytoband(start, end, name, typestain)

   genome.js

.. class:: igv.GenomicInterval(chr, start, end, features)

   genome.js

   .. function:: igv.GenomicInterval.prototype.contains(chr, start, end)

      genome.js

   .. function:: igv.GenomicInterval.prototype.containsRange(range)

      genome.js

