import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

export default function SavedEvents({ event }) {
  return (
    <Box display="flex" flexDirection="row"
      boxShadow={"dark-lg"}
      w={{ base: "100%", md: "60%" }}
      p="2%"
      mb='6'
      borderRadius={"20px"}
    >


      <Box w="20%">
        <Image
          src="https://www.cloudcomputing-news.net/wp-content/uploads/sites/2/2022/02/vmware-logo.png"
          alt="VMWare Logo"
          width={{ base: "90%", md: "100%" }}
          m={{ base: "20% auto", md: "4% auto" }}
          height={{ base: "60%", md: "90%" }}
        />
      </Box>

      <Flex w="80%" direction={{ md: "row", base: "column" }}>

        <Box w={{ base: "100%", md: "70%" }} ml={{ base: "2%", md: "5%" }}>
          <Text
            fontSize={{ base: "md", md: "2xl" }}
            fontWeight="extrabold"
            textAlign={{ base: "left", md: "left" }}
            width="100%"
          >
            {event.title}
          </Text>
          <Text
            textAlign={{ base: "left", md: "left" }}
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="bold"
          >
            {event.compaName}
          </Text>

          <Flex mt={{base:"10%",md:"7%"}}>
            <Text
              width="35%"
              // textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              #Engineer
            </Text>
            <Text
              width="65%"
              // textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              #EngineerStudents
            </Text>
          </Flex>
          <HStack w={{ base: "40%" }} mt={{ base: "0%", md: "2%" }}>
            <FiEye />
            <Text
              // textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              {event.views} views
            </Text>
          </HStack>
        </Box>

          <Box mt={{ base: "0%",md:"0%" }} ml={{base:"80%",md:"20%"}}>
            <BsFillBookmarkFill size="1.5rem" />
          </Box>



      </Flex>


    </Box>
  );
}
