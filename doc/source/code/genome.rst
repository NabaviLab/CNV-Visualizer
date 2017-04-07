Genome Helper Classes
=====================

.. class:: Genome(sequence, ideograms, aliases)

   genome.js

   .. function:: Genome.prototype.getChromosomeName(str)

      genome.js

   .. function:: Genome.prototype.getChromosome(chr)

      genome.js

   .. function:: Genome.prototype.getCytobands(chr)

      genome.js

   .. function:: Genome.prototype.getLongestChromosome()

      genome.js

   .. function:: Genome.prototype.getChromosomes()

      genome.js

   .. function:: Genome.prototype.getGenomeCoordinate(chr, bp)

      genome.js

   .. function:: Genome.prototype.getChromosomeCoordinate(genomeCoordinate)

      genome.js

   .. function:: Genome.prototype.getCumulativeOffset(chr)

      genome.js

.. class:: Chromosome(name, order, bpLength)

   genome.js

.. class:: Cytoband(start, end, name, typestain)

   genome.js

.. class:: GenomicInterval(chr, start, end, features)

   genome.js

   .. function:: GenomicInterval.prototype.contains(chr, start, end)

      genome.js

   .. function:: GenomicInterval.prototype.containsRange(range)

      genome.js

