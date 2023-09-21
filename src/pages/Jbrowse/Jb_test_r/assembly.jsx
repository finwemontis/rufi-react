const assembly = {
  name: 'irgsp1.0',
  sequence: {
    type: 'ReferenceSequenceTrack',
    trackId: 'IRGSP1.0-ReferenceSequenceTrack',
    adapter: {
      type: 'BgzipFastaAdapter',
      // type: 'IndexedFastaAdapter',
      fastaLocation: {
        uri: 'http://healingchurch.com:8000/jbrowse/genomegz',
        locationType: 'UriLocation',
      },
      faiLocation: {
        uri: 'http://healingchurch.com:8000/jbrowse/genomefai',
        locationType: 'UriLocation',
      },
      gziLocation: {
        uri: 'http://healingchurch.com:8000/jbrowse/genomegzi',
        locationType: 'UriLocation',
      },
    },
  },
  aliases: ['irgsp1'],
  refNameAliases: {
    adapter: {
      type: 'RefNameAliasAdapter',
      location: {
        uri: 'http://healingchurch.com:8000/jbrowse/genomealias',
        locationType: 'UriLocation',
      },
    },
  },
}
export default assembly