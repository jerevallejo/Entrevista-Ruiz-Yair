'use strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = Schema({
    userId: String,
    cardToken: String,
    brandType: String,
    maskedNumber: String,
    primary: Boolean
});

module.exports = mongoose.model('Card',CardSchema);