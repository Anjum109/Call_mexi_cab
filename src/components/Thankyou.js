import React from 'react';
import '../CSS/Thankyou.css'
import Header from './Header';
import Footer from './Footer';
import { BsCheckLg } from "react-icons/bs";
const Thankyou = () => {
    return (
        <div>
            <Header />
            <div className='length'>
                <div className='thankyou'>
                    <BsCheckLg size={40} />
                    <h1> Thank you!</h1>
                    <h5>We will get back to you shortly</h5>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Thankyou;