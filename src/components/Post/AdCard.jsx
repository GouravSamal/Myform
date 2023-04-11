import React from 'react';
import { Image, Text } from '@chakra-ui/react'

export default function AdCard({ image, description }) {
    return (
        <div className='adCard'>
            <Image className='ad_image'
                src={image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <Text>
                {description}
            </Text>
        </div>
    )
}
