import { useState } from "react";
import Notification from "../Notification";
import { GiWeightLiftingUp } from "react-icons/gi";
import FitFocus from "./FitFocus";


const NotesApp = ({changeScreen, pushNotif, setNotif}) => {

    window.onload = () => {
        setTimeout(() => {
            setNotif(
                <Notification className="animateOpen"
                iconColor = "#2d2dff" 
                iconImg = {<GiWeightLiftingUp/>} 
                title = "FitFocus" 
                subtitle = "Ready for a new day?" 
                content = "Log today's activity and plan your workouts!"
                app = {<FitFocus changeScreen={changeScreen} 
                                pushNotif={pushNotif} 
                                setNotif={setNotif}/>}
                changeScreen={changeScreen} /> )
            pushNotif(true)
        }, 1000)
    }

    return (
        <div className="notesApp screen">
            <div className="notesContent">
                <h2>Experience First Hand The Illusion Of Choice</h2> <br />
                <h3>Topic: Decision-making and Consciousness</h3> <br />
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
    );
}
 
export default NotesApp;