import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeOpen = () => {
  // const [popArt, setPopArt] = useState("Market");
  // setTimeout(() => {setPopArt("SELL")}, 3000);
  return (
    <div className='homeland'>
      <div className="bubble-animated" style={{ zIndex: '1' }}>
        <div className="fillme">
          <div className="container">
            <div className="banner">
              <div className="banner_header">
                <h1 className='animation__animate animate__animated animate__fadeInUp box_notify'> The Gemini <span className='txt-grad' style={{ color: 'black' }}> Market </span> Online. RECEIVE  BETTER</h1>
                <div className="animation__animate animate__animated animate__fadeInUp  animate__delay-5s">
                  <span className='mini-txt'> Sell or Buy Products online in 100% Guaranteed Promo. Our Role is to  bring trust to the Clients</span>
                </div>
                <div className="button mt-5 pt-5 pb-5">
                  <Link to={'/sign_'} className='bi bi-stack primary btn-success'> Start  Exploring</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bubble-animated">
      </div> */}
      <div className="container">
        <div className="banner">
          <div className="banner_header">
            <h1 className='animation__animate animate__animated animate__fadeInUp box_notify'> The Gemini <span className='txt-grad box-txt '> MARKET </span> Online. RECEIVE  BETTER</h1>
            <span className='mini-txt'> Sell or Buy Products online in 100% Guaranteed Promo. Our Role is to  bring trust to the Clients</span>
          </div>
          <div className="button mt-5 pt-5 pb-5">
            <Link to={'/sign_'} className='bi bi-stack primary'> Start  Exploring</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeOpen;