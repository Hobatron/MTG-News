module.exports = (function () {
    'use strict';

    var externalRoutes = require('express').Router();

    externalRoutes.get('/test', function (req, res) {
        res.send('Hello ExternalRoutes!');
    });

    return externalRoutes;
})();