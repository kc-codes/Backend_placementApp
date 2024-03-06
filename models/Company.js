const mongoose = require('mongoose');
const Schema = mongoose
const CompanySchema = new mongoose.Schema({
    university:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'university',
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

    salary:{
        type: String,
        required: true
    },

    vacancy:{
        type: String,
        required: true
    },

    job_role:{
        type: String,
        required: true
    },
    type_of_organization:{
        type: String,
        required: true
    },
    total_employees:{
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