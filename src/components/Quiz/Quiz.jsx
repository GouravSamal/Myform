import React from 'react';
import { 
  Box,
  Flex
} from '@chakra-ui/react';
import QuizSection from './QuizSection';

export default function Quiz() {
  return (
    <Flex>

      <Box w="100%" borderWidth={1}>
        <QuizSection/>
      </Box>
    </Flex>
  )
}
