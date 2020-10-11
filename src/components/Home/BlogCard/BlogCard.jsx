import React from 'react';
import './BlogCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const BlogCard = ({blogsData}) => {
    return (
        <div className="col-md-4 pt-1">
            <div className="blogs-Card">
                <div className="blog-card">
                    <div className="blog-profile mr-5 d-flex align-items-center justify-content-center">
                        <div className="profile-img">
                            <img src={blogsData.image} height="65px" style={{marginRight:"25px"}} alt="profile"/>
                        </div>
                        <div className="profile-name">
                            <h5>{blogsData.name}</h5>
                            <p>{blogsData.date}</p>
                        </div>
                    </div>
                    <div className="blog-content">
                        <h4>{blogsData.title}</h4>
                        <p className="text-secondary">{blogsData.description}</p>
                    </div>
                </div>
                <div className="blog-overlay">
                    <div className="text">
                        <h5 className="font-weight-bold text-white">{blogsData.name}</h5>
                        <p className="text-white">{blogsData.date}</p>
                        <h4 className="font-weight-bold text-white">{blogsData.title}</h4>
                        <div className="blog-icon text-white">
                            <FontAwesomeIcon icon={faLongArrowAltRight}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;