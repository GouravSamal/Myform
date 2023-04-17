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
  Avatar
 } from '@chakra-ui/react';

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

  const [profileArray,setProfileArray]=useState([]);

  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit=(e) => {
    e.preventDefault();

    console.log(firstname)

    const obj = {
      "FirstName":firstname,
      "LastName":lastname,
      "Email":email,
      "Phone":phone,
      "Gender":gender,
      "DateOfBirth":dob      
    }
    setProfileArray([...profileArray,obj]);

    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setGender("");
    setDob();

  }
  
  console.log(profileArray);

  return (
    <Flex justifyContent={"center"} align={"center"}>

      <Box w={{base:"95%",md:"90%"}} pb={{base:"5%",md:"2%"}} mt={{base:"0%",md:"5%"}}  borderRadius={{base:"0px",md:"25px"}} boxShadow={"dark-lg"}>

            <Center>
              <Heading size="xl" mt="1%">Edit Profile</Heading>
            </Center>
        {/* <span className='cross_icon'><RxCross1 /></span> */}

        <Flex direction={{base:"column-reverse",md:"row"}} pb="3%" w={{md:"90%",base:"100%"}} >

          <Box w={{base:"100%",md:"60%"}} mt={{base:"5%",md:"1%"}} ml="2%" mr="2%">


            <Flex  mt="1%" direction={{base:"column",md:"row"}} justifyContent={"space-between"} w="100%">

              <FormControl ml={{base:"2%",md:"0%"}} mt="1%" w={{base:"90%",md:"30%"}}>
                <FormLabel color="black">First Name *</FormLabel>
                <Input type="text" color="black" 
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </FormControl>

              <FormControl ml={{base:"2%",md:"0%"}} w={{base:"90%",md:"30%"}}> 
                <FormLabel color="black">Last Name<span className='required'>*</span></FormLabel>
                <Input type="text" color="black"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </FormControl>

            </Flex>

            <FormControl ml={{base:"2%",md:"0%"}} mt="1%" w={{base:"90%",md:"100%"}}>
              <FormLabel color="black">Email *</FormLabel>
              <Input type="text" color="black" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <Flex mt="1%" direction={{ base:"column",md:"row" }} justifyContent={"space-between"} w="100%">

              <FormControl ml={{base:"2%",md:"0%"}} w={{base:"90%",md:"30%"}}>
                <FormLabel color="black">Contact Number *</FormLabel>
                <Input type="text" color="black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>

              <FormControl ml={{base:"2%",md:"0%"}} mt="1%" w={{base:"90%",md:"30%"}}>
                <FormLabel color="black">Gender *</FormLabel>
                <Select 
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}>
                  <option value="option 1">-----</option>
                  <option value="Male" >Male</option>
                  <option value="Female" >Female</option>
                  <option value="Others" >Others</option>
                </Select>
              </FormControl>

            </Flex>

            <FormControl ml={{base:"2%",md:"0%"}} mt="1%" w={{base:"90%",md:"100%"}}>
              <FormLabel color="black">Date of Birth *</FormLabel>
              <Input color="black" type="date" className='dob' value={dob} onChange={(e)=>setDob(e.target.value)}/>
            </FormControl>

          </Box>

          <Box mt={{base:"5%",md:"5%"}}>
            <Box color="black" ml="25%">
              {selectedFile && <Avatar mb="5%" size={{base:"xl",md:"2xl"}} src={preview} />}
              <Input border={"none"} type="file" w="90%" ml="-15%" onChange={onSelectFile} />
            </Box>
          </Box>

        </Flex>

        <Center>
          <Button transition={"all ease-in-out 100ms"} _hover={{ bg:"red", transform: "scale(1.05)" }} color="white" bg="black" w={{base:"30%",md:"10%"}} borderRadius={25}  mr="3%">Cancel</Button>
          <Button transition={"all ease-in-out 100ms"} _hover={{ bg:"grey", transform: "scale(1.05)" }} color="white" bg="black" w={{base:"30%",md:"10%"}}  borderRadius={25}  onClick={handleSubmit}>Save</Button>
        </Center>


      </Box>
    </Flex>
  )
}
