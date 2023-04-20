import React from "react";

import "./EventRegistrationForm3.css";

import {
  Flex,
  Center,
  Square,
  Text,
  Box,
  Stack,
  Heading,
  HStack,
  VStack,
  Select,
  Button,
} from "@chakra-ui/react";

import { BsBuildingAdd } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

function EventRegistrationForm3() {
  return (
    <>

      <div className="ticket_container">
        <div className="top_section">
          <Heading size="md"> Java Backend Developer </Heading>
          <Box className="location_info">
            <HStack spacing="10px">
              <HStack>
                <BsBuildingAdd />
                <Text> VMWare </Text>
              </HStack>

              <HStack>
                <ImLocation />
                <Text> Mumbai </Text>
              </HStack>
            </HStack>
          </Box>
        </div>
        <br />
        <br />

        <Box>
          <Flex direction={{ base:"column", md:"row" }}>
            <Box
              borderRight={{md:"1px",base:"0"}}
              borderColor={"black"}
              py={7}
              px={7}
              width={{base:"100%",md:"60%"}}
              ml={'1.5%'}
            >
              <Text align={"center"} marginBottom={"10px"}>
                Tickets(s)
                <br />
                The ticket amount is being shown below. You can also apply a
                coupon code(if any) to avail discount.{" "}
              </Text>

              <Box
                borderColor={"black"}
                align={"center"}
              >
                <Box border={"1px"} borderColor={"black"} py={2} px={5}>
                  <HStack
                  >
                    <Box 
                      borderBottom={"1px"}
                      borderColor={"black"}
                      py={4}
                      px={4}
                      w="50%"
                    >
                      <VStack>
                        <Text>Fees per Member</Text>
                        <Text>Units</Text>
                      </VStack>
                    </Box>

                    <Box
                      borderBottom={"1px"}
                      borderColor={"black"}
                      py={4}
                      px={4}
                      w="50%"
                    >
                      <VStack>
                        <Text>INR 100</Text>
                        <Text>1</Text>
                      </VStack>
                    </Box>
                  </HStack>

                  <HStack
                  >
                    <Box
                      borderColor={"black"}
                      py={4}
                      px={4}
                      w="50%"
                    >
                      <Text>Amount</Text>
                    </Box>
                    <Box
                      borderColor={"black"}
                      py={4}
                      px={4}
                      w="50%"
                    >
                      <Text>INR 100</Text>
                    </Box>
                  </HStack>
                </Box>
              </Box>
            </Box>
            <Box width={{base:"90%",md:"35%"}} ml={{base:"5%",md:"2%"}}
            rounded={'lg'}
             boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            }>
              <Box
                rounded={"lg"}
                background={
                  "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                }
                py={3} px={3}
              >
                <Box
                  textColor={"black"}
                  borderColor={"black"}
                  align={"center"}
                >
                  <Heading size={"md"} w="100%">
                    Total Amount Summary
                  </Heading>
                  <br />
                  <VStack
                  >
                    <Box
                      py={1}
                      px={6}
                      w="90%"
                    >
                      <HStack 
                      >
                        <Box
                          py={1}
                          px={7}
                          w="100%"
                        >
                          <Text marginLeft={'1px'}>Total Due (Round off)</Text>
                        </Box>
                        <Box
                          py={4}
                          px={6}
                          w="100%"
                        >
                          <Text>INR 100</Text>
                        </Box>
                      </HStack>
                    </Box>
                    <Box
                      borderBottom={"1px"}
                      py={2}
                      px={5}
                      w="90%"
                    >
                      <Select
                        background={
                          "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                        }
                        placeholder="Select option"
                      >
                        <option value="option1">Debit/ Credit Cards</option>
                        <option value="option2">UPI</option>
                        <option value="option3">Internet Banking</option>
                      </Select>
                    </Box>

                    <Box
                      py={2}
                      px={4}
                      w="100%"
                    >
                      <Button
                        background={"black"}
                        width="90%"
                        loadingText="Submitting"
                        color={"white"}
                        _hover={{
                          bg:"grey"
                        }}
                      >
                        PAY
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Flex>
          </Box>
      </div>
    </>
  );
}

export default EventRegistrationForm3;
