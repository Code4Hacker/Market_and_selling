import React, { useEffect, useState } from 'react';
import './style.css'
import Card from './Card';

const Cart = ({ hidding, setHidding, setView, view }) => {
    const [ hide, setHide ] = useState();
    const handleHide = () => {
        setHide(true);
        setHidding(true);
    }
    useEffect(() => {
        setHide(hidding);
    })
    return (
        <div className={`cart ${ hide ? 'animation__animate animate__animated animate__fadeOutUp':'animation__animate animate__animated animate__fadeIn'}`}>
            <div className={`cart-container ${ !hide ? 'from-end':''}`}>
                <div className="title mt-2">
                    <span><div className="bi text-red" onClick={handleHide}> <i className="bi bi-x"></i></div> Your Cart Items</span>
                </div>
                <div className="mt-5 mh">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="border-top cashing">
                    <div className="total text-center mt-2">
                        <span>TOTAL: </span> <span className="txt-gra">890K</span>
                    </div>
                    <div className="button center text-center mt-2">
                        <button className="btn btn-success bi bi-coin" onClick={ () => setView(true)}> CONTINUE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;