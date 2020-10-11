import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({infoData}) => {
    return (
        <div className="col-md-4">
            <div className={`d-flex infoData-${infoData.background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="infoData-icon" icon={infoData.icon}/>
                </div>
                <div>
                    <h6>{infoData.title}</h6>
                    <small>{infoData.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;