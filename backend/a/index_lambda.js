var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var AWS = require('aws-sdk')
var multer = require('multer')
var upload = multer({ dest: '/tmp/express/uploads/' })
var fs = require('fs')
var {PythonShell} = require('python-shell')

// declare a new express app
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', '*')
  next()
});

AWS.config.loadFromPath('rootkey.json')
AWS.config.update({ region: 'ap-northeast-1' })

/**********************
 * s3にアップロードする *
 **********************/
 app.post('/backend/s3up', upload.single('file'), async function (
   req,
   res) {
   var s3 = new AWS.S3();
   var params = {
     Bucket: 'sagemaker-project-p-cpuoftuqod3c',
     Key: req.file.originalname,
   };
   var v = fs.readFileSync(req.file.path, (err, data) => {
     return data;
   });
   params.Body = v;
   s3.putObject(params, function (err, data) {
     if (err) {
       console.log(err, err.message);
     } else {
       console.log("アップロード成功!");
     }
   });
 });
/****************************
* 分析結果表示API & pythonスクリプト実行 *
****************************/
PythonShell.run('analytics.py', null, function (err, message) {
  if (err) throw err;
  const responseObjectData = ('%f', message);

  app.get("/backend/graph", function(req, res, next) {
    res.json(responseObjectData);
  });
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app