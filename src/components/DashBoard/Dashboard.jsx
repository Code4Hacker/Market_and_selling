import React, { useEffect } from 'react'
import jQuery from 'jquery';
import './style.css';
import Search from '../Search/Search';
import Poster from '../Cards/Poster';
import { Link } from 'react-router-dom';
import Pre_loader from '../Loaders/Pre_loader';
import m from './../../assets/images/bgone.jpeg'

const Dashboard = () => {
  const animation  = () => {
    let bg = document.querySelector(".banner_.showcase");
    window.onscroll = (e) => {
      bg.style.backgroundSize = `${100 + (window.pageYOffset * 100) / 80 }%`;
      // console.log(`${window.pageYOffset}px`);
    }
  }

  useEffect(() => { animation(); }, []);
  return (
    <div>
      <Pre_loader />
      <Search />
      <div className="banner_ showcase" style={{
        backgroundImage: `url(${m})`,
        transition:'2s ease-in-out',
        backgroundAttachment:'fixed'
      }}>
        <div className="fill-shadow">
          <div className="m-5">
            <div className="text-left float-end">
              <h1 className='grr  lrg text-monospace animation__animate animate__animated animate__fadeInLeft animate__delay-3s animate__slow txt-grad2'>THE GEMINI MARKET <br /> ONLINE. RECEIVE BETTER</h1>
              <div className="mini-text half animation__animate animate__animated animate__fadeInLeft animate__delay-4s animate__slow">
                <span className="comment">
                  Sell or Buy Products online in <br /> 100% Guaranteed Promo. Our <br /> Role is to bring trust to the Clients
                </span>
              </div>
            </div>
          </div>
          <div className="float-start w-100 container">
            <div className="button animation__animate animate__animated animate__fadeInRight animate__delay-3s animate__slow">
              <button className='primary2 capitalized'>Categories</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mini-filter row">
          <div className="bg-grr col-2"> Categories</div>
          <div className="col-10 align-end">
            <ul className="">
              <li>all</li>
              <li>clothes</li>
              <li>shoes</li>
              <li>laptops</li>
              <li>phones</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="label-title mt-5">
            <span>PHONES</span>
          </div>
          <div className="grid-flex mt-5">
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
          </div>
          <div className="btn-center mt-4 mb-4">
            <Link className="bg-link">more</Link>
          </div>
        </div>
        <div className="container">
          <div className="label-title mt-5">
            <span>PHONES</span>
          </div>
          <div className="grid-flex mt-5">
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
          </div>
          <div className="btn-center mt-4 mb-4">
            <Link className="bg-link">more</Link>
          </div>
        </div>
        <div className="container">
          <div className="label-title mt-5">
            <span>PHONES</span>
          </div>
          <div className="grid-flex mt-5">
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
          </div>
          <div className="btn-center mt-4 mb-4">
            <Link className="bg-link">more</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard