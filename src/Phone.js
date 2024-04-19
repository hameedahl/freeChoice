import { useState, useEffect } from "react";
import HomeButton from "./components/phoneParts/HomeButton";
import Top from "./components/phoneParts/Top";
import { FaSignal } from "react-icons/fa";
import { IoWifiSharp } from "react-icons/io5";
import WebApp from "./components/screens/WebApp";
import { PiBatteryFullFill } from "react-icons/pi"; // 1
import { PiBatteryHighFill } from "react-icons/pi"; // 2
import { PiBatteryMediumFill } from "react-icons/pi"; // 3
import { PiBatteryLowFill } from "react-icons/pi"; // 4

const Phone = () => {
    // const [currDate, setCurDate] = useState('');
    const [currTime, setCurTime] = useState('');
    const [showTop, setShowTop] = useState(true);
    const [showNotif, setShowNotif] = useState(false);
    const [notif, setNotif] = useState(null);
    const [battery, setBattery] = useState(<PiBatteryFullFill />);
    const [topColor, setTopColor] = useState("black");
    
    // const formatDate = () => {
    //     const date = new Date();
    //     const options = { weekday: 'long', month: 'long', day: 'numeric'};
    //     const formattedDate = date.toLocaleDateString(undefined, options);
    //     // setCurDate(formattedDate);
    // };  

    const formatTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        // const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
        setCurTime(`${hours}:${minutes}`);
    };
    
    // get date
    // useEffect(() => {
    //     formatDate();
    //     // Update the date every 12 hrs
    //     const interval = setInterval(formatDate, 720000);
    //     return () => clearInterval(interval);
    // }, []);

    // get time
    useEffect(() => {
        formatTime();
        // Update the time every 30 secs
        const interval = setInterval(formatTime, 30000);
        return () => clearInterval(interval);
    }, []);
   
    const [activeScreen, setActiveScreen] = 
        useState(<WebApp changeScreen = {(screen) => setActiveScreen(screen)}
                        pushNotif={setShowNotif}
                        setNotif= {setNotif} />);

    const handleScreenChange = (screen) => {
        setActiveScreen(screen);
    }

    useEffect(() => {
        const currScreen = activeScreen.type.componentName
        setShowNotif(false);
        switch (currScreen) {
            case "FitFocus":
                setTopColor("white")
                break;
            case "LuckyTap":
                setBattery(<PiBatteryHighFill/>);
                break;
            case "EventEnvy":
                setTopColor("black")
                setBattery(<PiBatteryMediumFill/>);
                break;
            case "MessageApp":
                setTopColor("white")
                setBattery(<PiBatteryLowFill/>);
                break;
            case "ChatScreen":
                setTopColor("white")
                setBattery(<PiBatteryLowFill/>);
                break;
            case "Battery":
                setShowTop(false);
                break;
            case "LockScreen":
                setShowTop(false);
                break;
            default:
                break;
        }
        
    }, [activeScreen]);

    return ( 
    <div id="phone">
        <Top/>
        <div className="phoneScreen">
            {showTop && <div className="topBar">
                <div className="topBar-content" style={{color: topColor}}>
                    <p className="top-time">{currTime}</p>
                    <div className="topRight">
                        <div className="signal"><FaSignal/></div>
                        <div className="wifi"><IoWifiSharp/></div>
                        <div className="top-battery">{ battery }</div>
                    </div>
                </div>
            </div>}
            {showNotif && <div className="pushNotifs">{notif}</div> }
            {activeScreen}
        </div>
        <HomeButton changeScreen= {handleScreenChange} activeScreen={activeScreen}/>
    </div> );
}
 
export default Phone;