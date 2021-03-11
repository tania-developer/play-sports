import React from 'react';
import img from '../../images/banner.png';
import './Banner.css';

const Banner = () => {
    
    return (
        <div className='banner'>
            <img src={img} alt=""/>
            <div className="center">Play Sports</div>
        </div>
    );
};

export default Banner;