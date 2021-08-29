import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Text, Image, Input, Box, Flex, Spacer, Select, Button } from "@chakra-ui/react";


export default function Detailsscreen() {

    const profile = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <div>
            <Container>
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
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
                <Flex>
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
                        Email : {profile.email}
                    </Text>
                </Flex>
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
                <Text
                        ml={2}
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="bold"
                        color="pink.800"
                    >
                        LinkedIn : {profile.linkedIn}
                </Text>
                <Text
                        ml={2}
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="bold"
                        color="pink.800"
                    >
                        Facebook : {profile.facebook}
                </Text>
                <Text
                        ml={2}
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="bold"
                        color="pink.800"
                    >
                        Github : {profile.github}
                </Text>
                <Text
                        ml={2}
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="bold"
                        color="pink.800"
                    >
                        Website : {profile.website}
                </Text>

            </Container>
        </div>
    )
}
