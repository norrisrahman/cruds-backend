const express = require("express");
const router = express.Router();

const dataMahasiswa = require('../../models/dataMahasiswa');

//Read Data
router.get('/', async (req, res) => {
    try{
        const post = await dataMahasiswa.find();
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json(post);
    }catch (err){
        res.status(400).json({msg: err});
    }
})

//Menambah Data
router.post ('/', async (req,res) => {
    const newPost = new dataMahasiswa(req.body);

    try{
        const post = await newPost.save();
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({msg: err});
    }
})

//Hapus Data
router.delete ('/:id', async (req,res) => {
    try{
        const post = await dataMahasiswa.findByIdAndDelete(req.params.id);
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json({succes : true});
    }catch (err){
        res.status(400).json({msg: err});
    }
})

//Update Data Mahasiswa
router.patch('/:id', async (req,res) => {
    try{
        const post = await dataMahasiswa.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error("Terdapat Kegagalan");
        res.status(200).json({succes : true});
    }catch (err){
        res.status(400).json({msg: err});
    }
})

module.exports = router;