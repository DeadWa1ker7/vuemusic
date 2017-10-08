var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
    util = require('util');
var fs = require('fs');
var insert = require('./data').insert;
var findsong = require('./data').findsong;
var multiparty = require('connect-multiparty');

/* GET users listing. */
router.get('/api', function(req,res){
  findsong('user',function(data){
    res.json(data);
  })
})

router.post('/api', function(req, res){
  var form=new formidable.IncomingForm();
  form.encoding='utf-8';
  //文件的上传路径
  form.uploadDir='c:/mymusic/static';
  //文件的后缀名
  form.keepExtensions = true;
  //文件的大小限制
  form.maxFieldsSize = 2 * 1024 * 1024;
  var allFile=[];
  form.on('progress', function(bytesReceived, bytesExpected) {//在控制台打印文件上传进度
    var progressInfo = { 
       value: bytesReceived, 
       total: bytesExpected 
    }; 
    console.log('[progress]: ' + JSON.stringify(progressInfo)); 
  })
  .on('file', function (filed, file) {
    allFile.push([filed, file]);//收集传过来的所有文件
 })
  .on('end', function() { 
    res.end('上传成功！'); 
  })
  .on('error', function(err) {
   console.error('上传失败：', err.message); 
   next(err); 
  })
  .parse(req, function (err, fields, files) {
     console.log(fields);
     console.log(files.file.name);
     allFile.forEach(function(file,index){
      var fieldName=file[0];
      var types = file[1].name.split('.');
      var date = new Date();
      var ms = Date.parse(date);
      fs.renameSync(file[1].path,form.uploadDir+"/"+types[0]+"."+String(types[types.length-1]));//重命名文件，默认的文件名是带有一串编码的，我们要把它还原为它原先的名字。
  });
     insert('user', function(data){
      // res.send(data);
   }, {'name': fields.name, 'author': fields.author,'photo':'/static/'+files.photo.name,'file':'/static/'+files.file.name}); 
  });
})

module.exports = router;