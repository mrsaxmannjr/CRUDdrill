const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const poems = require('./routes/poems');

app.use(cors());
app.use(bodyParser.json());

app.use('/poems', poems);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err.stack : {}
  });
});

module.exports = app;
