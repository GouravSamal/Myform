import React, { useState } from 'react';
import { FormControl, HStack, Input, Select, Flex, Button } from '@chakra-ui/react';

export default function CourseDetailsForm() {

  const [course, setCourse] = useState();
  const [yearOfGraduation, setYearOfGraduation] = useState();
  const [courseDuration, setCourseDuration] = useState();

  return (
    <div className='coursedetailsform_container'>

      <div className='coursedetailsform'>
        <FormControl ml="5%" pt="2%">
          <label>Course *</label>
          <HStack>
            <Input w="20%" bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" />
            <Input w="20%" bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" />
            <Input w="20%" bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" />
            <Input w="20%" bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" />
          </HStack>
        </FormControl>

        <FormControl ml="5%" mt="1%">
          <label>Course Specialization</label>
          <Select bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" value={course} placeholder='Select option' mt="1%" w={{ base: "90%", md: "82%" }} onChange={(e) => setCourse(e.target.value)}>
            <option value='Advocate'>Advocate</option>
            <option value='Engineering'>Engineering</option>
            <option value='Medical'>Medical</option>
          </Select>
        </FormControl>

        <FormControl w="90%" mt="1%" ml="5%">
          <label>Type *</label>
          <Flex direction={{ base: "column", md: "row" }} >
            <Button bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ base: "100%", sm: "80%", md: "15%" }}>
              Full Time
            </Button>
            <Button bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ base: "100%", sm: "80%", md: "15%" }}>
              Part Time
            </Button>
            <Button bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ base: "100%", sm: "80%", md: "15%" }}>
              Distance Learning
            </Button>
          </Flex>
        </FormControl>

        <FormControl ml="5%" mt="1%">
          <label>Year of Graduation *</label>
          <Select bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" value={yearOfGraduation} placeholder='Select option' mt="1%" w={{ base: "90%", md: "82%" }} onChange={(e) => setYearOfGraduation(e.target.value)}>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
          </Select>
        </FormControl>

        <FormControl ml="5%" mt="1%">
          <label>Course Duration *</label>
          <Select bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" value={courseDuration} placeholder='Select option' mt="1%" w={{ base: "90%", md: "35%" }} onChange={(e) => setCourseDuration(e.target.value)}>
            <option value='2011'>3</option>
            <option value='2012'>4</option>
            <option value='2013'>5</option>
          </Select>
        </FormControl>

        <FormControl w={{base:"100",md:"84%"}} mt="1%" ml="5%">
          <label>Type *</label>
          <Flex justifyContent={"space-between"} mt="1%">
            <Button bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ base: "40%", md: "25%" }}>
              Yes
            </Button>
            <Button bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" mr="2%" borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ base: "40%", md: "25%" }}>
              No
            </Button>
          </Flex>
        </FormControl>

        <FormControl w="90%" mt="1%" ml="5%">
          <label>Country of Origin *</label>
          <Input type="text" bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" w={{ base: "100%", md: "92%" }} />
        </FormControl>



      </div>

      <div className="bottom_section">

        <Flex justifyContent={"space-between"} w="90%" ml="5%" pb="1%">

          <Button borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ base: "40%", md: "10%" }}>
            Prev
          </Button>
          <Button borderWidth={1} mt={{ base: "2%", md: "1%" }} colorScheme='black' size='md' w={{ base: "40%", md: "10%" }}>
            Next
          </Button>

        </Flex>

      </div>


    </div>
  )
}
