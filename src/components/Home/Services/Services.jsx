import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';


const serviceData = [
    {
        image: 'https://img.techpowerup.org/201009/001-dental.png',
        title: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quasi cumque reprehenderit minus eveniet illo.'
    },
    {
        image: 'https://img.techpowerup.org/201009/tooth-1.png',
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quasi cumque reprehenderit minus eveniet illo.'
    },
    {
        image: 'https://img.techpowerup.org/201009/tooth.png',
        title: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quasi cumque reprehenderit minus eveniet illo.'
    }
];


const Services = () => {
    return (
        <section className="mt-5 mb-5">
            <div className="services-content text-center">
                <span className="font-weight-bold" style={{color: '#1CC7C1'}}>OUR SERVICES</span>
                <h2 className="font-weight-bold" style={{color: '#3A4256'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-3 w-75">
                    {
                    serviceData.map(serviceData => <ServicesCard serviceData={serviceData}></ServicesCard>) 
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;