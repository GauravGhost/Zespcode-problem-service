const mongoose = require('mongoose');
const {MONGODB_URL} = require('./server.config');

async function connectToDB() {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
        console.log(err);
    }
}


module.exports = {connectToDB};