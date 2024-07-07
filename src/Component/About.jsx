import React from "react";
import style from './About.module.css';
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

function About(){
    return(
        <div className={style.about}>
            <div className={style.aboutLeft}>
                <img src={about_img} className={style.aboutimg} alt=''/>
                <img src={play_icon} className={style.playicon} alt=''/>
            </div>
            <div className={style.aboutRight}>
                <h3>About University</h3>
                <h2>Nurturing Tomorrorw's Leaders Today</h2>
                <p>Embark on a transformative education journey with our university's comprehensive education programs.Our Cutting-edge curriculam is designed to empower students with the knowledge,skills ,and experience needed to excel in the dynamic field of education</p>
                <p>With a focus on innovation, hands-on  learning and personalized mentorship , our programs aspiring education to make a meaning ful impact in the classroom,schools and community</p>
                <p>Whether you aspire to become  a teacher ,administrator,counselor, pr education leader, our diverse range of programs offers the perfect pathway to achieve tyour golas and unlock your full potential in shaping the future of education</p>

            </div>
        </div>
    )
}

export default About