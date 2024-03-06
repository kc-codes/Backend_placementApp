const mongoose = require('mongoose');
const Schema = mongoose
const UniversitySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    date:{
        type: Date,
        default: Date.now
    },


});

const User = mongoose.model('university', UniversitySchema);
module.exports = User