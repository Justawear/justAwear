require('dotenv').config({path: "../.env"});
// importing mongoose
const mongoose = require('mongoose');

// telling Mongoose which database we want to connect to
mongoose.connect(process.env.MONGODB_URI || 
    'mongodb://localhost/justawear', {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false, 
    });

    
// Use this to log mongo queries being executed!
// mongoose.set('debug', true);

module.exports = mongoose.connection;