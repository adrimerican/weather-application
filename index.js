const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});


// app.use('/css', express.static(__dirname+'/public/style.css'));

//  router.get('style.css',function(req,res){
//    res.sendFile(path.join(__dirname+'/public/style.css'));
//  });

//  router.get('public.js',function(req,res){
//    res.sendFile(path.join(__dirname+'/public/public.js'));
//  });

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');


