import React, { useEffect, useState } from 'react'
import './style.css';
import Poster from '../Cards/Poster';
import { Link } from 'react-router-dom';
import m from './../../assets/images/bgone.jpeg'
import Cart from './carts/Cart';
import Loading from '../Loaders/Loading';
import PreLoader from '../Loaders/PreLoader';

const Product = () => {
    const [hidding, setHidding] = useState(true);
    const [loader, setLoader] = useState(false);
    const [view, setView] = useState(false);
    const animation = () => {
        let bg = document.querySelector(".banner_.showcase-full");
        window.onscroll = (e) => {
            bg.style.backgroundSize = `${100 + (window.pageYOffset * 100) / 80}%`;
            // console.log(`${window.pageYOffset}px`);
        }
    }
    useEffect(() => { animation(); }, []);
    const handleSubmit = () => {
        setLoader(true);
        setTimeout(() => {
            setHidding(true);
            setTimeout(() => {
                setView(false);
                setTimeout(() => {
                    setLoader(false);
                }, 1000);
            }, 1000);
        }, 2000);
    }
    return (
        <div>
            <PreLoader />
            <Cart hidding={hidding} setHidding={setHidding} setView={setView} view={view} />
            {/* <Search /> */}
            <div className="banner_ showcase-full" style={{
                backgroundImage: `url(${m})`,
                transition: '2s ease-in-out',
                backgroundAttachment: 'fixed'
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
                            <Link to={'/landingpage'} className='link primary2 capitalized'> Return Back</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-6 mt-5">
                        <div className="picture-slug">
                            <img src={m} alt="" style={{
                                objectFit:'cover',
                                borderRadius:'10px'
                            }} />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="text-left float-end ps-5">
                            <h1 className='grr  lrg text-monospace animation__animate animate__animated animate__fadeInLeft animate__delay-3s animate__slow txt-grad2' style={{
                                fontSize: 'xx-large'
                            }}>SAMSUMG S10</h1>
                            <div className="mini-text half animation__animate animate__animated animate__fadeInLeft animate__delay-4s animate__slow">
                                <span className="comment small" style={{
                                    fontFamily: 'poppins',
                                    fontWeight: 100
                                }}>Sell or Buy Products online in 100% Guaranteed Promo. Our Role is to bring trust to the ClientsSell or Buy Products online in 100% Guaranteed Promo. Our Role is to bring trust to the ClientsSell or Buy Products online in 100% Guaranteed Promo. Our Role is to bring trust to the ClientsSell or Buy Products online in 100% Guaranteed Promo. Our Role is to bring trust to the ClientsSell or Buy Products online in 100% Guaranteed Promo. Our Role is to bring trust to the ClientsSell or Buy Products online in 100% Guaranteed Promo. Our Role is to bring trust to the ClientsSell or Buy Products online in 100% Guaranteed Promo. Our Role is to bring trust to the Clients
                                </span>
                            </div>

                            {/* <div className="container"> */}
                            <div className="mt-3" style={{
                                position: 'relative',
                                justifyContent: 'end',
                                alignContent: 'end',
                                display: 'flex',
                                textAlign: 'end',
                                alignItems: 'end',
                                width: '100%'
                            }}>
                                <div className="incr_bx">
                                    <div className="">+</div>
                                    <div className="">0</div>
                                    <div className="">-</div>
                                </div>
                            </div>
                            {/* </div> */}
                            <div className="container">
                                <div className="grid">


                                    <div className="mt-2">

                                        <div className="button">
                                            <button className="btn btn-success p-2 m-1 bi bi-cart-fill"> Add to Cart</button>
                                            <button className="btn btn-dark p-2  bi bi-coin" style={{ marginRight: '-10px' }} onClick={() => setHidding(false)}>  Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <div className="container mt-5">
                    <div className="label-title mt-5 text-center">
                        <span>Related Products</span>
                    </div>
                    <div className="grid-flex mt-5">
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                    </div>
                </div>

            </div>

            {/* Modal Location and Contacts */}
            <div className={`m_location trans-50-50-abs ${!view ? 'animation__animate animate__animated animate__fadeOutUp' : 'animation__animate animate__animated animate__fadeIn'}`}>
                {
                    !loader ?

                        <div>
                            <div className="close" onClick={() => setView(false)}><i className="bi bi-x"></i></div>
                            <h3 className='text-center m-2 mb-4 mt-4'>Finish  Details</h3>
                            <div className="inputs">
                                <input type="text" placeholder='Full Name' style={{ width: '95%' }} />
                                <div className="flex">
                                    <input type="address" placeholder='Location' style={{ width: '60%' }} />
                                    <input type="text" placeholder='Contact' style={{ width: '100%' }} />
                                </div>
                                <div className="button mt-4">
                                    <button className="btn btn-primary p-3" style={{
                                        borderRadius: '50px'
                                    }} onClick={handleSubmit}> Done </button>
                                </div>
                            </div>
                        </div>
                        : <div className="w-100" style={{
                            left: '50%',
                            position: 'relative',
                            transform: 'translateX(-10%)'
                        }}>
                            <Loading />
                        </div>
                }
            </div>
        </div>
    )
}

export default Product