import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:00 AM - 1:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '4:00 PM - 7:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 PM - 9:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 5,
        subject: 'Complete exams',
        visitingHour: '5:00 AM - 9:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 6,
        subject: 'placement and restoration',
        visitingHour: '11:00 AM - 5:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    }
];

const BookingAppointment = ({date}) => {
    return (
        <section className="mt-5 mb-5">
            <h2 className="text-center font-weight-bold" style={{color: '#1CC7C1'}}>Available Appointments on {date.toDateString()}</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        bookingData.map(bookingData => <BookingCard key={bookingData.id} date={date} bookingData={bookingData}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingAppointment;