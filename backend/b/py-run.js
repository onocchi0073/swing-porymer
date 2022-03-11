var {PythonShell} = require('python-shell');
const express = require('express');
const app = express();
// var app = require('express')()


PythonShell.run('analytics.py', null, function (err, message) {
  if (err) throw err;
  const responseObjectData = ('%f', message);

  app.get("/", function(req, res, next) {
    // CORS対応
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, access_token'
    );

    res.json(responseObjectData);
  });
});
// module.exports = app
app.listen(8888);