import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './Question.css'
const Question = ({questionList}) => {
    // console.log(question);
    const {question, options, correctAnswer, id} = questionList;
    function popUpToast(option, rightAns){
            if (option === rightAns) {
                toast.success('You are correct!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
            else {
                toast.error('You are wrong!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }
     const viewAns = event => {
        toast.info(correctAnswer, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        };

    
    return (
        <div>
            
            <div class="form_content">
                        <div class="question_title py-5 d-flex align-items-center justify-content-between">
                           <h1 class="text-capitalize">{question?.slice(3,-4)}</h1> 
                           <span onClick={()=>viewAns()}><FontAwesomeIcon icon={faEye} /></span>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex justify-content-center">
                           <div class="col-lg-4">

                              <ul className='options'>
                                {
                                    options.map(option => <li className='' onClick={()=>popUpToast(option, correctAnswer)}> {option}</li>)
                                    
                                }
                                <ToastContainer />
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div>
        
        
      </div>  
        </div>
    );
};

export default Question;