import Application from "../Application";
import MessageApp from "./MessageApp";
import { BiSolidMessageRounded } from "react-icons/bi"; // message app
import { IoIosMail } from "react-icons/io"; // mail
import { IoIosCompass } from "react-icons/io"; // safari
import { GiPhotoCamera } from "react-icons/gi"; // picTok


const HomeScreen = ({changeScreen, activeScreen}) => {
    return (<div className="homeScreen screen">
        <Application name="PicTok" iconImg={<GiPhotoCamera/>} changeScreen={changeScreen} iconColor="#e9155c" />
        <div className="bottomBar">
            <div className="content">
                <Application name="Mail" iconImg={<IoIosMail />} changeScreen={changeScreen} iconColor="#15a3e9" />
                <Application name="Messages" iconImg={<BiSolidMessageRounded />} changeScreen={changeScreen} screen={<MessageApp changeScreen={changeScreen} />} iconColor="#00bc19" />
                <Application name="Safari" iconImg={<IoIosCompass/>} changeScreen={changeScreen} iconColor="#15a3e9" />


            </div>
        </div>
    </div> );
}
 
export default HomeScreen;