// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

const db = "mongodb://localhost:27017/NoteMate"
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch(e => {
    console.log('Error while attempting to connect to MongoDB');
    console.log(e);
})

// To preven deprecation warnings (from MongoDB Native Driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = mongoose