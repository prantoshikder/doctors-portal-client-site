import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './DoctorsCard.css';

const DoctorsCard = ({doctorsData}) => {
    return (
        <div className="col-md-4 mt-3">
            <div className="doctors-card align-items-center">
                <img src={doctorsData.image} height="300px" className="text-center" alt=""/>
                <div className="doctors-profile">
                    <h4 className="font-weight-bold mt-1">{doctorsData.name}</h4>
                    <div className="icon-phoneNumber d-flex">
                        <FontAwesomeIcon style={{color: '#1CC7C1', marginRight:"8px", marginTop:"5px"}} icon={faPhoneAlt}/>
                        <p>{doctorsData.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;