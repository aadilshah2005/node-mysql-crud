require('dotenv').config()
const express = require("express")
const  db  = require('./db/db.js')
console.log(db);


const PORT = process.env.PORT || 5000

const app = express();


app.get('/', (req, res) =>{
     db.query("SELECT NOW() AS currentTime", (err, result) => {
        if (err) {
            res.send({ message: "DB Error", error: err });
        } else {
            res.send({ message: "Node + MySQL working!", data: result });
        }
    });
});


app.listen(PORT, () =>{
    console.log(`Server is RUning At PORT ${PORT}`);
    
})