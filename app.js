require('dotenv').config();
// core packages
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');

// app
const app = express();

// routers
const Markdowns = require('./routes/Markdowns');

// middlewares
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json())

// routes
app.use('/api/v1', Markdowns);

app.get('/', (req, res) => {
    res.status(404).json({ message: 'Nothing to show.' });
});

// errors handler
app.get('*', function (req, res) {
    const error = new Error(`${req.ip} tried to access ${req.originalUrl}`);

    console.error(error);
    res.status(500).json(error);
});

module.exports = app;