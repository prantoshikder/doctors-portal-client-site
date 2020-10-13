import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookingAppointment date={selectedDate}></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;