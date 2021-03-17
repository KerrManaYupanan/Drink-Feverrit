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

db.connect((err)=>{
    if (err) {
        throw err
    } else {
        console.log('Database Connect')
    }
});