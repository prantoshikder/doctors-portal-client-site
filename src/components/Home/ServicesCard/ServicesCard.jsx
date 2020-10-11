import React from 'react';
import './ServicesCard.css'

const ServicesCard = ({serviceData}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="serviceCard">
                <div className="service-img m-4">
                    <img src={serviceData.image} height="70px" alt=""/>
                </div>
                <div className="card-content">
                    <h5 className="font-weight-bold">{serviceData.title}</h5>
                    <p className="text-secondary">{serviceData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;