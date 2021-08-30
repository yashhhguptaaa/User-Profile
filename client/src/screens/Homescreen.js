import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";
import { Input, Box, Flex, Spacer, Select, Button } from "@chakra-ui/react";
import { editUserAction } from '../actions/userActions';

export default function Homescreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [profileTag, setProfileTag] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [location, setLocation] = useState('')
    const [availableFor, setAvailableFor] = useState('')
    const [aboutYou, setAboutYou] = useState('')
    const [skills, setSkills] = useState('')
    const [linkedIn, setLinkedIn] = useState('')
    const [facebook, setFacebook] = useState('')
    const [github, setGithub] = useState('')
    const [website, setWebsite] = useState('')

    const dispatch = useDispatch()

    function submitForm(e) {
        e.preventDefault();

        const editUser = {
            name,
            email,
            number,
            profileTag,
            profilePhoto,
            location,
            availableFor,
            aboutYou,
            skills,
            linkedIn,
            facebook,
            github,
            website
        }

        console.log(editUser);
        dispatch(editUserAction(editUser));
    }


    return (
        <div>
            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="500px" borderWidth="5px" alignContent="center" m="auto" mt="40px" mb="40px">
                <FormControl id="email" >
                    <FormLabel fontSize="2xl" fontWeight="extrabold" >Name</FormLabel>
                    <Input fontWeight="extrabold" placeholder="What is your name?" boxShadow="outline" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <FormLabel fontSize="2xl" fontWeight="extrabold" >Email address</FormLabel>
                    <Input fontWeight="extrabold" placeholder="Write your email address here" boxShadow="outline" type="text" value={email} onChange={(e) => { setEmail(e.target.email) }} />
                    <FormLabel fontSize="2xl" fontWeight="extrabold" >Phone Number</FormLabel>
                    <Input fontWeight="extrabold" placeholder="Place give your phone number" boxShadow="outline" type="text" value={number} onChange={(e) => { setNumber(e.target.number) }} />
                    <FormLabel fontSize="2xl" fontWeight="extrabold" >Profile Tag</FormLabel>
                    <Input fontWeight="extrabold" placeholder="What would you like to call yourself" boxShadow="outline" type="text" value={profileTag} onChange={(e) => { setProfileTag(e.target.value) }} />
                    <FormLabel fontSize="2xl" fontWeight="extrabold">Profile Photo</FormLabel>
                    <Input  fontWeight="extrabold" placeholder="Upload your profile photo" boxShadow="outline" type="text" value={profilePhoto} onChange={(e) => { setProfilePhoto(e.target.value) }} />
                    {/* <input   type="file" value={profilePhoto} onChange={(e) => { setProfilePhoto(e.target.value) }} /> */}
                    <FormLabel fontSize="2xl" fontWeight="extrabold">Location</FormLabel>
                    <Input fontWeight="extrabold" placeholder="Your Location" boxShadow="outline" type="address" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                    <FormLabel fontSize="2xl" fontWeight="extrabold">Job Type</FormLabel>
                    <Select  boxShadow="outline" placeholder="Select option" value={availableFor} onChange={(e) => { setAvailableFor(e.target.value) }}>
                        <option value="Job">Job</option>
                        <option value="Teaching">Teaching</option>
                    </Select>
                    <FormLabel fontSize="2xl" fontWeight="extrabold">About</FormLabel>
                    <Input fontWeight="extrabold" placeholder="Write about yourself" boxShadow="outline" type="text" value={aboutYou} onChange={(e) => { setAboutYou(e.target.value) }} />
                    <FormLabel fontSize="2xl" fontWeight="extrabold">Skills</FormLabel>
                    <Input fontWeight="extrabold" placeholder="Write your skills in comma separated manner" boxShadow="outline" type="text" value={skills} onChange={(e) => { setSkills(e.target.value) }} />
                    <Flex>
                        <Box>
                            <FormLabel fontSize="2xl" fontWeight="extrabold">LinkedIn Profile</FormLabel>
                            <Input boxShadow="outline" type="text" value={linkedIn} onChange={(e) => { setLinkedIn(e.target.value) }} />
                        </Box>
                        <Spacer />
                        <Box>
                            <FormLabel fontSize="2xl" fontWeight="extrabold">Facebook Profile</FormLabel>
                            <Input boxShadow="outline" type="text" value={facebook} onChange={(e) => { setFacebook(e.target.value) }} />
                        </Box>
                    </Flex>
                    <Flex>
                        <Box >
                            <FormLabel fontSize="2xl" fontWeight="extrabold">Github URL</FormLabel>
                            <Input boxShadow="outline" type="text" value={github} onChange={(e) => { setGithub(e.target.value) }} />
                        </Box>
                        <Spacer />
                        <Box>
                            <FormLabel fontSize="2xl" fontWeight="extrabold">Website</FormLabel>
                            <Input boxShadow="outline"  type="text" value={website} onChange={(e) => { setWebsite(e.target.value) }} />
                        </Box>
                    </Flex>
                    <Button fontSize="2xl" fontWeight="extrabold" mt="20px" colorScheme="blue" onClick={submitForm}>Submit</Button>
                </FormControl>
            </Box>
        </div>
    )
}
