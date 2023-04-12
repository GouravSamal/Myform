import React, { useState, useEffect } from 'react';
import axios from "axios";
import { SimpleGrid, Text, Button, Center } from '@chakra-ui/react';
import "./FeedbackSection.css";
import { Heading } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

import FeedbackCard from './FeedbackCard';

export default function FeedbackSection() {

    const [feedbacks, setFeedbacks] = useState([]);
    const [showMoreCards, setShowMoreCards] = useState(false);

    const getFeedbacks = async () => {
        await axios.get(" http://localhost:8000/feedbacks").then((response) => setFeedbacks(response.data))
    }



    useEffect(() => {
        getFeedbacks();
    }, [])

    return (
        <div className='feedback_container'>
            <div className="course_description">
                <Text> React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with the user interface and rendering components to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality </Text>
            </div>

            <div className="feedback_sections">

                <div className='feedback_sections_heading'>
                    <span disp>
                        <AiFillStar color="yellow" size={30} />
                    </span>
                    <Heading size="md" ml="1%" mb="2%">4.3 course rating 19K ratings</Heading>
                </div>

                <SimpleGrid columns={{ md: '3', sm: '1' }} spacingX='40px' spacingY='20px'>

                    {
                        showMoreCards ?
                                feedbacks.slice(0, 3).map((feedback) => {
                                    return (

                                        <FeedbackCard
                                            avatarUrl={feedback.image}
                                            name={feedback.name}
                                            rating={feedback.rating}
                                            message={feedback.message}
                                            days={feedback.days}
                                            likes={feedback.likes}
                                            dislikes={feedback.dislikes}
                                        />
                                    )
                                })
                            :

                            feedbacks.map((feedback) => {
                            return (

                                <FeedbackCard
                                    avatarUrl={feedback.image}
                                    name={feedback.name}
                                    rating={feedback.rating}
                                    message={feedback.message}
                                    days={feedback.days}
                                    likes={feedback.likes}
                                    dislikes={feedback.dislikes}
                                />
                            )
                        })
                        
                    }

                    {/* {
                        feedbacks.map((feedback) => {
                            return (

                                <FeedbackCard
                                    avatarUrl={feedback.image}
                                    name={feedback.name}
                                    rating={feedback.rating}
                                    message={feedback.message}
                                    days={feedback.days}
                                    likes={feedback.likes}
                                    dislikes={feedback.dislikes}
                                />
                            )
                        })
                    } */}

                </SimpleGrid>

            </div>

            <Center>
                {
                    !showMoreCards ?  <Button bg="black" px={10} borderWidth={1} mt={10} onClick={ () => setShowMoreCards(!showMoreCards) }>Show less reviews</Button>
                    :  <Button bg="black" px={10} borderWidth={1} mt={10} onClick={ () => setShowMoreCards(!showMoreCards) }>Show more reviews</Button>
                }
                
            </Center>
        </div>
    )
}

