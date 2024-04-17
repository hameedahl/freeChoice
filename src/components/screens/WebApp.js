import { useState } from "react";
import Notification from "../Notification";
import { GiWeightLiftingUp } from "react-icons/gi";
import FitFocus from "./FitFocus";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaLock } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { RiFontSize } from "react-icons/ri";


const WebApp = ({changeScreen, pushNotif, setNotif}) => {

    window.onload = () => {
        setTimeout(() => {
            setNotif(
                <Notification className="animateOpen"
                iconColor = "#2d2dff" 
                iconImg = {<GiWeightLiftingUp/>} 
                title = "FitFocus" 
                subtitle = "Ready for a new day 💪?" 
                content = "Log today's activity and plan your workouts!"
                app = {<FitFocus changeScreen={changeScreen} 
                                pushNotif={pushNotif} 
                                setNotif={setNotif}/>}
                changeScreen={changeScreen} /> )
            pushNotif(true)
        }, 1000)
    }

    return (
        <div className="webApp screen">
            <div className="webContent">
                <div className="webTop"><h1>🔵 Tech & Science </h1></div>
                <div className="webText">
                    <h2>Experience First Hand The Illusion Of Choice</h2> <br />
                    <p>Hameedah Lawal <br /> 15 min read <br /> April 16, 2024</p>
                    <br />
                    <img src={process.env.PUBLIC_URL + "/images/article.jpeg"} alt="" />
                    <h3>Topic: Decision-making</h3> <br />
                    <p>I plan to create an interactive website 
                        showcasing the <a style={{ color: "#00ddff"}} href="https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3">Hi</a> illusion of free choice by incorporating most of Harris' 
                        hijacking points and other similar tactics commonly used 
                        in popular apps. Through this website, I aim to raise 
                        awareness about regaining control of our choices by 
                        highlighting what users should look for, ultimately 
                        promoting the rational choice theory and absolute 
                        preferences. The website will also demonstrate 
                        how easily we fall prey to industry tricks.</p> 
                        <br />
                        <p>I plan to create an interactive website showcasing the 
                        illusion of free choice by incorporating most of Harris' 
                        hijacking points and other similar tactics commonly used 
                        in popular apps. Through this website, I aim to raise 
                        awareness about regaining control of our choices by 
                        highlighting what users should look for, ultimately 
                        promoting the rational choice theory and absolute 
                        preferences. The website will also demonstrate 
                        how easily we fall prey to industry tricks.</p> 

                </div>
            </div>
            <div className="webBottom">
                <div className="searchBar"><RiFontSize/><p>tech.science.decisions.com</p><IoRefresh/></div>
                <div className="webBotContent">
                    <IoIosArrowBack/><IoIosArrowForward/><IoShareOutline/>
                    <GoBook/><HiOutlineSquare2Stack/></div>
            </div>
        </div>
    );
}
 
export default WebApp;