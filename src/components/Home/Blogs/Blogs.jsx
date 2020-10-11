import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const blogsData=[
    {
        image: 'https://img.techpowerup.org/201010/ellipse-1.png',
        name: 'Rashed Kabir',
        date: '15 January, 2020',
        title: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot layout. The point...'
    },
    {
        image: 'https://img.techpowerup.org/201010/ellipse-2.png',
        name: 'Dr. Caudi',
        date: '15 January, 2020',
        title: '2 times of brush in a day can keep your healthy',
        description: 'It is a long established fact that by the readable content of a lot layout. The point...'
    },
    {
        image: 'https://img.techpowerup.org/201010/ellipse-3.png',
        name: 'Dr. Jhon Mitchel',
        date: '15 January, 2020',
        title: 'The tooth cancer is taking a challenge',
        description: 'It is a long established fact that by the readable content of a lot layout. The point...'
    }
]

const Blogs = () => {
    return (
        <div className="blog-part mt-5 mb-5">
            <div className="blogCard">
                <div className="container">
                    <div className="blog-heading text-center">
                        <h4 className="font-weight-bold text-uppercase" style={{color: '#1CC7C1', fontSize:'25px', lineHeight:"50px"}}>OUR BLOG</h4>
                        <h2 className="font-weight-bold">From Our Blog News</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            blogsData.map(blogsData => <BlogCard blogsData={blogsData}></BlogCard>) 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;