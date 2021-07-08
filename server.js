const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {MONGO_URI} = require("./config/db.config")


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Database Connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
    .then(() => console.log("Mongodb database Connected"))
    .catch(err => console.log(err));

app.get('/', (req,res) => {
    res.send("Haloo BOSS");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server berjalan di ${PORT}`));