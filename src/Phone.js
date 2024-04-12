import { useState, useEffect } from "react";
import HomeButton from "./components/phoneParts/HomeButton";
import Top from "./components/phoneParts/Top";
import LockScreen from "./components/screens/LockScreen";
import { IoIosBatteryFull } from "react-icons/io";
import { IoWifiOutline } from "react-icons/io5";
import { RxBorderDotted } from "react-icons/rx";
import Notification from "./components/Notification";
import NotesApp from "./components/screens/NotesApp";

const Phone = () => {
    const [currDate, setCurDate] = useState('');
    const [currTime, setCurTime] = useState('');
    const [showTop, setShowTop] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [notif, setNotif] = useState(null);

    
    
    const formatDate = () => {
        const date = new Date();
        const options = { weekday: 'long', month: 'long', day: 'numeric'};
        const formattedDate = date.toLocaleDateString(undefined, options);
        setCurDate(formattedDate);
    };  

    const formatTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        // const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
        setCurTime(`${hours}:${minutes}`);
    };
    
    // get date
    useEffect(() => {
        formatDate();
        // Update the date every 12 hrs
        const interval = setInterval(formatDate, 720000);
        return () => clearInterval(interval);
    }, []);

    // get time
    useEffect(() => {
        formatTime();
        // Update the time every 30 secs
        const interval = setInterval(formatTime, 30000);
        return () => clearInterval(interval);
    }, []);
   
    const [activeScreen, setActiveScreen] = 
    // useState(<LockScreen changeScreen = {(screen) => setActiveScreen(screen)}
    //                     currDate={currDate}
    //                     currTime={currTime}/>);
        useState(<NotesApp changeScreen = {(screen) => setActiveScreen(screen)}
                        pushNotif={setShowNotif}
                        setNotif= {setNotif} />);

    const handleScreenChange = (screen) => {
        setActiveScreen(screen);
    }

    useEffect(() => {
        setShowTop((activeScreen.type.name === "LockScreen")? false: true)
        setShowNotif(false);


    }, [activeScreen]);
    return ( 
    <div id="phone">
        <Top/>
        <div className="phoneScreen">
            {showTop && <div className="topBar">
                <p><RxBorderDotted /> <IoWifiOutline /></p>
                <p>{currTime}</p>
                <p>100%<IoIosBatteryFull/></p>
            </div>}
            {showNotif && <div className="pushNotifs">{notif}</div> }
            {activeScreen}
        </div>
        <HomeButton changeScreen= {handleScreenChange} activeScreen={activeScreen}/>
    </div> );
}
 
export default Phone;