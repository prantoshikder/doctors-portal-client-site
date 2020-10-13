import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css'
const BookingCard = ({bookingData, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mt-3">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="font-weight-bold">{bookingData.subject}</h5>
                    <h6>{bookingData.visitingHour}</h6>
                    <p>{bookingData.totalSpaces}</p>
                    <button onClick={openModal} className="book-btn font-weight-bold">BOOK APPOINTMENT</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} date={date} appointmentOn={bookingData.subject} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;