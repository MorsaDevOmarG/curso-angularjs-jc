'use strict';

// Carga el módulo y el objeto de Mongoose
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// DEfinir nuevo 'UserSchema'
var UserSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String ,
        username: String,
        password: String
    }
);

// Crea el modelo 'User' a partir del 'UserSchema'
mongoose.model('User', UserSchema);