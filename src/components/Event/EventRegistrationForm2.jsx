import React, { useState } from 'react';
import { 
  FormControl, 
  HStack, 
  Input, 
  Select, 
  Flex,
  Button,
  Box
 } from '@chakra-ui/react';

export default function EventRegistrationForm2() {

  const [course, setCourse] = useState();
  const [yearOfGraduation, setYearOfGraduation] = useState();
  const [courseDuration, setCourseDuration] = useState();

  return (
    <Box bg="white" color="black" minH={{base:"auto",md:"80vh"}}>

      <Box borderRadius={{md:"25",base:"0"}} boxShadow={{md:"dark-lg"}} pb="5%" w={{md:"70%",base:"100%"}}  m={{md:"0 auto",base:"0 0"}}>
        <FormControl w="90%" ml="5%" pt="2%">
          <label>Course *</label>
          <HStack mt="1%">
            <Input w="20%"  />
            <Input w="20%"  />
            <Input w="20%"  />
            <Input w="20%"  />
          </HStack>
        </FormControl>

        <FormControl w={{base:"90%",md:"100%"}} ml="5%" mt="1%">
          <label>Course Specialization</label>
          <Select  value={course} placeholder='Select option' mt="1%" w={{ base: "90%", md: "82%" }} onChange={(e) => setCourse(e.target.value)}>
            <option value='Advocate'>Advocate</option>
            <option value='Engineering'>Engineering</option>
            <option value='Medical'>Medical</option>
          </Select>
        </FormControl>

        <FormControl w="90%" mt="1%" ml="5%">
          <label>Type *</label>
          <Flex direction={{ base: "column", md: "row" }} >
            <Button  mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }}  size='md' w={{ base: "100%", sm: "80%", md: "20%" }}>
              Full Time
            </Button>
            <Button  mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }}  size='md' w={{ base: "100%", sm: "80%", md: "20%" }}>
              Part Time
            </Button>
            <Button  borderWidth={1} mt={{ base: "2%", md: "1%" }}  size='md' w={{ base: "100%", sm: "80%", md: "20%" }}>
              Distance Learning
            </Button>
          </Flex>
        </FormControl>

        <FormControl w={{base:"90%",md:"100%"}} ml="5%" mt="1%">
          <label>Year of Graduation *</label>
          <Select  value={yearOfGraduation} placeholder='Select option' mt="1%" w={{ base: "90%", md: "82%" }} onChange={(e) => setYearOfGraduation(e.target.value)}>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
          </Select>
        </FormControl>

        <FormControl w="90%" ml="5%" mt="1%">
          <label>Course Duration *</label>
          <Select  value={courseDuration} placeholder='Select option' mt="1%" w={{ base: "90%", md: "35%" }} onChange={(e) => setCourseDuration(e.target.value)}>
            <option value='2011'>3</option>
            <option value='2012'>4</option>
            <option value='2013'>5</option>
          </Select>
        </FormControl>

        <FormControl w={{base:"90%",md:"84%"}} mt="1%" ml="5%">
          <label>Type *</label>
          <Flex justifyContent={"space-between"}>
            <Button  mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }}  size='md' w={{ base: "40%", md: "25%" }}>
              Yes
            </Button>
            <Button  mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }}  size='md' w={{ base: "40%", md: "25%" }}>
              No
            </Button>
          </Flex>
        </FormControl>

        <FormControl w="90%" mt="1%" ml="5%">
          <label>Country of Origin *</label>
          <Input mt="1%" type="text"  w={{ base: "100%", md: "92%" }} />
        </FormControl>
      </Box>
    </Box>
  )
}
