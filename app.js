'use strict';

const Hapi = require('@hapi/hapi');
const Vision = require('vision');
const hbs = require('hbs');
const Inert = require('inert');
const routes = require('./routes')

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    await server.register(Vision);
    await server.register(Inert );
    server.views({
        engines: {
            html: hbs
        },
        path: 'views',
        layoutPath: 'views/layout',
        layout: 'default'
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();