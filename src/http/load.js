module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.iot/http',
  'dct:requires': [{
    'dct:identifier': '../../data/http/http.xml',
    'dct:format': 'application/rdf+xml'
  }]
};
