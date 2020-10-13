import React from 'react';
import { Link } from 'react-router-dom';

const FooterCols = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="font-weight-bold" style={{color: '#1CC7C1', fontSize: '17px'}}>{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unStyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCols;