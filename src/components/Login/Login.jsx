import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import bgone from './../../assets/images/bgone.jpeg';

const Login = () => {
  return (
    <div className="login">
      <div className='row' style={{
        backgroundImage:`url(${bgone})`,
        backgroundSize:'cover',
      }}>
        <div className="col-md-6">
        </div>
        <div className="col-md-6 grid">
          <div className="body_reg">
            <div className="title">
              <h2>Sign In</h2>
            </div>
            <div className="inputs">
              <input type="text" placeholder='Username'/>
              <input type="text" placeholder='Password'/>
              <div className="remember_me mt-2">
                <input type="checkbox" name="" id="" /> Remember Me
              </div>
              <div className="msg">
                <p className='mt-4'>I don’t have an Account. <Link to={'/creator'} className='link'>Create One</Link>.</p>
                <p className='mt-1'><Link to={'/creator'} className='link' style={{fontSize:'15px'}}>Forget Password ?</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;