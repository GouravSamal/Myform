import React,{ useState, useEffect } from 'react';
import axios from "axios";
import QuizCard from './QuizCard';

export default function QuizSection() {

    const [quizzes,setQuizzes] = useState([]);

    const getQuiz = async () => {
        await axios.get(" http://localhost:8000/quiz").then( (response) => setQuizzes(response.data) ) 
    }



    useEffect(()=>{
        getQuiz();
    },[])

    return (
        <div>
            {
                quizzes.map( (quiz) => {
                    return (
                        <div key={quiz.quiz_id}>
                            <QuizCard title={quiz.title} description={quiz.description} image={quiz.image} />
                        </div>
                    )
                } )
            }
        </div>
  )
}
