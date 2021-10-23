const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "reactCrud"
})

app.get('/employee', (req, res) => {
    db.query("select * from employee", (err, result)=> {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen('3001', ()=> {
    console.log('Server is runnning on port 3001');
});