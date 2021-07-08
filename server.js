const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req,res) => {
    res.send("Haloo BOSS");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server berjalan di ${PORT}`));