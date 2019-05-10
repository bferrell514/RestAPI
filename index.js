const express = require('express');

//set up express app
const app = express();

app.get('/api', function(req, res){
  console.log('GET request');
  res.send({name: 'Yoshi'});
});


const port = process.env.PORT;
app.listen(port, ()=>console.log('now listening for reuqests'));

//listen for requests
//app.listen(process.env.port || 4000, function(){
//  
//  console.log('now listening for reuqests');
//});