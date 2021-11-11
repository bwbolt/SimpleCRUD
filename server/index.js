const express = require("express");
const app = express();
const mysql = require('mysql')



const db = mysql.createConnection({
  user:'root',
  host: 'localhost',
  password: '',
  database: ''
})



app.listen(3001, () => {
  console.log("Yayy, your server is running on port 3001")
});

