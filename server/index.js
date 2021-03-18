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

app.post('/create' , (req ,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const feverritDrink = req.body.feverritDrink;
    db.query("INSERT INTO users (name,age,position,feverritDrink) VALUES (?,?,?,?)" , [name,age,position,feverritDrink],
        (err ,res) =>{
            if (err){
                console.log(err)
            } else {
                alert('Insert is success')
                res.send("Values Inserted")
                console.log('Values insert is success')
            }
        }
    )
});

app.listen('3001' , (err)=>{
    if(err){
        console.log("Port error is "+ err)
    } else{
        console.log("Server runing on port 3001")
    }
})