import style from './Navbar.module.css'
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

function Navbar(){

    const [sticky, setsticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY>50 ? setsticky(true) : setsticky(false)
        })
    },[]);

    return (
        <nav className={`container ${sticky ? style.darknav : ''}`}>
            <img src={logo} alt = '' className={style.logo}/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    ) 
}

export default Navbar;