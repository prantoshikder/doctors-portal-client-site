import React from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-part">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
            <DoctorInfo></DoctorInfo>
        </div>
    );
};

export default Header;