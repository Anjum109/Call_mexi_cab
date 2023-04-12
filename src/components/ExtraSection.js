import React from 'react';
import '../CSS/ExtraSection.css'
import { Slide } from 'react-awesome-reveal';
import img from '../assets/images/Asset23CallMaxiCab.png'
import { BsFillTruckFrontFill } from "react-icons/bs";



const ExtraSection = () => {
    return (
        <div >
            <Slide direction='right' cascade='0.1'>
                <div className='passage'>
                    <h1>Enjoy comfortable ride in Maxi Taxi, Outstation maxi taxi and Airport taxi.
                        Book Maxi Taxi Perth hassle free at fixed price</h1>
                </div>
            </Slide>
            <Slide direction='left' cascade='0.1'>

                <div className='cab_image'>
                    <img src={img} alt="" />
                </div>
            </Slide>
            <div className='extraSection'>
                <Slide direction='bottom' cascade='0.1'>
                    <div className='services'>
                        <h1>Our <span>Services</span></h1>
                    </div>
                    <div className='border_line'>
                        <p ></p>
                    </div>
                </Slide>
                <Slide direction='bottom' cascade='0.1'>
                    <div className='sectionCard'>
                        <div className="Clist">
                            <div className='seticons'>
                                <div className='set_icon'>
                                    <BsFillTruckFrontFill size={30} color='blue' />
                                </div>
                            </div>
                            <h3>Maxi Taxi Perth</h3>
                        </div>
                        <div className="Clist">
                            <div className='seticons'>
                                <div className='set_icon'>
                                    <BsFillTruckFrontFill size={30} color='blue' />
                                </div>
                            </div>
                            <h3>Airport Taxi Perth</h3>
                        </div>
                        <div className="Clist">
                            <div className='seticons'>
                                <div className='set_icon'>
                                    <BsFillTruckFrontFill size={30} color='blue' />
                                </div>
                            </div>
                            <h3>Fremantle Taxi</h3>
                        </div>
                        <div className="Clist">
                            <div className='seticons'>
                                <div className='set_icon'>
                                    <BsFillTruckFrontFill size={30} color='blue' />
                                </div>
                            </div>
                            <h3>Wheelchair Taxi Perth</h3>
                        </div>
                        <div className="Clist">
                            <div className='seticons'>
                                <div className='set_icon'>
                                    <BsFillTruckFrontFill size={30} color='blue' />
                                </div>
                            </div>
                            <h3>Baby Capsule Taxi</h3>
                        </div>



                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default ExtraSection;