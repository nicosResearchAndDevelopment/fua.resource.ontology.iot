const
    util     = require('../util.js'),
    prefix   = 'http',
    context  = {
        'rdf':  'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'h2tp': 'http://www.w3.org/2011/http#',
        'owl':  'http://www.w3.org/2002/07/owl#',
        'xsd':  'http://www.w3.org/2001/XMLSchema#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#'
    },
    override = false;

Promise.all([
    util.convertOntology(`data/${prefix}/${prefix}.xml`, 'application/rdf+xml', `data/${prefix}/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
