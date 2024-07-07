import React from "react";
import style from './Hero.module.css';
import dark_arrow from '../assets/dark-arrow.png'

function Hero() {
    return (
        <div className={`container ${style.hero}`}>
            <div className={style.heroText}>
                <h1>Ensure Better Education for a Better World</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <button className="btn">Explore Now <img src={dark_arrow} alt=""/></button>
            </div>
        </div>
    );
}

export default Hero;
