const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

router.put('/edituser', async ( req, res) => {

    const editeduser = req.body.editeduser;
    try {
        const user =await User.find({})

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

        res.send('User Details Edited Successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
})