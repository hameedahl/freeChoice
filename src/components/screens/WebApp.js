import { useState } from "react";
import Notification from "../Notification";
import { GiWeightLiftingUp } from "react-icons/gi";
import FitFocus from "./FitFocus";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { IoRefresh } from "react-icons/io5";
import { RiFontSize } from "react-icons/ri";


const WebApp = ({changeScreen, pushNotif, setNotif}) => {
    const [pushedNotif, setPushedNotif] = useState(false);

    const notify = () => {
        setTimeout(() => {
            setNotif(
                <Notification className="animateOpen"
                iconColor = "black" 
                iconImg = {<GiWeightLiftingUp/>} 
                title = "FitFocus" 
                subtitle = "Ready for a new day? 💪" 
                content = "Log today's activity and plan your workouts!"
                app = {<FitFocus changeScreen={changeScreen} 
                                pushNotif={pushNotif} 
                                setNotif={setNotif}/>}
                changeScreen={changeScreen} /> )
            pushNotif(true)
        }, 10000)
    }

    const handleScroll = (e) => {
        const atBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight + .5;
        if (atBottom && !pushedNotif) {
            setPushedNotif(true);
            notify();
        }
    }

    return (
        <div className="webApp screen">
            <div className="webContent" onScroll={(e) => (handleScroll(e))}>
                <div className="webTop"><h1>🔵 Tech & Science </h1></div>
                <div className="webText">
                    <h2>Experience First Hand The Illusion Of Choice</h2> <br />
                    <p>Hameedah Lawal <br /> 30 sec read <br /> April 24, 2024</p>
                    <br />
                    <img src={process.env.PUBLIC_URL + "/images/article.webp"} alt="" />
                    <h3>Topic: Decision-making</h3> <br />

                    <p><strong style={{ color: "#0079bb"}}>How-To:</strong> Interactively explore each app's 
                     features until it triggers a notification, allowing you to 
                     move on to the next. This experience is designed to make 
                     you more aware of the subtle influences on your decision-making.
                    </p>
                    <br/>
                    <p>The illusion of free choice refers to the perception 
                      that we are making independent decisions when, in reality, 
                      our choices may be influenced by various factors beyond 
                      our conscious control, such as societal norms, biases, 
                      and subconscious impulses. Companies use this idea to 
                      their advantage. This project demonstrates the illusion 
                      of free choice and <a style={{ color: "#0079bb"}} href="https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3">Harris' ten hijacking points</a> in subtle and not-so-subtle ways.
                    </p>
                    
                    <br/>
                
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

WebApp.componentName = 'WebApp';

export default WebApp;