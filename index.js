const express = require('express');
const routes = require('./routes/api')
//set up express app
const app = express();

app.use('/api',routes);

//listen for requests
const port = process.env.PORT;
app.listen(port, ()=>console.log('now listening for reuqests'));
