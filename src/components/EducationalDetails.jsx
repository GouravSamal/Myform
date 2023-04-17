import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Select,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box
} from '@chakra-ui/react';
import './EditProfileAndEducation.css';
import { RxCross1 } from 'react-icons/rx';
import { useToast } from '@chakra-ui/react';

export default function EducationalDetails() {

  const [qualifications, setQualifications] = useState();
  const [beginningYear, setBeginneringYear] = useState("");
  const [percentage, setPercentage] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [degree, setDegree] = useState("");
  const [finalYear, setFinalYear] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [university, setUniversity] = useState("");
  const [institute, setInstitute] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [educationArray, setEducationArray] = useState([]);

  const date = new Date();
  const todayDay = date.getDay();
  const todayMonth = date.getMonth();
  const todayYear = date.getFullYear();
  const today = todayYear + "" + todayMonth + "" + todayDay

  const [todate, setTodate] = useState("");
  const [fromdate, setFromdate] = useState("");

  const toast = useToast();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Today", today);

    if (fromdate > todate) {
      toast({
        title: 'Error Occured',
        description: 'Please enter the valid date',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom'
      })
      alert('Please enter the valid date')
      return;
    }

    // if(fromdate > today){
    // alert('Please enter the valid beginning year')
    // return;
    // }


    const obj = {
      "Qualifications": qualifications,
      "Degree": degree,
      "Beginning Year": beginningYear,
      "Final Year": finalYear,
      "Percentage": percentage,
      "CGPA": cgpa,
      "Specialization": specialization,
      "University": university,
      "Institute": institute,
      "Country": country,
      "State": state,
      "City": city
    }

    setEducationArray([...educationArray, obj]);

    setQualifications("");
    setDegree("");
    setBeginneringYear();
    setFinalYear();
    setPercentage("");
    setCgpa("");
    setSpecialization("");
    setUniversity("");
    setInstitute("");
    setCountry("");
    setState("");
    setCity("");
  }


  console.log(educationArray);

  const handlefromdate = (e) => {

    setBeginneringYear(e.target.value);
    const getFromDateValue = e.target.value;

    const setFromdateformat = getFromDateValue.split('-');

    const setFromyear = setFromdateformat[0];
    const setFrommonth = setFromdateformat[1];
    const setFromday = setFromdateformat[2];

    const fromdate = setFromyear + "" + setFrommonth + "" + setFromday;
    setFromdate(fromdate);
  }

  const handletodate = (e) => {

    setFinalYear(e.target.value);
    const getToDateValue = e.target.value;

    const setTodateformat = getToDateValue.split('-');

    const settoyear = setTodateformat[0];
    const settomonth = setTodateformat[1];
    const settoday = setTodateformat[2];

    const todate = settoyear + "" + settomonth + "" + settoday;
    setTodate(todate);
  }


  return (

    <Box justifyContent={"center"} align={"center"}>
      <Box w={{base:"100%",md:"60%"}} pb={{base:"5%",md:"2%"}} mt={{base:"0%",md:"5%"}}  borderRadius={{base:"0px",md:"20px"}} boxShadow={"dark-lg"}>

        {/* <span className='cross_icon'><RxCross1 /></span> */}

        <Center>
          <Heading size="lg" mt="1%" color="black">Educational Details</Heading>
        </Center>

        <Box  ml="3%" mr="3%">

          <Flex direction={{ base: "column", md: "row" }} mt="1%" justifyContent={"space-between"} w={{ base: "100%" }}>

            <Flex direction={"column"} w={{ md: "40%" }}>

              <FormControl mt="1%" >
                <FormLabel color="black">Qualifications *</FormLabel>
                <Select
                  onChange={(e) => setQualifications(e.target.value)}
                  value={qualifications}>
                  <option value="option 1">----</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                </Select>
              </FormControl>

              <FormControl mt="1%">
                <FormLabel color="black">Degree *</FormLabel>
                <Input type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </FormControl>

              <FormControl mt="1%">

                <FormLabel color="black">From(Year) *</FormLabel>
                <Input borderWidth={1} type="date"  placeholder=""
                  value={beginningYear}
                  // onChange={(e) => setBeginneringYear(e.target.value)}
                  onChange={handlefromdate}
                />
              </FormControl>

              <FormControl mt="1%">
                <FormLabel color="black">To(Year) *</FormLabel>
                <Input borderWidth={1} type="date"
                  value={finalYear}
                  // onChange={(e) => setFinalYear(e.target.value)}
                  onChange={handletodate}
                />
              </FormControl>

            </Flex>

            <Flex direction={"column"} w={{ md: "40%" }}>

              <FormControl mt="1%">
                <FormLabel color="black">Percentage *</FormLabel>
                <Input borderWidth={1} type="text"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                />
              </FormControl>

              <FormControl mt="1%">
                <FormLabel color="black">CGPA *</FormLabel>
                <Input borderWidth={1} type="text"
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                />
              </FormControl>

              <FormControl mt="1%">
                <FormLabel color="black">Specialization<span className="required">*</span></FormLabel>
                <Input borderWidth={1} type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </FormControl>

              <FormControl mt="1%">
                <FormLabel color="black">University *</FormLabel>
                <Input borderWidth={1} type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </FormControl>

            </Flex>

          </Flex>

          <FormControl w="100%" mt="1%">
            <FormLabel color="black">Institute *</FormLabel>
            <Input borderWidth={1} type="text"
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
            />
          </FormControl>

          <Flex mt="1%" direction={{ base: "column", md: "row" }} justifyContent={{ md: "space-between" }}>

            <FormControl w={{ md: "30%" }}>
              <FormLabel color="black">Country *</FormLabel>
              <Input borderWidth={1} type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormControl>
            

            <FormControl w={{ md: "30%" }}>
              <FormLabel color="black">State *</FormLabel>
              <Input borderWidth={1} type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </FormControl>

            <FormControl w={{ md: "30%" }}>
              <FormLabel color="black">City *</FormLabel>
              <Input borderWidth={1} type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>

          </Flex>

          <Center mt="2%">
            <Button transition={"all ease-in-out 100ms"} _hover={{ bg:"red", transform: "scale(1.05)" }} color="white" w={{base:"30%",md:"10%"}} borderRadius={25} bg="black" mr="3%">Cancel</Button>
            <Button transition={"all ease-in-out 100ms"} _hover={{ bg:"grey", transform: "scale(1.05)" }} color="white" w={{base:"30%",md:"10%"}} borderRadius={25} bg="black" onClick={handleSubmit}>Save</Button>
          </Center>
        </Box>

      </Box>
    </Box>
  )
}
