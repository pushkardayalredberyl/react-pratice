import React from "react";
import style from './Title.module.css'


function Title({subtitle,titleheading}){
    return(
        <div className={style.title}>
            <p>{subtitle}</p>
            <h2>{titleheading}</h2>
        </div>
    )
}

export default Title;