import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogQues from '../BlogQues/BlogQues';

const Blog = () => {
    const blog = useLoaderData();
    console.log(blog);
    // const {question, answer} = blog;

    return (
        <div>
            <h1 className='my-5'>Some FAQs & Answer</h1>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <div class="accordion col-lg-6 shadow-lg border" id="accordionExample">
                    {blog.map(blogques => <BlogQues blogques={blogques}></BlogQues>)}
                
                </div>
            </div>
        </div>
    );
};

export default Blog;