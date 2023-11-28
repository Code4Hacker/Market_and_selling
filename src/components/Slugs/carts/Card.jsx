import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Card = () => {
    // Aos.init({
    //     duration: 1500
    // })
    return (
        <div className="cart-bx">
            <div className="cart-img">
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="">
                <h5 className="header bold">Shoes</h5>
                <span className='comment small'>laboriosam officia ullam ...</span>
                <div className="border-top row">
                    <div className="col-9 mt-1">
                        <div className="incr_bx  mini">
                            <div className="">-</div>
                            <div className="">0</div>
                            <div className="">+</div>
                        </div>
                    </div>
                    <div className="col-2 mt-1">
                        <i className="bi bi-trash3"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card