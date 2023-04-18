import React, { useState, useEffect } from 'react'

import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  Flex,
  Heading,
  Image,
  Center,
  Box,
  Avatar,
  useToast,
  CircularProgress
} from '@chakra-ui/react';
import { BsPlusLg } from "react-icons/bs";
import { RxCross1 } from 'react-icons/rx';

export default function EditProfile() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const [profileArray, setProfileArray] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const toast = useToast();

  

    const handleImageUpload = async (event) => {
        setIsLoading(true);
        const file = event.target.files[0];

        try 
        {   
          const newImage = { file }; 
          console.log(newImage)
          setUserImage(newImage);
        } 
        catch (error) {
          console.error(error);
          toast({
            title: "Error",
            description: "Failed to upload image.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } 
        finally {
            setIsLoading(false);
        }
    }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(firstname)

    const obj = {
      "FirstName": firstname,
      "LastName": lastname,
      "Email": email,
      "Phone": phone,
      "Gender": gender,
      "DateOfBirth": dob
    }
    setProfileArray([...profileArray, obj]);

    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setGender("");
    setDob();
  }
  // console.log(profileArray);

  return (
    <Flex justifyContent={"center"} align={"center"}>

      <Box w={{ base: "95%", md: "60%" }} pb={{ base: "5%", md: "2%" }} mt={{ base: "0%", md: "5%" }} borderRadius={{ base: "0px", md: "25px" }} boxShadow={"dark-lg"}>

        <Center>
          <Heading size="xl" mt="1%">Edit Profile</Heading>
        </Center>
        {/* <span className='cross_icon'><RxCross1 /></span> */}

        <Flex direction={{ base: "column-reverse", md: "row" }} pb="3%" w={{ md: "100%", base: "100%" }} >

          <Box w={{ base: "100%", md: "60%" }} mt={{ base: "5%", md: "1%" }} ml="2%" mr="2%">


            <Flex mt="1%" direction={{ base: "column", md: "row" }} justifyContent={"space-between"} w="100%">

              <FormControl ml={{ base: "2%", md: "0%" }} mt="1%" w={{ base: "90%", md: "40%" }}>
                <FormLabel color="black">First Name *</FormLabel>
                <Input type="text" color="black"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </FormControl>

              <FormControl ml={{ base: "2%", md: "0%" }} w={{ base: "90%", md: "40%" }}>
                <FormLabel color="black">Last Name<span className='required'>*</span></FormLabel>
                <Input type="text" color="black"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </FormControl>

            </Flex>

            <FormControl ml={{ base: "2%", md: "0%" }} mt="1%" w={{ base: "90%", md: "100%" }}>
              <FormLabel color="black">Email *</FormLabel>
              <Input type="text" color="black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <Flex mt="1%" direction={{ base: "column", md: "row" }} justifyContent={"space-between"} w="100%">

              <FormControl ml={{ base: "2%", md: "0%" }} w={{ base: "90%", md: "40%" }}>
                <FormLabel color="black">Contact Number *</FormLabel>
                <Input type="text" color="black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>

              <FormControl ml={{ base: "2%", md: "0%" }} mt="1%" w={{ base: "90%", md: "40%" }}>
                <FormLabel color="black">Gender *</FormLabel>
                <Select
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}>
                  <option value="option 1"></option>
                  <option value="Male" >Male</option>
                  <option value="Female" >Female</option>
                  <option value="Others" >Others</option>
                </Select>
              </FormControl>

            </Flex>

            <FormControl ml={{ base: "2%", md: "0%" }} mt="1%" w={{ base: "90%", md: "100%" }}>
              <FormLabel color="black">Date of Birth *</FormLabel>
              <Input color="black" type="date" className='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
            </FormControl>

          </Box>

          <Box mt={{ base: "5%", md: "1%" }} w={{base:"100%",md:"40%"}} >
            <Box color="black" ml={{base:"25%",md:"0%"}} >
            
            <Flex direction="column" pl={{md:"20%",base:"0%"}} >
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    isDisabled={isLoading }
                    display="none"
                    id="image-input"
                />
                {
                  userImage ? 
                    <Avatar size="2xl"
                      mt={{base:"0%",md:"5%"}}
                      src={URL.createObjectURL(userImage.file)}
                      alt="Uploaded image"
                      objectFit="cover"
                    />
                    :
                    <Avatar 
                    mb="5%" 
                    size={{base:"xl",md:"2xl"}} 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWB-3sfDKJdZD7ZyJz903Rr_zz6soTg_iGBw&usqp=CAU" />
                }
                <label htmlFor="image-input">
                    <Button
                        as="div"
                        size="sm"
                        variant="outline"
                        bg="black"
                        color="white"
                        p={5}
                        w="8rem"
                        h="2rem"
                        borderRadius={25}
                        mt="10%"
                        cursor="pointer"
                        disabled={isLoading}
                        transition={"all ease-in-out 100ms"} 
                        _hover={{ transform: "scale(1.05)" }}
                        _disabled={{
                            opacity: 0.4,
                            cursor: "not-allowed",
                        }}
                    >
                        {isLoading ? (
                            <CircularProgress size="28px" isIndeterminate color="teal" />
                        ) : (
                            <Box as="span" fontSize="sm">
                                Upload Image
                            </Box>
                        )}
                    </Button>
                </label>

                

                
            </Flex>

            
            </Box>
          </Box>

        </Flex>

        <Center>
          <Button transition={"all ease-in-out 100ms"} _hover={{ transform: "scale(1.05)" }} color="white" bg="black" w={{ base: "30%", md: "10%" }} borderRadius={25} mr="3%">Skip</Button>
          <Button transition={"all ease-in-out 100ms"} _hover={{ transform: "scale(1.05)" }} color="white" bg="black" w={{ base: "30%", md: "10%" }} borderRadius={25} onClick={handleSubmit}>Save</Button>
        </Center>


      </Box>
    </Flex>
  )
}
