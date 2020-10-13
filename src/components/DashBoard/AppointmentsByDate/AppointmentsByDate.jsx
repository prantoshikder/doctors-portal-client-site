import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1>Appointments: {appointments.length}</h1>
            {
                appointments.map(appointments => <li key={appointments._id}>{appointments.name} {appointments.email}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;