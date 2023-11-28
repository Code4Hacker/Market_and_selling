import React, { useState } from 'react'
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import bgone from './../../assets/images/bgone.jpeg';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Loaders/Loading';

const Login = () => {
  const [sigining, setSigning] = useState("login");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    toast.success("Validation Mode");
    setLoading(true);
    setTimeout(() => {
      navigate('/landingpage');
      setLoading(false);
    }, 3000);
  }
  return (
    <div className="">
      <Toaster
      />
      <div className="login">
        <div className="" style={{
          backgroundImage: `url(${bgone})`,
          backgroundSize: 'cover',
        }}>
          <div className='row blur'>
            <div className="col-md-5">
            </div>
            {
              sigining === "login" ?

                <div className="col-md-7 grid grid animation__animate animate__animated animate__fadeInDown animate__duration-5s">
                  {
                    loading ? <Loading /> :
                      <div className="body_reg">
                        <div className="title mt-2">
                          <h2>Sign In</h2>
                        </div>
                        <div className="inputs">
                          <input type="text" placeholder='Username' />
                          <input type="password" placeholder='Password' />
                          <button className='primary w-100' style={{
                            margin: '10px',
                            borderRadius: '50px'
                          }} onClick={handleLogin}>Login</button>
                          <div className="remember_me mt-2">
                            <input type="checkbox" name="" id="" /> Remember Me
                          </div>
                          <div className="msg">
                            <p className='mt-4'>I don’t have an Account. <span className='link' onClick={() => setSigning("signup")}>Create One</span>.</p>
                            <p className='mt-1'><span className='link' style={{ fontSize: '15px' }} onClick={() => setSigning("forget")}>Forget Password ?</span></p>
                          </div>
                          <div className="icons mt-3">
                            <a href='#'><i className="bi bi-github"></i></a>
                            <a href='#'><i className="bi bi-instagram"></i></a>
                            <a href='#'><i className="bi bi-linkedin"></i></a>
                            <a href='#'><i className="bi bi-youtube"></i></a>
                            <a href='#'><i className="bi bi-pinterest"></i></a>
                          </div>
                        </div>
                      </div>
                  }
                </div> : sigining === "signup" ?

                  <div className="col-md-7 grid animation__animate animate__animated animate__fadeInRight animate__duration-5s">
                    {
                      loading ? <Loading /> :
                        <div className="body_reg">
                          <div className="title mt-2">
                            <h2>Sign Up</h2>
                          </div>
                          <div className="inputs">
                            <input type="text" placeholder='Username' />
                            <input type="email" placeholder='Write Email' />
                            <input type="password" placeholder='Password' />
                            <button className='primary w-100' style={{
                              margin: '10px',
                              borderRadius: '50px'
                            }}>REGISTER</button>
                            <div className="remember_me mt-2">
                              <input type="checkbox" name="" id="" /> By  Click this you have agreed with our <a href="" className="link">Terms and Conditions</a>
                            </div>
                            <div className="msg">
                              <p className='mt-4'>I have an Account. <span className='link' onClick={() => setSigning("login")}>Sign In</span>.</p>
                            </div>
                            <div className="icons mt-3">
                              <a href='#'><i className="bi bi-github"></i></a>
                              <a href='#'><i className="bi bi-instagram"></i></a>
                              <a href='#'><i className="bi bi-linkedin"></i></a>
                              <a href='#'><i className="bi bi-youtube"></i></a>
                              <a href='#'><i className="bi bi-pinterest"></i></a>
                            </div>
                          </div>
                        </div>
                    }
                  </div> : sigining === "forget" ?

                    <div className="col-md-7 grid animation__animate animate__animated animate__fadeInRight animate__duration-5s">
                      {
                        loading ? <Loading /> :
                          <div className="body_reg">
                            <div className="title mt-2">
                              <h2>Forget </h2>
                            </div>
                            <div className="inputs">
                              <input type="email" placeholder='Write Email' />
                              <button className='primary w-100' style={{
                                margin: '10px',
                                borderRadius: '50px'
                              }}>SEND TO EMAIL</button>
                              <div className="remember_me mt-2">
                                {/* <input type="checkbox" name="" id="" /> By  Click this you have agreed with our <a href="" className="link">Terms and Conditions</a> */}
                              </div>
                              <div className="msg">
                                <p className='mt-4'>Remember it. <span className='link' onClick={() => setSigning("login")}>  Return Back</span>.</p>
                              </div>
                              <div className="icons mt-3">
                                <a href='#'><i className="bi bi-github"></i></a>
                                <a href='#'><i className="bi bi-instagram"></i></a>
                                <a href='#'><i className="bi bi-linkedin"></i></a>
                                <a href='#'><i className="bi bi-youtube"></i></a>
                                <a href='#'><i className="bi bi-pinterest"></i></a>
                              </div>
                            </div>
                          </div>
                      }
                    </div> :

                    <div className="col-md-7 grid grid animation__animate animate__animated animate__fadeInUp animate__duration-5s">
                      Loading ...
                    </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;