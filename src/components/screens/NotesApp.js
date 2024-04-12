import { useState } from "react";
import Notification from "../Notification";

const NotesApp = ({changeScreen}) => {
    window.onscroll = () => {
        console.log(window);
      
    
    }



    return (
        <div className="notesApp screen">
                        {/* <div className="pushNotifs">
                <Notification className="animateOpen"
                iconColor = "#e9155c" 
                iconImg = {null} 
                title = "PicTok" 
                subtitle = "Your friend @jess just posted" 
                content = "Be the first to comment"
                app = {null}
                changeScreen={null} />
            </div> */}
            <div className="notesContent">
                <h2 >Experience First Hand The Illusion Of Choice</h2> <br />
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