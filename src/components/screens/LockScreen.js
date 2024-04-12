import CurrentDate from "../phoneParts/CurrentDate";
import Notification from "../Notification";
import MessageApp from "./MessageApp";
import { BiSolidMessageRounded } from "react-icons/bi"; // message app
import { IoIosBatteryFull } from "react-icons/io";
import { IoWifiOutline } from "react-icons/io5";
import { RxBorderDotted } from "react-icons/rx";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiPhotoCamera } from "react-icons/gi"; // picTok
import PicTok from "./PicTokApp";

const LockScreen = ({changeScreen, currDate, currTime}) => {
    return (<div className="lockScreen screen">
        {<div className="topBar">
            <p><RxBorderDotted /> <IoWifiOutline /></p>
            <p>100%<IoIosBatteryFull/></p>
        </div>}
        <CurrentDate/>
        <div className="content">
            {/* <Notification
                iconColor = "#e9155c" 
                iconImg = {<GiPhotoCamera />} 
                title = "PicTok" 
                subtitle = "Your friend @jess just posted" 
                content = "Be the first to comment"
                app = {<PicTok changeScreen={changeScreen}/>}
                changeScreen={changeScreen} />
            <Notification
                iconColor = "#00bc19" 
                iconImg = {<BiSolidMessageRounded />} 
                title = "Bella" 
                subtitle = "Bella, Chris, Jess & Matt" 
                content = "OMG did you guys see this??"
                app = {<MessageApp changeScreen={changeScreen}/>}
                changeScreen={changeScreen} />
            <Notification
                iconColor = "orange" 
                iconImg = {<IoFastFoodOutline />} 
                title = "Food Delivery" 
                subtitle = "Your 50% off deal is about to disappear!" 
                content = "Don't let it slip away..."
                app = {null}
                changeScreen={changeScreen} /> */}
        </div>
    </div> );
}
 
export default LockScreen;