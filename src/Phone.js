import { useState, useEffect } from "react";
import HomeButton from "./components/phoneParts/HomeButton";
import Screen from "./components/phoneParts/Screen";
import Top from "./components/phoneParts/Top";
import LockScreen from "./components/screens/LockScreen";

const Phone = () => {
    const [currDate, setCurDate] = useState('');
    const [currTime, setCurTime] = useState('');
    // get date
    useEffect(() => {
        const formatTime = () => {
            const date = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric'};
            const formattedDate = date.toLocaleDateString(undefined, options);
            setCurDate(formattedDate);
        };  
        formatTime();
  
        // Update the date every minute
        const interval = setInterval(formatTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // get time
    useEffect(() => {
        const formatTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        // const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
        setCurTime(`${hours}:${minutes}`);
    };
  
        formatTime();
  
        // Update the time every minute
        const interval = setInterval(formatTime, 30000);
        return () => clearInterval(interval);
    }, []);

    const [activeScreen, setActiveScreen] = 
    useState(<LockScreen changeScreen = {(screen) => setActiveScreen(screen)}
                         currDate={currDate}
                         currTime={currTime}/>);

    const handleScreenChange = (screen) => {
        setActiveScreen(screen);
    }

    return ( <div className="phone">
        <Top/>
        <Screen changeScreen= {handleScreenChange} 
                activeScreen={activeScreen}
                currDate={currDate}
                currTime={currTime}/>
        <HomeButton changeScreen= {handleScreenChange} activeScreen={activeScreen}/>
    </div> );
}
 
export default Phone;