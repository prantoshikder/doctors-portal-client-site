import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="appointment">
            <div className="make-appointment">
                <div className="appointment-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={doctor} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-md-7 mt-5 align-items-center">
                                <div className="appointment-content text-white">
                                    <h5 className="text-primary">APPOINTMENT</h5>
                                    <h2 className="">Make an appointment <br/> Today</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia eius sequi? Aperiam, rerum commodi?</p>
                                    <button className="makeAppointment-btn">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;