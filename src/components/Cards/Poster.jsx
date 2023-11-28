import React from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import cardImg from './../../assets/images/boliviainteligente-7ROFZKdVyQ0-unsplash.jpg';
import { Link } from 'react-router-dom';

const Poster = () => {
    Aos.init({
      duration: 1500,
      easing:'ease-in-out'
    });
    return (
        <Link to={'/product/5'} className="card" data-aos='fade-up'>
            <img src={cardImg} className="card-img-top"/>
            <div className="card-body">
                <p className="card-text small text-end">SAMSUM S10 <br /> <span className="card-title bold">200$</span></p>
            </div>
        </Link>
    )
}

export default Poster