const express = require("express");
const router = express.Router();

const Mahasiswa = require('../../models/Mahasiswa');

//Menambah Data
router.post ('/', (req,res) => {
    res.send("HAHAHA")
})

module.exports = router;