require("dotenv").config();
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

const DB_CONNECTION = async () => {
    let db = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error'))

    console.log('Connected to the database.');
}

module.exports = DB_CONNECTION