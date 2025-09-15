require('dotenv').config()
const express = require("express")

const PORT = process.env.PORT || 5000

const app = express();


app.get('/', (req, res) =>{
    res.send({message: "Node Server"});
});


app.listen(PORT, () =>{
    console.log(`Server is RUning At PORT ${PORT}`);
    
})