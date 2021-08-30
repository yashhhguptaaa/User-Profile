import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Text, Image, Input, Box, Flex, Spacer, Select, Button } from "@chakra-ui/react";


export default function Detailsscreen() {

    const profile = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <div>
            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="500px" borderWidth="5px" alignContent="center" m="auto" mt="40px" mb="40px">
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={`${profile.profilePhoto}`}
                    m="auto"
                    mb="30px"
                />
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    {profile.profileTag}
                </Text>
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    Name: {profile.name}
                </Text>
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    Skills : {profile.skills}
                </Text>
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    Address : {profile.location}
                </Text>
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    About : {profile.aboutYou}
                </Text>
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    skills : {profile.skills}
                </Text>
                <Flex ml="160px" mt="20px">
                    <Image
                        mr="20px"
                        boxSize="20px"
                        objectFit="cover"
                        src="https://image.flaticon.com/icons/png/512/174/174857.png"
                        alt="LinkedIn"
                        onClick= {() => window.location.replace( `${profile.linkedIn}`)} 
                
                    />

                    <Image
                        mr="20px"
                        boxSize="20px"
                        objectFit="cover"
                        src="https://image.flaticon.com/icons/png/512/733/733547.png"
                        alt="Facebook"
                        onClick= {() => window.location.replace( `${profile.facebook}`)} 
                        
                    />
                    <Image
                    mr="20px"
                        boxSize="20px"
                        objectFit="cover"
                        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
                        alt="Github"
                        onClick= {() => window.location.replace( `${profile.github}`)} 

                    />
                    <Image
                        boxSize="20px"
                        objectFit="cover"
                        src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"
                        alt="LinkedIn"
                        onClick= {() => window.location.replace( `${profile.website}`)} 

                    />
                </Flex>
            </Box>
        </div>
    )
}
