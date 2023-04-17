import React from 'react';
import { 
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Center
 } from '@chakra-ui/react';

export default function QuizCard( { title, description, image } ) {
  
    const handleClick = () => {
        console.log("Handle Click")
    }

    return (

    <Center>
      <Box w={{base:"100%",md:"70%"}} color="black" rounded={{base:"0px",md:"2xl"}} h={{base:"auto",md:"30vh"}}  mt="4%" mb="1%"  boxShadow={"dark-lg"}>
        <Flex direction={{base:"column",md:"row"}} h="100%" w="100%">
          <Box  w={{base:"100%",md:"30%"}} h={{base:"30vh"}}>
            <Image borderRadius={{base:"0px 0px 0px )px",md:"20px 0px 0px 20px"}} src={image} boxSize="100%" objectFit="cover"/>
          </Box>

          <Box pt="5%" pl="3%"  w={{base:"100%",md:"50%"}} align={"center"}>
            <Heading  size="md" className='quiz_heading'>{ title }</Heading>
            <Text className='quiz_description'> { description } </Text>
          </Box>

          <Box w={{base:"100%",md:"20%"}} mt={{base:"5%",md:"7%"}} pb={{base:"5%"}}>
            <Center>
              <Button size="md"
              w="70%"
              bgColor="black"
              color="white"
              borderRadius="30px"
              transition={"all ease-in-out 100ms"}
              _hover={{ backgroundColor: "black", transform: "scale(1.05)" }} onClick={ handleClick  } > Take the test </Button>
            </Center>
          </Box>
        </Flex>


      </Box>
    </Center>
  )
}
