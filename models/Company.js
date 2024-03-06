const mongoose = require('mongoose');
const Schema = mongoose
const CompanySchema = new mongoose.Schema({
    university:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'university',
    },  
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    loaction:{
        type: String,
        required: true
    },
    vacancy:{
        type: String,
        required: true
    },
    type_of_buisness:{
        type: String,
        required: true
    },
    no_of_employee:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },


});

const User = mongoose.model('company', CompanySchema);
module.exports = User