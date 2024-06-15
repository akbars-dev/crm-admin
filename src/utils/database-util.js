const mongoose = require('mongoose');

// Mongoose connection function
const database = async (uri) => {
    try {
        await mongoose.connect(uri, {});
        console.log('> MongoDB connected successfully');
    } catch (error) {
        console.error('> Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = database;
