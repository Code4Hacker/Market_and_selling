import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import bgone from './../../assets/images/bgone.jpeg';

const Login = () => {
  return (
    <div className="login">
      <div className="" style={{
        backgroundImage:`url(${bgone})`,
        backgroundSize:'cover',
      }}>
      <div className='row blur'>
        <div className="col-md-5">
        </div>
        <div className="col-md-7 grid">
          <div className="body_reg">
            <div className="title mt-2">
              <h2>Sign In</h2>
            </div>
            <div className="inputs">
              <input type="text" placeholder='Username'/>
              <input type="text" placeholder='Password'/>
              <button className='primary w-50'>Login</button>
              <div className="remember_me mt-2">
                <input type="checkbox" name="" id="" /> Remember Me
              </div>
              <div className="msg">
                <p className='mt-4'>I don’t have an Account. <Link to={'/creator'} className='link'>Create One</Link>.</p>
                <p className='mt-1'><Link to={'/creator'} className='link' style={{fontSize:'15px'}}>Forget Password ?</Link></p>
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
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login;