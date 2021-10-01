const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require('./config/db.config')
const apiRequest = require('./routes/api/controller');
const userRequest = require ('./routes/api/userController')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express();


app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080']
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get(db);

//Router
app.use('/api/mahasiswa', apiRequest);
app.use('/api/auth', userRequest)

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/page/index.html'))
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Server berjalan di ${PORT}`));
