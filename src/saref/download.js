const
    util     = require('../util.js'),
    prefix   = 'saref',
    ontology = 'https://saref.etsi.org/core/',
    override = false;

Promise.all([
    util.downloadOntology(ontology + 'v3.1.1/saref.ttl', null, `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology(ontology + 'v3.1.1/saref.jsonld', null, `data/${prefix}/${prefix}.json`, override),
    util.downloadOntology(ontology + 'v3.1.1/saref.rdf', null, `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
