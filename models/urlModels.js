const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// instantiate models
const urlSchema = new Schema({
    alias: {
        type: String,
        unique: true,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});
// creating the model
module.export = mongoose.model('Url', urlSchema);