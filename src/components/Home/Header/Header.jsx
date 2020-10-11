import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import HeaderContent from '../HeaderContent/HeaderContent';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Header.css';

const Header = () => {
    return (
        <div className="header-part">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
            <DoctorInfo></DoctorInfo>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;