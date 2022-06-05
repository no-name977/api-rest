const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;


//parse applicaion json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 app.listen(port, ()=>{
     console.log(`server running in port ${port}`);
 });











