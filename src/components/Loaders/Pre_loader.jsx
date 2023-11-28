import React, { useEffect } from 'react';
import './style.css';
import jQuery from 'jquery';

const Pre_loader = () => {
    useEffect(() => {
        setTimeout(() => {
            jQuery(".Pre-loader").fadeOut({
                duration: 1000, 
                easing: 'linear'
            });
        }, 1500);
    }, [])
  return (
    <div className='Pre-loader'>
        <div className="trans-50-50-abs">
            <div className="load-container">
                <div className="load"></div>
            </div>
        </div>
    </div>
  )
}

export default Pre_loader