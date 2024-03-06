const express = require('express')
const comapany = require('../models/Company')
const router = require('express').Router();
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'masknxanxlanla';



// Route to book appoinment
router.post('/postcompany', fetchuser, async (req, res) =>{
        
    try {
        console.log(req.user.id)
        const user = await blog.create({
            university: req.body.university,
            name : req.body.name,
            email : req.body.email,
            loaction : req.body.loaction,
            vacancy : req.body.vacancy,
            type_of_buisness : req.body.type_of_buisness,
            no_of_employee : req.body.no_of_employee,
            description : req.body.description
        })
        
        success = true
        res.json({success})
    
    
}    

catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
}


})

// route for doc to fetch all his appoinment
router.get('/fetchallblogs', fetchuser, async(req, res) =>{
    try {
        const notes = await blog.find();
        res.json(notes)
    } catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
})

// route for doc to fetch all his appoinment
router.get('/fetchblog', fetchuser, async(req, res) =>{
    try {
        const notes = await blog.find({doctor: req.user.id});
        res.json(notes)
    } catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
})

module.exports = router
