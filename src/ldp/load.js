module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.iot/ldp',
  'dct:requires': [{
    'dct:identifier': '../../data/ldp/ldp.ttl',
    'dct:format': 'text/turtle'
  }]
};
