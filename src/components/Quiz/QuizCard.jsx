import React from 'react';
import { Image, Heading, Text, Button } from '@chakra-ui/react';

export default function QuizCard( { title, description, image } ) {
  
    const handleClick = () => {
        console.log("Handle Click")
    }

    return (
    <div className='quiz_card'>
      
      <div className='quiz_image_section'>
        <Image src={image} className='quiz_image'/>
      </div>

      <div className='quiz_info'>

        <Heading size="md" className='quiz_heading'>{ title }</Heading>

        <Text className='quiz_description'> { description } </Text>

      </div>

      <div className='quiz_bottom'>
        <Button onClick={ handleClick  } > Take the test </Button>
      </div>

    </div>
  )
}
