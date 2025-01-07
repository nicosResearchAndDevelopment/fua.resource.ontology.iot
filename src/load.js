module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.iot',
  'dct:requires': [
    {
      'dct:identifier': './fno/load.js',
      'dct:format': 'application/fua.load+js'
    },
    {
      'dct:identifier': './http/load.js',
      'dct:format': 'application/fua.load+js'
    },
    {
      'dct:identifier': './ldn/load.js',
      'dct:format': 'application/fua.load+js'
    },
    {
      'dct:identifier': './ldp/load.js',
      'dct:format': 'application/fua.load+js'
    },
    {
      'dct:identifier': './saref/load.js',
      'dct:format': 'application/fua.load+js'
    }
  ]
};
