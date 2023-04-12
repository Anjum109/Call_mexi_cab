import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import '../CSS/Home.css'
import { Fade, Slide } from 'react-awesome-reveal';
import Footer from './Footer';
import ExtraSection from './ExtraSection';

const Home = () => {

    const formArray = [1, 2, 3];
    const [formNo, setFormNo] = useState(formArray[0])
    const navigate = useNavigate();

    const [state, setState] = useState({
        name: '',
        drop: '',
        selectDate: '',
        selectTime: '',
        passangerNumber: '',
        carRange: '',
        userName: '',
        userEmail: '',
        mobile: ''
    })
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const next = () => {
        if (formNo === 1 && state.name && state.drop && state.selectDate) {
            setFormNo(formNo + 1)
        }
        else if (formNo === 2 && state.selectTime && state.passangerNumber && state.carRange) {
            setFormNo(formNo + 1)
        } else {
            toast.error('Please fillup all input field')
        }
    }
    const pre = () => {
        setFormNo(formNo - 1)
    }
    const finalSubmit = () => {
        if (state.userName && state.userEmail && state.mobile) {
            navigate('/thankyou')
        } else {
            toast.error('Please fillup all input field')
        }
    }


    return (
        <div>
            <Header />
            <div className='backgroundImage'>

                <div className="main">
                    <ToastContainer />
                    <div className="container">
                        <div className='card'>
                            {
                                formArray.map((v, i) => <><div className={`one ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'blue' : 'slate'} set`}>
                                    {v}
                                </div>
                                    {
                                        i !== formArray.length - 1 && <div className={`wh_set ${formNo === i + 2 || formNo === formArray.length ? 'blue' : 'slate'}`}></div>
                                    }
                                </>)
                            }
                        </div>
                        {
                            formNo === 1 && <div>
                                <div className='form'>
                                    <label htmlFor="name" className='title_one'>Pickup address</label>
                                    <input value={state.name} onChange={inputHandle} className='one_style' type="text" required name='name' placeholder='Enter a location' id='name' />
                                </div>
                                <div className='form'>
                                    <label htmlFor="drop" className='title_two'>Drop Location</label>
                                    <input value={state.drop} onChange={inputHandle} className='one_style'
                                        required type="text" name='drop' placeholder='Enter a location' id='drop' />
                                </div>
                                <div className='form'>
                                    <label htmlFor="selectDate" className='title_three'>Enter Date</label>
                                    <input value={state.selectDate} onChange={inputHandle} className='one_style' type="date" name='selectDate' placeholder='selectDate' />
                                </div>
                                <div className='button_div'>
                                    <button onClick={next} className='button'>Next</button>
                                </div>
                            </div>
                        }

                        {
                            formNo === 2 && <div>
                                <div className='form'>
                                    <label className='title_four' htmlFor="selectTime"  >Time</label>
                                    <input value={state.selectTime} onChange={inputHandle} className='one_style' type="time" name='selectTime' placeholder='' id='selectTime' />
                                </div>
                                <div className='form'>
                                    <label className='title_five' htmlFor="passangerNumber">Number Of Passangers</label>
                                    <input value={state.passangerNumber} onChange={inputHandle} className='one_style' type="number" name='passangerNumber' placeholder='5/10' id='passangerNumber' />
                                </div>
                                <div className='form'>
                                    <label className='title_six' htmlFor="carRange">Car Range</label>
                                    <textarea value={state.carRange} onChange={inputHandle} row='10' className='one_style' type="number" name='carRange' placeholder='7 person' ></textarea>
                                </div>
                                <div className='button_div'>
                                    <button onClick={pre} className='button'>Previous</button>
                                    <button onClick={next} className='button'>Next</button>
                                </div>
                            </div>
                        }

                        {
                            formNo === 3 && <div>
                                <div className='form'>
                                    <label htmlFor="userName" className='title_seven'>Name</label>
                                    <input value={state.userName} onChange={inputHandle} className='one_style' type="text"
                                        required
                                        name='userName' placeholder='Enter your name' id='userName' />
                                </div>
                                <div className='form'>
                                    <label htmlFor="userEmail" className='title_eight'>Email</label>
                                    <input value={state.userEmail} onChange={inputHandle} className='one_style' type="email" name='userEmail' required placeholder='Enter your email carRange' id='userEmail' />
                                </div>
                                <div className='form'>
                                    <label htmlFor="mobile" className='title_nine'>Mobile Number</label>
                                    <input value={state.mobile} onChange={inputHandle} className='one_style' required type="number" name='mobile' placeholder='Enter your mobile number' id='mobile' />
                                </div>
                                <div className='button_div'>
                                    <button onClick={pre} className='button'>Previous</button>
                                    <button onClick={finalSubmit} type='submit' className='button'><Link className='button_link'>Submit</Link></button>
                                </div>
                            </div>
                        }

                    </div>
                </div>

            </div>
            <ExtraSection />
            <Footer />
        </div>
    );
};

export default Home;