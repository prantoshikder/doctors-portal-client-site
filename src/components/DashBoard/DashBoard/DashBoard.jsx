import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../SideBar/SideBar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100vh'
}

const DashBoard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date);
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentsByDate', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({date: selectedDate})
    //     })
    //     .then(res => res.json())
    //     .then(data => setAppointments(data))
    // },[selectedDate])
    // console.log(selectedDate);

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5 justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;