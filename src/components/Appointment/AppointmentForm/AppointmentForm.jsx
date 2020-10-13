import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        borderRadius: '25px',
        boxShadow: '0px 0px 30px #3A4256',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully');
            }
        })
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="font-weight-bold text-center pt-3" style={{ color: '#1CC7C1' }}>{appointmentOn}</h2>
                <p className="font-weight-bold text-center">On {date.toDateString()}</p>
                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} autoComplete="off" name="name" placeholder="Your Name" className="form-control" required />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} autoComplete="off" name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} autoComplete="off" name="email" placeholder="Your Email Address" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="date" ref={register({ required: true })} >
                            <option disabled={true} value="Not Selected">Select Time</option>
                            <option value="8:00 AM - 9:00 PM">8:00 AM - 9:00 PM</option>
                            <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
                            <option value="4:00 PM - 7:00 PM">4:00 PM - 7:00 PM</option>
                            <option value="7:00 PM - 9:00 PM">7:00 PM - 9:00 PM</option>
                            <option value="5:00 AM - 9:00 PM">5:00 AM - 9:00 PM</option>
                            <option value="11:00 AM - 5:00 PM">11:00 AM - 5:00 PM</option>
                        </select>
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not Selected">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input ref={register({ required: true })} name="weight" autoComplete="off" placeholder="Weight" className="form-control" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input ref={register({ required: true })} name="age" autoComplete="off" placeholder="Age" className="form-control" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <button className="form-btn font-weight-bold" type="submit">SEND</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;