const mongoose = require('mongoose');
const  express = require('express')
const app = express()

app.listen(8080,( req, res) => {
    console.log("Server is running")
})
  
 mongoose.connect('mongodb://localhost/admin', function (err) {
  
    if (err) throw err;
  
    console.log('Successfully connected');
  
 });