import React from "react";
import style from './Campus.module.css'

import gal1 from '../assets/gallery-1.png';
import gal2 from '../assets/gallery-2.png';
import gal3 from '../assets/gallery-3.png';
import gal4 from '../assets/gallery-4.png';
import whitearraor from '../assets/white-arrow.png'

function Campus(){
    return(
        <div className={style.campus}>
            <div className={style.gallery}>
                <img src = {gal1} alt=""/>
                <img src = {gal2} alt=""/>
                <img src = {gal3} alt=""/>
                <img src = {gal4} alt=""/>
            </div>
            <button className="btn darkbtn">See more here <img src={whitearraor} alt=""/></button>
        </div>
    )
}

export default Campus;