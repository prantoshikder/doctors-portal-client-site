import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './AppointmentHeader.css';
import headerRightImg from '../../../images/headerRightImg.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <div className="AppointmentHeader-part">
            <Navbar></Navbar>
            <main className="container">
                <div className="row d-flex align-items-center" style={{height:"70vh"}}>
                    <div className="col-md-5">
                        <h1 className="font-weight-bold" style={{color:" #3A4256"}}>APPOINTMENT</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-7">
                        <img src={headerRightImg} alt="" className="img-fluid"/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;