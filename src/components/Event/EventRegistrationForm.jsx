import './EventRegistrationForm.css';

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

export default function EventRegistrationForm() {

    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [organisation, setOrganization] = useState("");
    const [gender, setGender] = useState();
    const [typeOthers,setTypeOthers] = useState(false);
    const [domainOthers,setDomainOthers] = useState(false);

    return (

        <div className='registration_form_container'>

            <div className='top_section'>

                <Heading size="md"> Java Backend Developer </Heading>

                <Box className='location_info'>
                    <HStack spacing="10px">

                        <HStack>
                            <BsBuildingAdd />
                            <Text> VMWare </Text>
                        </HStack>

                        <HStack>
                            <ImLocation />
                            <Text> Mumbai  </Text>
                        </HStack>

                    </HStack>
                </Box>


            </div>

            <Box borderWidth={1} w={{base:"100%",md:"90%"}}  mt={{base:"10%"}} ml={{base:"0%",md:"5%"}} boxShadow={"dark-lg"}>

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

                    <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"} w="90%" mt="1%" ml="5%">
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
                    </Flex>

                    <FormControl w="90%" mt="1%" ml="5%">
                        <label>Type *</label>
                        <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"}>
                            <Button color='black' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ sm: "80%", md: "20%" }}>
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
                    </FormControl>

                    <FormControl w="90%" mt="1%" mb="2%" ml="5%">
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
                    </FormControl>

                </Flex>

            </Box>



            <div className="bottom_section">
                <Flex justifyContent={"space-between"} w="90%" ml="5%" pb="1%">
                    <Button borderWidth={1} mt={{ base: "2%", md: "1%" }} color='black' size='md' w={{base:"40%",md:"10%"}}>
                        Prev
                    </Button>
                    <Button borderWidth={1} mt={{ base: "2%", md: "1%" }} color='black' size='md' w={{base:"40%",md:"10%"}}>
                        Next
                    </Button>
                </Flex>
            </div>

        </div>

    )
}
