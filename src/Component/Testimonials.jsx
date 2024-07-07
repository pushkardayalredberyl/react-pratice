import React, { useRef } from "react";
import style from './Testimonials.module.css';
import nexticon from '../assets/next-icon.png';
import backicon from '../assets/back-icon.png';
import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';
import user4 from '../assets/user-4.png';


function Testimonials(){

    const slider = useRef(null);
    let tx =0;

   const forward = () =>{
      if(tx> -50){
        tx-=25;

        if (slider.current) {
            slider.current.style.transform = `translateX(${tx}%)`;
        }
        
      }
      
   }

   const backward = () =>{
    if(tx> 0){
        tx+=25;

        if (slider.current) {
            slider.current.style.transform = `translateX(${tx}%)`;
        }
        
      }
     
   }

    return(

       <div className={style.testimonials}>
        <div className={style.icons}>
            <img src={nexticon} alt="" className={style.nexticon} onClick={forward}/>
            <img src={backicon} alt="" className={style.backicon} onClick={backward}/>
        </div>
        <div className={style.slider}>
            <div className={style.slide}>
                <ul>
                    <li>
                        <img className={style.profile} src={user1} alt=""/>
                        <h2>M.S Dhoni</h2>
                        <h3>India</h3>
                        <p>He is best wicket-keeper batsman,best leader in Indian Cricket team.He has won 5 IPl trophy,1 Champions Trophy,1 T20 world cup ,1 one-day World Cup.</p>
                    </li>
                    <li>
                        <img className={style.profile} src={user2} alt=""/>
                        <h2>Rohit Sharma</h2>
                        <h3>India</h3>
                        <p>He is best wicket-keeper batsman,best leader in Indian Cricket team.He has won 5 IPl trophy,1 Champions Trophy,1 T20 world cup ,1 one-day World Cup.</p>
                    </li>
                    <li>
                        <img className={style.profile} src={user3} alt=""/>
                        <h2>Virat Kholi</h2>
                        <h3>India</h3>
                        <p>He is best wicket-keeper batsman,best leader in Indian Cricket team.He has won 5 IPl trophy,1 Champions Trophy,1 T20 world cup ,1 one-day World Cup.</p>
                    </li>
                    <li>
                        <img className={style.profile} src={user4} alt=""/>
                        <h2>Sachin R Tendunkar</h2>
                        <h3>India</h3>
                        <p>He is best wicket-keeper batsman,best leader in Indian Cricket team.He has won 5 IPl trophy,1 Champions Trophy,1 T20 world cup ,1 one-day World Cup.</p>
                    </li>
                </ul>
            </div>
        </div>
       </div>
    )
}

export default Testimonials