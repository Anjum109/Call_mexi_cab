import React from 'react';
import '../CSS/Header.css'
import { Slide } from 'react-awesome-reveal';
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Slide cascade damping={0.1}>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        allMaxiCab
                    </div>

                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <a href="/" target="_blank" className='number'> <div>
                        <BsFillTelephoneFill className='icon' />
                        +61414322847
                    </div></a>
                    <a href="/" target="_blank"><Link to='/' className='get'>Get Quote</Link></a>
                    <a href="about" target="_blank">About</a>
                    <a href="/services" target="_blank">Services</a>
                    <a href="/blog" target="_blank">Blog</a>
                    <a href="/contact" target="_blank">Contact</a>
                </div>
            </div>
        </Slide>
    );
};

export default Header;