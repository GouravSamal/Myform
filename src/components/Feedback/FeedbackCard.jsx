import { useState } from "react";
import { Avatar, Box, Flex, Heading, Icon, Text, Button } from "@chakra-ui/react";
import { FaStar, FaThumbsUp, FaThumbsDown, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

import './FeedbackSection.css';

export default function FeedbackCard({ avatarUrl, name, rating, message, days, likes , dislikes }) {

  const [isLikes,setLikes] = useState(likes);
  const [isDisLikes,setDislikes] = useState(dislikes);

  // const handleLikes = () => {
  //   setLikes(!isLikes)
  //   if(isDisLikes){
  //     setDislikes(false)
  //   }

  // }

  // const handleDisLikes = () => {
  //   setDislikes(!isDisLikes)
  //   if(isLikes){
  //     setLikes(false)
  //   }
  // }

  return (
    <Box className="feedback_card" py="2%" w={{ xl:'100%',md:'60%',sm:'90%' }} h="100%" px="2%" bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" borderWidth="1px" borderRadius="md">
      <Flex alignItems="center">
        <Avatar ml="2%" mt="1%" size="md" src={avatarUrl} mr={4} />
        <Box w="90%">
          <Heading  size="md">{name}</Heading>
          <Flex alignItems="center">
            {Array.from({ length: rating }).map((_, index) => (
              <Icon key={index} as={FaStar} color="yellow.500" mr={1} />
            ))}
          </Flex>
        </Box>
        <Text  marginRight="5%" w="30%">{ days } days ago</Text>
      </Flex>
      <Text className="feedback_card_message" mt={4}>{message}</Text>
      {/* <div className="feedback_bottom">
            <Text mt={2} mr={2}>Helpful?</Text>
            <Button bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" mr="2%">
              { 
                likes ? <FaThumbsUp onClick={handleLikes} /> : <FaRegThumbsUp onClick={handleLikes}/>
              }
            </Button>
            <Button bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)">
            {
              disLikes ? <FaThumbsDown size={30} onClick={handleDisLikes}/> : <FaRegThumbsDown onClick={handleDisLikes}/>
            }
            </Button>
      </div> */}

      <div className="feedback_bottom">
            <Text>Helpful?</Text>
              <span className="bottom_pointer">
                { 
                  isLikes ? <FaThumbsUp size={30} color="blue"/> : <FaRegThumbsUp size={30} />
                }
              </span>
              <span className="bottom_pointer">
                {
                  isDisLikes ? <FaThumbsDown size={30} color="blue" /> : <FaRegThumbsDown size={30}/>
                }
              </span>
      </div>
    </Box>
  );
}

