import React from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const doctorsData = [
    {
        image: 'https://img.techpowerup.org/201010/doctor.png',
        name: 'Dr. Caudi',
        phone: '+61 452 200 126'
    },
    {
        image: 'https://img.techpowerup.org/201010/doctor.png',
        name: 'Dr. Caudi',
        phone: '+61 452 200 126'
    },
    {
        image: 'https://img.techpowerup.org/201010/doctor.png',
        name: 'Dr. Caudi',
        phone: '+61 452 200 126'
    }
];

const Doctors = () => {
    return (
        <div className="doctors-part mt-5 mb-5">
            <div className="doctorsCard">
                <div className="container">
                    <div className="doctors-heading">
                        <h2 className="font-weight-bold text-center" style={{color: '#1CC7C1'}}>Our Doctors</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row w-75">
                        {
                            doctorsData.map(doctorsData => <DoctorsCard doctorsData={doctorsData}></DoctorsCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;