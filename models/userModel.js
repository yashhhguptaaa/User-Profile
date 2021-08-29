const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {type : String , require,default:""},
    email : {type : String , require,default:""},
    number : {type : String , require,default:""},
    profileTag : {type: String, require, default : "Software Engineer"},
    profilePhoto : { type: String , require,default:""},
    location : { type: String , require,default:""},
    availableFor : { type: String , require , default : "Job"},
    aboutYou : { type: String , require, default:""},
    skills : { type: String , require , default : " NodeJs, ReactJs, MongoDB , ExpressJs"},
    linkedIn : { type: String , default:""},
    facebook : { type: String , default: ""},
    github : { type: String , default : ""},
    website : { type: String , default: ""},
} ,{
    timestamps:true    ,
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;