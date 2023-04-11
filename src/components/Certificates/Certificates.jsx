import React from 'react';
import { Heading, Input, Text } from '@chakra-ui/react';

import './Certificates.css';


export default function Certificates() {
  return (
    <div className='certificates_background'>
        <div className='sidebar_section'>

        </div>
        <div className='certificates_section'>
            <Heading className='certificates_heading' size="md">Certificates</Heading>

            <div className='certificates_input_div'>
                <Input className='certificates_input' bg="linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)" placeholder="Search Certificates"/>
            </div>
        
            <div className='empty_certificates_div'>
                <Text>You don't have any certificates</Text>
                <Text>Keep participating</Text>
                <div className='explore_opportunities_div'>
                    <Text>Explore opportunities</Text>
                </div>
            </div>
        
        </div>
    </div>
  )
}
