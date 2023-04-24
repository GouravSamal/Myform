import React, { useState } from 'react';
import {
  FormControl,
  Input,
  Select,
  Flex,
  Button,
  Box,
  FormLabel
} from '@chakra-ui/react';

export default function EventRegistrationForm2() {

  const [institute, setInstitute] = useState("");
  const [type, setType] = useState();
  const [domain, setDomain] = useState();
  const [degree, setDegree] = useState();
  const [degreeDuration, setDegreeDuration] = useState();
  const [degreeSpecialization, setDegreeSpecialization] = useState();
  const [yearOfGraduation, setYearOfGraduation] = useState();
  const [country, setCountry] = useState();

  const [disabledtype, setDisabledtype] = useState("");
  const [programme, setProgramme] = useState("");

  return (
    <Box bg="white" color="black" minH={{ base: "auto", md: "80vh" }}>

      <Box borderRadius={{ md: "25", base: "0" }} boxShadow={{ md: "dark-lg" }} pb="5%" w={{ md: "70%", base: "100%" }} m={{ md: "0 auto", base: "0 0" }}>
        <FormControl w="90%" ml="5%" pt="2%">
          <FormLabel>Institute *</FormLabel>
          <Input type="text" w="100%" value={institute} onChange={(e) => setInstitute(e.target.value)} />
        </FormControl>

        <Flex w="90%" ml="5%" direction={{ md: "row", base: "column" }} justifyContent={"space-between"}>
          <FormControl w={{ md: "40%", base: "100%" }} mt={{md:"1%",base:"2%"}}>
            <FormLabel>Type *</FormLabel>
            <Select value={type} placeholder='Select option' onChange={(e) => setType(e.target.value)}>
              <option value='collegestudents'>College Students</option>
              <option value='schoolstudents'>School Students</option>
              <option value='professional'>Professional</option>
              <option value='others'>Others</option>
            </Select>
          </FormControl>

          <FormControl w={{ md: "40%", base: "100%" }} mt={{ md: "1%", base: "5%" }} direction={{ md: "row", base: "column" }}>
            <FormLabel>Domain *</FormLabel>
            <Select value={domain} placeholder='Select option' onChange={(e) => setDomain(e.target.value)}>
              <option value='management'>Management</option>
              <option value='engineering'>Engineering</option>
              <option value='arts'>Arts</option>
              <option value='science'>Science</option>
              <option value='commerce'>Commerce</option>
              <option value='others'>Others</option>
            </Select>
          </FormControl>
        </Flex>

        <Flex w="90%" ml="5%" direction={{ md: "row", base: "column" }} justifyContent={"space-between"}>
          <FormControl w={{ md: "40%", base: "100%" }} mt={{ md: "1%", base: "5%" }}>
            <FormLabel>Degree *</FormLabel>
            <Select value={degree} placeholder='Select option' onChange={(e) => setDegree(e.target.value)}>
              <option value='B Tech'>B Tech</option>
              <option value='M Tech'>M Tech</option>
              <option value='BSC'>BSC</option>
              <option value='MSC'>MSC</option>
            </Select>
          </FormControl>

          <FormControl w={{ md: "40%", base: "100%" }} mt={{ md: "1%", base: "5%" }} direction={{ md: "row", base: "column" }}>
            <FormLabel>Degree Duration *</FormLabel>
            <Select value={degreeDuration} placeholder='Select option' onChange={(e) => setDegreeDuration(e.target.value)}>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Select>
          </FormControl>
        </Flex>

        <FormControl w={{ base: "90%", md: "90%" }} ml="5%" mt={{ md: "1%", base: "5%" }}>
          <FormLabel>Degree Specialization *</FormLabel>
          <Select value={degreeSpecialization} placeholder='Select option' mt="1%"  onChange={(e) => setDegreeSpecialization(e.target.value)}>
            <option value='cse'>CSE</option>
            <option value='eee'>EEE</option>
            <option value='ece'>ECE</option>
            <option value='others'>Others</option>
          </Select>
        </FormControl>

        <FormControl w={{ base: "90%", md: "90%" }} ml="5%" mt={{ md: "1%", base: "5%" }}>
          <FormLabel>Year of Graduation *</FormLabel>
          <Select value={yearOfGraduation} placeholder='Select option' mt="1%" onChange={(e) => setYearOfGraduation(e.target.value)}>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
          </Select>
        </FormControl>

        <FormControl w="90%" mt={{ md: "1%", base: "5%" }} ml="5%">
          <FormLabel>Type *</FormLabel>
          <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"}>
            <Button  mr="2%" borderWidth={1} mt={{ base: "1%", md: "0%" }}  size='md' w={{ base: "100%", sm: "80%", md: "30%" }}
              style={{ 
                backgroundColor: programme === "fulltime" ? "black" : "white",
                color: programme === "fulltime" ? "white" : "black"
               }}
              onClick={ () => {
                setProgramme("fulltime")
              }}
            >
              Full Time
            </Button>
            <Button  mr="2%" borderWidth={1} mt={{ base: "2%", md: "0%" }}  size='md' w={{ base: "100%", sm: "80%", md: "30%" }}
              style={{ 
                backgroundColor: programme === "parttime" ? "black" : "white",
                color: programme === "parttime" ? "white" : "black"
               }}
              onClick={ () => {
                setProgramme("parttime")
              }}
            >
              Part Time
            </Button>
            <Button  borderWidth={1} mt={{ base: "2%", md: "0%" }}  size='md' w={{ base: "100%", sm: "80%", md: "30%" }}
              style={{ 
                backgroundColor: programme === "distancelearning" ? "black" : "white",
                color: programme === "distancelearning" ? "white" : "black"
               }}
              onClick={ () => {
                setProgramme("distancelearning")
              }}
            >
              Distance Learning
            </Button>
          </Flex>
        </FormControl>

        <FormControl w={{ base: "90%", md: "84%" }} mt={{ md: "1%", base: "5%" }} ml="5%">
          <FormLabel>Differently abled</FormLabel>
          <Flex >
            <Button   mr="2%" borderWidth={1} mt={{ base: "2%", md: "0%" }} size='md' w={{ base: "45%", md: "25%" }} 
              style={{ 
                backgroundColor: disabledtype === "yes" ? "black" : "white",
                color: disabledtype === "yes" ? "white" : "black"
               }}
              onClick={ () => {
                setDisabledtype("yes")
              }}
            >
              Yes
            </Button>
            <Button  borderWidth={1} mt={{ base: "2%", md: "0%" }} size='md' w={{ base: "45%", md: "25%" }} 
              style={{ 
                backgroundColor: disabledtype === "no" ? "black" : "white",
                color: disabledtype === "no" ? "white" : "black"
               }}
              onClick={ () => {
                setDisabledtype("no")
              }}
            >
              No
            </Button>
          </Flex>
        </FormControl>

        <FormControl w="90%" mt={{ md: "1%", base: "5%" }} ml="5%">
          <FormLabel>Country of Origin *</FormLabel>
          <Input type="text" value={country} onClick={(e)=> setCountry(e.target.value)}  />
        </FormControl>
      </Box>
    </Box>
  )
}
