import { IoCalendarOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { PiMapPinLight } from "react-icons/pi";
import Notification from "../Notification";
import { BiSolidMessageRounded } from "react-icons/bi"; // message app
import MessageApp from "./MessageApp";

const EventEnvy = ({changeScreen, pushNotif, setNotif}) => {
    const notify = () => {
        setTimeout(() => {
            setNotif(
            <Notification
                iconColor = "#00bc19" 
                iconImg = {<BiSolidMessageRounded/>} 
                title = "Messages" 
                subtitle = "Jess 🌺" 
                content = "did you see eventEnvy? we have to go!!"
                app = {<MessageApp changeScreen={changeScreen} 
                            pushNotif={pushNotif} 
                            setNotif={setNotif}/>}
                changeScreen={changeScreen}/>)
            pushNotif(true);
        }, 2000)
    }

    const handleScroll = (e) => {
        const atBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (atBottom) {
            notify();
        }
    }

    return (
        <div className="eventEnvy screen" onScroll={(e) => handleScroll(e)}>
            <div className="event">
                    <img src= {process.env.PUBLIC_URL +  "/images/picTok/fling.jpg"} alt="" />
                    <h3>Spring Fling 2024 with special guests Jordan Sparks, Iyaz, and Tkay Maidza</h3>
                    <h6>By Tuft University</h6>
                    <div className="event-details">
                        <div className="e-detail">
                            <IoCalendarOutline className="eventIcon"/>
                            <div className="eventText">
                                <p> Saturday, April 20</p>
                                <p>12:00pm - 5:00pm ET</p>
                            </div>
                        </div>
                        <div className="e-detail">
                            <PiMapPinLight className="eventIcon"/>
                            <div className="eventText">
                                <p>Academic Quad</p>
                                <p>163 Packard Ave Medford, MA 02155</p>
                            </div>
                        </div>
                        <div className="e-detail">    
                            <IoTicketOutline className="eventIcon"/>
                            <div className="eventText">
                                <p>$0-$35</p>
                                <p>Undergraduate Students: FREE</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="moreEvents">
                <h3>Top picks for you</h3>
                <div className="recEvent">
                    <img src= {process.env.PUBLIC_URL +  "/images/picTok/tDay1.jpg"} alt="" />
                    <h4>Tuftonias Day by Tufts University 🎡</h4>
                        <div className="e-detail">
                            <IoCalendarOutline className="eventIcon"/>
                            <div className="eventText">
                                <p>Saturday, April 13</p>
                                <p>6:00pm - 10:00pm ET</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
 
EventEnvy.componentName = 'EventEnvy';

export default EventEnvy;