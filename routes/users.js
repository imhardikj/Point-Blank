var express = require('express');
var router = express.Router();
const { spawn } = require('child_process');
const {exec} = require("child_process");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/postindex', function(req, res, next) {
  const process1 = spawn('python', ['script.py']);
   process1.stdout.on(
     'data',
     (data) => console.log(data.toString())
  );
  exec('python routes/script.py',(error,stdout,stderr)=>{
    if(error){
      console.log(error);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  })
  res.send('respond with a resource');
});

module.exports = router;
