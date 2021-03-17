const express = require('express');
const app = express();
const cors = require("cors");
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "feverritdrink_v01"
});

app.get('/users',(req,res)=>{
    db.query("SELECT * FROM users",(err,result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen('3001' , (err)=>{
    if(err){
        console.log("Port error is "+ err)
    } else{
        console.log("Server runing on port 3000")
    }
})