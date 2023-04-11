import React,{ useState } from 'react';
import { Card, div, Image, Avatar, Button } from '@chakra-ui/react';
import { Stack, Text, Box, Heading } from '@chakra-ui/react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

import './post.css';

export default function PostCard(props) {

    const { name, profileimage, description, postimage, likes, time } = props;

    const [ countlikes, setCountlikes ] = useState(parseInt(likes));
    const [ checklikes, setChecklikes ] = useState(false)
    const [ checksave, setChecksave ] = useState(false)

    const handleLikes = () => {

        if(!checklikes){
            setCountlikes(countlikes+1)
        }
        else{
            setCountlikes(countlikes-1)
        } 
        setChecklikes(!checklikes)
    }

    const handleSave = () => {
        setChecksave(!checksave)
    }

    return (
        <div>
            <div className='post_container'>
                <div>
                    <Stack mt='6' spacing='3' >
                        <div className='plot_topinfo'>
                            <Avatar
                                className='profileimage'
                                src={profileimage}
                                alt='profile_image'
                            />
                            <div>
                                <Heading size='sm' mt="2%" ml="2%" w="100%">{ name }</Heading>
                                <Text size='xs' mt="2%" ml="2%" w="100%">{ time }</Text>
                            </div>
                        </div>
                        <Text>
                            {description}
                        </Text>
                    </Stack>
                    <Image
                        w="80%"
                        m="auto"
                        mt="3%"
                        src={ postimage }
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <div className='postcard_footer'>
                        <button className='icons' onClick = { handleSave } >
                            { checksave ? 
                                <BsFillBookmarkFill size={40}/> :
                                <BsBookmark size={40}/> 
                            }
                        </button>

                        <button style={{ display:"flex" }} className='icons'  onClick= { handleLikes }>
                            { checklikes ?  
                                <AiFillHeart size={40}/> :
                                <AiOutlineHeart size={40}/> 
                            }
                            <Text>{ countlikes }</Text>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
