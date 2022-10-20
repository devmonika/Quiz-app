import React from 'react';
import './BlogQues.css'
const BlogQues = ({blogques}) => {
    console.log(blogques);
    const {question, answer} = blogques;
    return (
        <div class="accordion-item shadow">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <p>{question}</p>
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                {answer}
                </div>
            </div>
        </div>
    );
};

export default BlogQues;