module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.iot/fno',
  'dct:requires': [{
    'dct:identifier': '../../data/fno/fno.ttl',
    'dct:format': 'text/turtle'
  }, {
    'dct:identifier': '../../data/fno/fnom.ttl',
    'dct:format': 'text/turtle'
  }, {
    'dct:identifier': '../../data/fno/fnoi.ttl',
    'dct:format': 'text/turtle'
  }, {
    'dct:identifier': '../../data/fno/fnoc.ttl',
    'dct:format': 'text/turtle'
  }]
};
