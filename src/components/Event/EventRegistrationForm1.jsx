
import React, { useState } from 'react';
import {
    Input,
    Text,
    Heading,
    HStack,
    Box,
    Flex,
    FormControl,
    Select,
    Button
}
from '@chakra-ui/react';
import { ImLocation } from 'react-icons/im';
import { BsBuildingAdd } from 'react-icons/bs';

export default function EventRegistrationForm1() {

    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState();

    

    const [eventtitle,setEventtitle]=useState("Java Backend Developer");
    const [eventlocation,setEventlocation]=useState("Mumbai");
    const [eventcompany,setEventCompany]=useState("VMWare");

    return (

        <Box bg="white" color="black">

            <Box textAlign="center"  pt={{md:"1%"}} pb={{md:"2%",base:"3%"}} borderBottomWidth={2}  borderColor="black" position="relative" >

                <Heading size="md"> { eventtitle } </Heading>

                <Box position="absolute" ml={{md:"43%",base:"22%"}} mt={{ md:"1%" }} bgColor="white"  p={{ md:"0 1%",base:"0 2%" }}>
                    <HStack spacing="10px">

                        <HStack>
                            <BsBuildingAdd />
                            <Text> { eventcompany } </Text>
                        </HStack>

                        <HStack>
                            <ImLocation />
                            <Text> { eventlocation }  </Text>
                        </HStack>

                    </HStack>
                </Box>


            </Box>

            <Box borderRadius={{md:"25",base:"0"}} borderWidth={1} w={{base:"100%",md:"90%"}}  mt={{base:"10%",md:"4%"}} ml={{base:"0%",md:"5%"}} boxShadow={"dark-lg"}>

                <Flex direction={"column"} mt={{ base:"5%", md:"1%" }}>

                    <FormControl w="90%" mt="1%" ml="5%">
                        <label>Email *</label>
                        <Input bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                    </FormControl>

                    <FormControl w="90%" mt="1%" ml="5%">
                        <label>Mobile *</label>
                        <Input bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)}></Input>
                    </FormControl>

                    <FormControl w="90%" mt="1%" ml="5%">
                        <label>First Name *</label>
                        <Input bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></Input>
                    </FormControl>

                    <FormControl w="90%" mt="1%" ml="5%">
                        <label>Last Name *</label>
                        <Input bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></Input>
                    </FormControl>

                    <FormControl w={{md:"40%",base:"90%"}} mt="1%" ml="5%" pb="2%">
                            <label>Gender *</label>
                            <Select  bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" value={ gender }  placeholder='Select option' mt="1%" w={{ base: "100%", md: "50%" }} onChange={(e) => setGender(e.target.value)}>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Others'>Others</option>
                            </Select>
                    </FormControl>

                    {/* <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"} w="90%" mt="1%" ml="5%">
                        <FormControl>
                            <label>Gender *</label>
                            <Select  bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" value={ gender }  placeholder='Select option' mt="1%" w={{ base: "100%", md: "50%" }} onChange={(e) => setGender(e.target.value)}>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Others'>Others</option>
                            </Select>
                        </FormControl>

                        <FormControl w={{ base: "100%", md: "50%" }}>
                            <label>Organisation *</label>
                            <Input bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" type="text" value={organisation} onChange={(e) => setOrganization(e.target.value)}></Input>
                        </FormControl>
                    </Flex> */}

                    {/* <FormControl w="90%" mt="1%" ml="5%">
                        <label>Type *</label>
                        <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"}>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }} >
                                College Students
                            </Button>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }}>
                                Professional
                            </Button>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }}>
                                School Students
                            </Button>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }} onClick={ () => setTypeOthers(true) }>
                                Others
                            </Button>
                        </Flex>
                            {
                                typeOthers && 
                                <Input w="100%" mt={{base:"2%",md:"1%"}} bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"/>
                            }
                    </FormControl> */}

                    {/* <FormControl w="90%" mt="1%" mb="2%" ml="5%">
                        <label>Domain *</label>
                        <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"}>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }}>
                                Management
                            </Button>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }}>
                                Engineering
                            </Button>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }}>
                                Arts, Science & Commerce
                            </Button>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }} onClick={ () => setDomainOthers(true) }>
                                Others
                            </Button>
                        </Flex>
                        {
                            domainOthers && 
                            <Input color='black' w="100%" mt={{base:"2%",md:"1%"}} bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"/>
                        }
                    </FormControl> */}

                </Flex>

            </Box>

        </Box>

    )
}
