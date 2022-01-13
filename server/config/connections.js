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

module.exports = mongoose.connection;