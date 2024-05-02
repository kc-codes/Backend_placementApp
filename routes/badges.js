const express = require('express')
const todo = require('../models/Todo')
const badges = require('../models/Badges')
const router = require('express').Router();
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'masknxanxlanla';


router.post('/postpoints', fetchuser, async (req, res) => {
    try {
        console.log(req.user.id);
        const filter = { user: req.user.id };
        const update = { $inc: { points: req.body.points } }; // Use $inc to increment points
        // Try to find the document with the user ID and update it
        let user = await badges.findOneAndUpdate(filter, update, {
            new: true, // Return the modified document rather than the original
            upsert: true, // Create the document if it doesn't exist
            useFindAndModify: false // Avoid deprecated warnings
        });

        const success = true;
        res.json({ success });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
});

// fetch todo
router.get('/fetchpoints', fetchuser, async(req, res) =>{
    try {
        const notes = await badges.find({user: req.user.id});
        res.json(notes)
    } catch (error) {
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
})




module.exports = router
