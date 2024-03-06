const express = require('express')
const fetchuser = require('../middleware/fetchuser')
const router = express.Router()
const company = require('../models/Company')
const company_user = require('../models/User_Company')
const {body, validationResult} = require('express-validator')




// Route 1: fetching all notes of logged in user
router.get('/getmycompany', fetchuser, async(req, res) =>{
    try {
        const notes = await company_user.find({user: req.user.id});
        res.json(notes)
    } catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
})



// Route 2: Add new notes after logged in
router.post('/addcompany', fetchuser, async (req, res) =>{
    try {
        const user = await company.create({
            university: req.body.university,
            email: req.body.email,
            loaction: req.body.loaction,
            salary: req.body.salary,
            vacancy: req.body.vacancy,
            job_role: req.body.job_role,
            type_of_organization : req.body.type_of_organization,
            total_employees: req.body.total_employees,
            description: req.body.description
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
router.get('/getmycompany', fetchuser, async(req, res) =>{
    try {
        const notes = await note.find({user: req.user.id});
        res.json(notes)
    } catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
})



module.exports = router