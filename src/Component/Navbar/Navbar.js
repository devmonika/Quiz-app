import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light shadow-lg ">
            <div class="container-fluid sticky">
                <a class="navbar-brand fw-bold" href="/"> <p>IQ-Shake</p> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/statistics">Chart</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/blog">Blog</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;





