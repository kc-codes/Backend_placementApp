const mongoose = require('mongoose');
const Schema = mongoose
const BadgesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },  
    points:{
        type: Number,
        required: true
    }


});

const User = mongoose.model('badges', BadgesSchema);
module.exports = User