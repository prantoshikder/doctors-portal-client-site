import React from 'react';
import featureImage from '../../../images/featureImage.png';
import './FeaturedService.css'

const FeaturedService = () => {
    return (
        <section className="feature-part pt-5 mb-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-5 m-md-0">
                        <img src={featureImage} className="img-fluid" alt="featureImage"/>
                    </div>
                    <div className="col-md-7 align-item-center">
                        <div className="feature-content ml-5">
                            <h2 className="font-weight-bold mt-5" style={{color: '#3A4256', lineHeight: '40px'}}>Exceptional Dental <br/> Care, On Your Term</h2>
                            <p className="text-secondary pt-4" style={{lineHeight:'30px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit at iusto qui modi, mollitia labore ipsum esse, aut earum a quasi fugit vel facilis, consequuntur adipisci. Eius asperiores, tempore modi animi velit corporis minus magni culpa ut delectus veritatis, quasi maxime sint libero placeat deleniti qui dolore? Aspernatur commodi aliquid a inventore sequi nisi hic, doloribus ullam architecto, corporis reiciendis quos fuga, soluta dolorem. Sint sit nulla voluptatum incidunt nobis?</p>
                            <button className="feature-btn mt-5">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;