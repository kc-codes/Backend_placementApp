const mongoose = require('mongoose');
const Schema = mongoose
const User_compnaySchema = new mongoose.Schema({
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
    },  
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },  


});

const User = mongoose.model('user_company', User_compnaySchema);
module.exports = User