// import { useState } from "react";
// import LockScreen from "../screens/LockScreen";
const Screen = ({changeScreen, activeScreen, currDate, currTime}) => {
// figure out global vars or get time/date to print; finish top bar; do message app
    return (<div className="phoneScreen">
        <div className="topBar">
            <p>{currTime}</p>
        </div>
        {activeScreen}
        
    </div> );
}
 
export default Screen;