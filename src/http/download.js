const
    util     = require('../util.js'),
    prefix   = 'http',
    ontology = 'http://www.w3.org/2011/http#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
