import React ,{useState} from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";
import { Input, Box, Flex, Spacer,Select, Button } from "@chakra-ui/react"

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

    function submitForm(e){
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
    }


    return (
        <div>
            <Box>
                <FormControl id="email" >
                    <FormLabel>Name</FormLabel>
                    <Input variant="outline" type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                    <FormLabel>Email address</FormLabel>
                    <Input variant="outline" type="email" value={email} onChange={(e)=>{setEmail(e.target.email)}} />
                    <FormLabel>Phone Number</FormLabel>
                    <Input variant="outline" type="string" value={number} onChange={(e) => {setNumber(e.target.number)}} />
                    <FormLabel>Profile Tag</FormLabel>
                    <Input variant="outline" type="text" value={profileTag} onChange={(e) => {setProfileTag(e.target.value)}} />
                    <FormLabel>Profile Photo</FormLabel>
                    <Input variant="outline" type="text" value={profilePhoto} onChange={(e) => {setProfilePhoto(e.target.value)}} />
                    <FormLabel>Location</FormLabel>
                    <Input variant="outline" type="address" value={location} onChange={(e) => {setLocation(e.target.value)}} />
                    <FormLabel>Job Type</FormLabel>
                    <Select placeholder="Select option" value={availableFor} onChange={(e) => {setAvailableFor(e.target.value)}}>
                        <option value="Job">Job</option>
                        <option value="Teaching">Teaching</option>
                    </Select>
                    <FormLabel>About</FormLabel>
                    <Input placeholder="Write about yourself" variant="outline" type="text" value={aboutYou} onChange={(e) => {setAboutYou(e.target.value)}}/>
                    <FormLabel>Skills</FormLabel>
                    <Input placeholder="Write your skills in comma separated manner" variant="outline" type="text" value={skills} onChange={(e) => {setSkills(e.target.value)}}/>
                    <Flex>
                        <Box>
                            <FormLabel>LinkedIn Profile</FormLabel>
                            <Input variant="outline" type="text" value={linkedIn} onChange={(e) => {setLinkedIn(e.target.value)}}/>
                        </Box>
                        <Spacer />
                        <div>
                            <FormLabel>Facebook Profile</FormLabel>
                            <Input variant="outline" type="text" value={facebook} onChange={(e) => {setFacebook(e.target.value)}}/>
                        </div>
                    </Flex>
                    <Flex>
                        <Box ml="20px">
                            <FormLabel>Github URL</FormLabel>
                            <Input variant="outline" type="text" value={github} onChange={(e) => {setGithub(e.target.value)}}/>
                        </Box>
                        <Box>
                            <FormLabel>Website</FormLabel>
                            <Input variant="outline" type="text" value={website} onChange={(e) => {setWebsite(e.target.value)}}/>
                        </Box>
                    </Flex>
                    <Button colorScheme="blue" onClick={submitForm}>Submit</Button>
                </FormControl>
            </Box>
        </div>
    )
}
