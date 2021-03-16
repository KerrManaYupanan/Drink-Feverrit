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
    password : ""
});

con.connect((err)=>{
    if (err) throw err;
    console.log("Connected!");
    con.query("DROP DATABASE mydatabaseTest1212312121" , (err , result)=>{
        if(err) throw err;
        console.log("DROP database it Success!")
    })
});
