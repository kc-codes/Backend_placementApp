const express = require('express')
const fetchuser = require('../middleware/fetchuser')
const router = express.Router()
const company = require('../models/Company')
const mycompany = require('../models/Mycompany')
const {body, validationResult} = require('express-validator')




// Route 1: fetching all notes of logged in user
router.get('/getcampuscompany', fetchuser, async(req, res) =>{
    try {
        const notes = await company.find();
        res.json(notes)
    } catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
})
router.get('/getmycompany', fetchuser, async(req, res) =>{
    try {
        const notes = await mycompany.find();
        res.json(notes)
    } catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
})



// Route 2: Add new notes after logged in
router.post('/addcampuscompany', fetchuser, async (req, res) =>{
    try {
        const user = await company.create({
            university: req.body.university,
            name: req.body.name,
            email: req.body.email,
            loaction: req.body.loaction,
            salary: req.body.salary,
            vacancy: req.body.vacancy,
            job_role: req.body.job_role,
            type_of_organization : req.body.type_of_organization,
            total_employees: req.body.total_employees,
            description: req.body.description,
            deadline: req.body.deadline
        })
        
        success = true
        res.json({success})
    
    
}    

catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
}


})

router.post('/addmycompany', fetchuser, async (req, res) =>{
    try {
        const user = await mycompany.create({
            university: req.body.university,
            name: req.body.name,
            email: req.body.email,
            loaction: req.body.loaction,
            salary: req.body.salary,
            vacancy: req.body.vacancy,
            job_role: req.body.job_role,
            type_of_organization : req.body.type_of_organization,
            total_employees: req.body.total_employees,
            description: req.body.description,
            interview_date: req.body.interview_date
        })
        
        success = true
        res.json({success})
    
    
}    

catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
}


})




module.exports = router