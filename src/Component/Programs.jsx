import React from "react";
import style from './Programs.module.css';
import program1 from '../assets/program-1.png';
import program2 from '../assets/program-2.png';
import program3 from '../assets/program-3.png';
import picons1 from '../assets/program-icon-1.png';
import picons2 from '../assets/program-icon-2.png';
import picons3 from '../assets/program-icon-3.png';


function Programs(){
    return(
        <div className={style.programs}>
            <div className={style.program}>
                <img src={program1} alt='' />
                <div className={style.caption}>
                    <img src= {picons1} alt = ''/>
                    <p>Graduation Degree</p>
                </div>

            </div>
            <div className={style.program}>
            <img src={program2} alt='' />
            <div className={style.caption}>
                    <img src= {picons2} alt = ''/>
                    <p>Master Degree</p>
            </div>
            </div>
            <div className={style.program}>
            <img src={program3} alt='' />
            <div className={style.caption}>
                    <img src= {picons3} alt = ''/>
                    <p>Post-Graduation Degree</p>
            </div>
            </div>
        </div>
    )
}

export default Programs