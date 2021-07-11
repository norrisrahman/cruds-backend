const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require('./config/db.config')


const postMahasiswa = require('./routes/api/controller');

const app = express();

var corsOption = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOption));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get(db);

//Router
app.use('/api/mahasiswa', postMahasiswa);

app.get('/', (req,res) => {
    res.send("Haloo BOSS");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Server berjalan di ${PORT}`));
