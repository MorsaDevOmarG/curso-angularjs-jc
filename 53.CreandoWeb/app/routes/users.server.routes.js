'use strict';

var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.route('/users').get(users.list).post(users.create);

    // Los 2 puntos :, indica que se manejará como un parámetro...
    app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

    app.param('userId', users.userById);
}