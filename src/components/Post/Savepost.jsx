import React,{ useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';

import PostCard from './PostCard';

export default function Savepost() {

    const [savePosts, setSavePosts] = useState([]);

    const getFetchPosts = async() =>{

        await axios.get("http://localhost:8000/saveposts").then( (response) =>
            setSavePosts(response.data)
        )
    }

    useEffect( () =>{
        getFetchPosts();
    },[])

  return (
    <div>

        { 
            savePosts.map( (post) => {
                return (
                    <Box key={post.id}>
                        <PostCard
                            name={post.name} 
                            profileimage={post.profile_image} 
                            description={ post.description } 
                            postimage={ post.post_image }
                            likes={ post.likes }
                            />
                    </Box>
                )
            })
        }

    </div>
  )
}
