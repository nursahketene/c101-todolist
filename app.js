'use strict';

const Hapi = require('@hapi/hapi');
const Vision = require('vision');
const hbs = require('hbs');

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    await server.register(Vision);
    server.views({
        engines: {
            html: hbs
        },
        path: 'views',
        layoutPath: 'views/layout',
        layout: 'default'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index', {})
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();