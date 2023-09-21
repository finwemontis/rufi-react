const tracks = [
  {
    type: 'FeatureTrack',
    trackId:
      'irgsp1_rapdb.refseq_annotation.sorted.gff',
    name: 'rapdb locus',
    category: ['Genes'],
    assemblyNames: ['irgsp1.0'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        // uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
        uri: 'http://healingchurch.com:8000/jbrowse/gene',
        locationType: 'UriLocation',
      },
      index: {
        location: {
          // uri: '.refseq_annotation.sorted.gff.gz.tbi',
          uri: 'http://healingchurch.com:8000/jbrowse/geneindex',
          locationType: 'UriLocation',
        },
        indexType: 'TBI',
      },
    },
    renderer: {
      type: 'SvgFeatureRenderer',
    },
  },
  {
    type: 'VariantTrack',
    trackId:
      'all.vcf',
    name: 'all Variant Calls',
    category: ['all', 'Variants'],
    assemblyNames: ['irgsp1.0'],
    adapter: {
      type: 'VcfTabixAdapter',
      vcfGzLocation: {
        // uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/variants/ALL.wgs.shapeit2_integrated_snvindels_v2a.GRCh38.27022019.sites.vcf.gz',
        uri: 'http://healingchurch.com:8000/jbrowse/trackvar',
        locationType: 'UriLocation',
      },
      index: {
        location: {
          // uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/variants/ALL.wgs.shapeit2_integrated_snvindels_v2a.GRCh38.27022019.sites.vcf.gz.tbi',
          uri: 'http://healingchurch.com:8000/jbrowse/trackvarindex',
          locationType: 'UriLocation',
        },
        indexType: 'TBI',
      },
    },
  },
]
export default tracks