import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import '../CSS/Footer.css'
import img from '../assets/images/verified-customer-Google-reviews.png'
const Footer = () => {
    return (
        <div class="footer-basic">
            <footer>


                <div className='list-inline'>
                    <ul class="">
                        <li class="list-inline-item itemOne"><a href="#">Links</a></li>

                        <li class="list-inline-item"><a href="#">Wheelchair Taxi Perth</a></li>
                        <li class="list-inline-item"><a href="#">Contact Us</a></li>
                        <li class="list-inline-item"><a href="#">About Us</a></li>

                    </ul>
                    <ul class="">
                        <li class="list-inline-item itemOne"><a href="#">About Us
                            Contact</a></li>
                        <li class="list-inline-item"><a href="#"><BsFillEnvelopeFill className='icons' /> booking@callmaxicab.com.au</a></li>
                        <li class="list-inline-item"><a href="#"><BsTelephoneFill className='icons' /> +61 414322847</a></li>
                        <li class="list-inline-item"><a href="#">Sitemap</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Notice</a></li>
                    </ul>
                    <ul class="image">
                        <img src={img} alt="" />
                    </ul>
                </div>
                <p class="copyright">Company Name © ALLMAXICAB 2021</p>
            </footer>
        </div>
    );
};

export default Footer;