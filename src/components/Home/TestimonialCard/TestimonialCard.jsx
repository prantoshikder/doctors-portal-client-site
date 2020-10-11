import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({testimonialData}) => {
    return (
        <div className="col-md-4 mt-3">
            <div className="testCard">
                <div className="test-content mt-3 text-center">
                    <p className="text-secondary">{testimonialData.description}</p>
                </div>
                <div className="test-profile mt-5 d-flex">
                    <img src={testimonialData.image} height="80px" style={{margin:"15px"}} alt=""/>
                    <div className="profileName mt-4 text-center">
                        <h5 className="font-weight-bold" style={{color:"#1CC7C1"}}>{testimonialData.title}</h5>
                        <h5 className="text-secondary">{testimonialData.placeName}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;