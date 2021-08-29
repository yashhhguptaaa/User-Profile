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
        user.profilePhoto = [editedpizza.prices]

        await pizza.save();

        res.send('Pizza Details Edited Successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
})