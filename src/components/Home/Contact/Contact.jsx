import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-part mt-5 pt-5 pb-5">
            <div className="container">
                <div className="contact-header text-center text-white mb-5">
                    <h4 className="font-weight-bold" style={{color: '#1CC7C1'}}>Contact</h4>
                    <h1 className="font-weight-bold">Always  connect with us</h1>
            </div>
                <div className="contact-form col-md-9 mx-auto justify-content-center">
                    <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" id="" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" id="" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" rows="5" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="contact-btn"> Submit </button>
                       </div>
                   </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;