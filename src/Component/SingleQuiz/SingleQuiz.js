import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const SingleQuiz = () => {
    const singleQuiz = useLoaderData();
    const {name, logo, total, id, questions} = singleQuiz.data;
    return (
        <div class="multisteps_form_panel">
            <h1>{name}</h1>
            {
                questions.map(question => <Question questionList={question}></Question>)
            }
        </div>
    );
};

export default SingleQuiz;