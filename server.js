const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {MONGO_URI} = require("./config/db.config")
const cors = require('cors');

const postMahasiswa = require('./routes/api/controller');

const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Database Connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Mongodb database Connected"))
    .catch(err => console.log(err)
);

//Router
app.use('/api/mahasiswa', postMahasiswa);


app.get('/', (req,res) => {
    res.send("Haloo BOSS");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Server berjalan di ${PORT}`));
