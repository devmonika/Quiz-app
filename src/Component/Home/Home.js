import React from 'react';
import img1 from '../../bg_0.png';
import Tutorials from '../Tutorials/Tutorials';
import './Home.css';
const Home = () => {
    return (
        <div className="wrapper position-relative overflow-hidden">
            <div className="container-md-fluid p-3 p-lg-0 me-5">
                <div className="row">
                    <div className="col-xl-4">
                    <div className="steps_area step_area_fixed d-none d-xl-block">
                        <div className="image_holder">
                            <img className="overflow-hidden" src={img1} alt="not-found"/>
                            
                        </div>
                        {/* <div className="step_items position-absolute">
                            <div className="step d-block text-center bg-white position-relative current active">1</div>
                            <div className="step d-block text-center bg-white position-relative">2
                            </div>
                            <div className="step d-block text-center bg-white position-relative">3
                            </div>
                            <div className="step d-block text-center bg-white position-relative last">4
                            </div>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-7 ps-5 pt-5">
                        <Tutorials></Tutorials>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;