import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Testimonials.css';

const testimonialData =[
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, vitae cumque molestias veritatis nesciunt, quod error  nihil atque odit labore ducimus perspiciatis. Doloribus, nisi incidunt!',
        image: 'https://img.techpowerup.org/201010/ellipse-1.png',
        title: 'Winson Herry',
        placeName: 'California'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, vitae cumque molestias veritatis nesciunt, quod error  nihil atque odit labore ducimus perspiciatis. Doloribus, nisi incidunt!',
        image: 'https://img.techpowerup.org/201010/ellipse-2.png',
        title: 'Winson Herry',
        placeName: 'California'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, vitae cumque molestias veritatis nesciunt, quod error  nihil atque odit labore ducimus perspiciatis. Doloribus, nisi incidunt!',
        image: 'https://img.techpowerup.org/201010/ellipse-3.png',
        title: 'Winson Herry',
        placeName: 'California'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials mt-5 mb-5">
            <div className="container">
                <div className="test-heading d-flex justify-content-between">
                    <div className="test-content">
                        <h5 className="font-weight-bold text-uppercase" style={{color: '#1CC7C1', fontSize:'25px', lineHeight:"50px"}}>Testimonial</h5>
                        <h2 className="font-weight-bold">What's Our Patients <br/> Says</h2>
                    </div>
                    <div className="test-icon">
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-3 w-75">
                    {
                        testimonialData.map(testimonialData => <TestimonialCard testimonialData={testimonialData}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;