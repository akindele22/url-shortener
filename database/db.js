const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connect = async() => {
    return mongoose.connect(process.env.dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndeex: true
    })
}

module.export = { connect };