const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

router.post('/edituser', async ( req, res) => {
    console.log("inside router")

    const editeduser = req.body.editeduser;
    console.log(editeduser);
    try {
        const user =await User.findOne({_id : "612b4a232b636581efde75f1"})
        console.log("user",user);

        user.name = editeduser.name
        user.email = editeduser.email
        user.number = editeduser.number
        user.profileTag = editeduser.profileTag
        user.profilePhoto = editeduser.profilePhoto
        user.location = editeduser.location
        user.availableFor = editeduser.availableFor
        user.aboutYou = editeduser.aboutYou
        user.skills = editeduser.skills
        user.linkedIn = editeduser.linkedIn
        user.facebook = editeduser.facebook
        user.github = editeduser.github
        user.website = editeduser.website
        await user.save();

        res.send(user)

    } catch (error) {
        return res.status(400).json({ message: "Error hai salle"});
    }
})
module.exports = router;
