const express = require('express')
const fetchuser = require('../middleware/fetchuser')
const router = express.Router()
const university = require('../models/University')
const {body, validationResult} = require('express-validator')





router.post('/adduniversity', fetchuser, async (req, res) =>{
    try {
        const user = await university.create({
            name: req.body.name,
            email: req.body.email
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