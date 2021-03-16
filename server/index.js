// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 1080;

// app.get('/', (req, res) => res.send('Hello Mana'))

// app.listen(PORT, () => {
//     console.log(`Server runing on PORT : ${PORT}`)
// })

// module.exports = app
const mysql = require('mysql');

const con = mysql.createConnection({
    host : "localhost",
    user: "root",
    password : "",
    database:"ccp-drink"
});

con.connect((err)=>{
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM users" , (err , result, fields)=>{
        if(err) throw err;
        console.log(result)
    })
});
