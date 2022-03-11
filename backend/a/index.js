var AWS = require('aws-sdk');
var bodyParser = require('body-parser');
var multer = require('multer');
// アップロードされたファイルの一時格納フォルダ
var upload = multer({ dest: '/tmp/express/uploads/' });
var fs = require('fs');

AWS.config.loadFromPath('rootkey.json');
AWS.config.update({ region: 'ap-northeast-1' });

// var app = require('express')()
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/', upload.single('file'), async function (
  req,
  res
) {
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

// module.exports = app
app.listen(7777);