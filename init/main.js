module.exports =
    config = require('../config/config.json'),
    express = require('express'),
    knex = require('knex')(config.db),
    bookshelf = require('bookshelf')(knex),
    moment = require('moment'),
    app = express();



app.use(express.json({ limit: '550mb' }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS');
    next();
});

app.listen(config.port, () => {
    console.log(`escuchando ${config.port}`);
});

require('./config-app.js');

require('log-timestamp');

app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).send(null);
});