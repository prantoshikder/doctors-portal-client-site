import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are 7 Days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+100 123 456789',
        icon: faPhoneAlt,
        background: 'primary'
    }
];

const DoctorInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(infoData => <InfoCard infoData={infoData}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default DoctorInfo;