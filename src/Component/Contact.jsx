import React from "react";
import style from './Contact.module.css'
import msg from "../assets/msg-icon.png"


function Contact(){
    return(
        <div className={style.contact}>
            <div className={style.contactcol}>
                <h3>Send Us a message <img src={msg} alt=""/></h3>
                <p>Feel free to reach out through contact form or find our contact information below.Your  feedback,question, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
                <ul>
                    <li>Contact@PushkarDayal</li>
                    <li>+91 912- 111- 0987</li>
                    <li>Bangalore</li>
                </ul>
            </div>
            <div className={style.contactcol}>
                <form className={style.form}>
                    <label className={style.labelform}>Enter your Name</label>
                    <input type="text" name='name' placeholder="Enter your Name" required/>
                    <label className={style.labelform}>Enter your Phone number</label>
                    <input type="text" name='tel' placeholder="Enter your phone number" required/>
                    <label className={style.labelform}>Enter your message</label>
                    <input type="text" name='name' placeholder="Enter your message" required/>

                    <buttum className="btn darkbtn">Submit</buttum>
                </form>
            </div>
        </div>
    )


}

export default Contact

