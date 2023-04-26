import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FiEye } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

export default function RegisteredEvents({ event }) {
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

        <Box mt={{base:"3%",md:"0%"}} w={{ base: "100%", md: "30%" }}
          display="flex"
          flexDirection={{ base: "row", md: "column-reverse" }}
          justifyContent={{md:"space-between",base:"center"}}
        >


          <Button w={{md:"50%",base:"40%"}}
              style={{
                backgroundColor:
                  event.status === "Active" ? "#0BB805" : "orange",
              }}
              borderRadius="full"
              color="white"
              ml={{base:"20%",md:"40%"}}
              mt={{base:"0%",md:"2%"}}
              size={{ base: "sm", sm: "sm", md: "md" }}
              transition={"all ease-in-out 100ms"}
              _hover={{
                transform: "scale(1.05)",
                bgColor: "#0BB805",
                color: "white",
              }}
            >
              {event.status}
          </Button>

          <Box mt={{ base: "2%",md:"2%" }} ml={{base:"10%",md:"70%"}}>
            <FaCheckCircle size={30} color="#0BB805" />
          </Box>
        </Box>


      </Flex>


    </Box>
  );
}
