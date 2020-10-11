import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="top-menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dental Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;