import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Quiz from '../Quiz/Quiz';
import './Tutorials.css'
const Tutorials = () => {
    const [quizs, setQuiz] = useState([]);
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then((res) => res.json())
        .then((data)=> setQuiz(data.data))
    },[])

   
        
        
    return (
        <div className="multisteps_form_panel">
            <p>Test Your Expertise</p>
            <div className="step_content d-flex justify-content-start pt-5 pb-2">
            
            <h1>QUIZ</h1>
            </div>
            <div className='quiz-container'>
                {
                    quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
            
            
        </div>
    );
};

export default Tutorials;