import React from 'react';
import './Navbar.css';
import logo from '../../../images/dental.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="top-menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/">
                        <a className="navbar-brand" href="#"><img src={logo} height="65px" alt=""/></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/home">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </Link>
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
        </section>
    );
};

export default Navbar;