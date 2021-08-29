const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {type : String , require},
    email : {type : String , require},
    number : {type : String , require},
    profileTag : {type: String, require, default : "Software Engineer"},
    profilePhoto : { type: String , require},
    location : { type: String , require},
    availableFor : { type: String , require , default : "Job"},
    aboutYou : { type: String , require},
    skills : [],
    linkedIn : { type: String },
    facebook : { type: String },
    github : { type: String },
    website : { type: String },
} ,{
    timestamps:true    ,
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;