import AppIcon from "../AppIcon";
import MessageApp from "./MessageApp";
import { BiSolidMessageRounded } from "react-icons/bi"; // message app
import { IoIosMail } from "react-icons/io"; // mail
import { IoIosCompass } from "react-icons/io"; // safari
import { GiPhotoCamera } from "react-icons/gi"; // picTok
import EmailApp from "./EmailApp";
import PicTok from "./PicTokApp";

const HomeScreen = ({changeScreen, activeScreen}) => {
    return (<div className="homeScreen screen">
        <AppIcon name="PicTok" iconImg={<GiPhotoCamera/>} changeScreen={changeScreen} screen={<PicTok changeScreen={changeScreen}/>} iconColor="#e9155c" />

        <div className="bottomBar">
            <div className="content">
                <AppIcon name="Mail" iconImg={<IoIosMail />} changeScreen={changeScreen} iconColor="#15a3e9" screen={<EmailApp changeScreen={changeScreen} />}/>
                <AppIcon name="Messages" iconImg={<BiSolidMessageRounded />} changeScreen={changeScreen} screen={<MessageApp changeScreen={changeScreen} />} iconColor="#00bc19" />
                <AppIcon name="Safari" iconImg={<IoIosCompass/>} changeScreen={changeScreen} iconColor="#15a3e9" screen={null} />
            </div>
        </div>
    </div> );
}
 
export default HomeScreen;