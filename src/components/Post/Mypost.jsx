import React,{ useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

import PostCard from './PostCard';

export default function Mypost() {

    const [posts, setPosts] = useState([]);

    const getFetchPosts = async() =>{

        await axios.get("http://localhost:8000/posts").then( (response) =>
            setPosts(response.data)
        )
    }

    useEffect( () =>{
        getFetchPosts();
    },[])
    

  return (
    <div>

        <Heading size="md" className="my_post_heading">My Post</Heading>

        { 
            posts.map( (post) => {
                return (
                    <Box key={post.id}>
                        <PostCard
                            name={post.name} 
                            profileimage={post.profile_image} 
                            description={ post.description } 
                            postimage={ post.post_image }
                            likes={ post.likes }
                            time={ post.time }
                            />
                    </Box>
                )
            })
        }

    </div>
  )
}
