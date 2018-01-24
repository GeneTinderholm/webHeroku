var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  // var filename = "TinderholmGeneResume.pdf"; 
  // var tempFile="./resumeV1.pdf";
  // fs.readFileSync(tempFile, function (err,data){
  //    res.contentType("application/pdf");
  //    res.send(data);
  // });
  var data = fs.readFileSync('./public/resumeV1.pdf');
  res.contentType("application/pdf");
  res.send(data);
});

  // filename = encodeURIComponent(filename);
  //
  // res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  // res.setHeader('Content-type', 'application/pdf');
  //
  // stream.pipe(res);

module.exports = router;
