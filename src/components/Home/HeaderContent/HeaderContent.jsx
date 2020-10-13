import React from 'react';
import { Link } from 'react-router-dom';
import headerRightImg from '../../../images/headerRightImg.png';
import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <main className="container">
            <div className="row d-flex align-items-center" style={{height:"70vh"}}>
                <div className="col-md-5">
                    <h1 className="font-weight-bold" style={{color:" #3A4256"}}>Your New Smile <br/>Starts Here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quos illo omnis voluptatum nulla, delectus nemo nesciunt modi architecto quasi saepe eveniet dignissimos ipsum doloribus dolorum quia sit totam! Suscipit!</p>
                    <Link to="/appointment">
                        <button class="appointment-btn">GET APPOINTMENT</button>
                    </Link>
                </div>
                <div className="col-md-7">
                    <img src={headerRightImg} alt="" className="img-fluid"/>
                </div>
            </div>
        </main>
    );
};

export default HeaderContent;