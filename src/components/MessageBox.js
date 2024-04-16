import ChatScreen from "./screens/ChatScreen";
import { HiUser } from "react-icons/hi2";

const MessageBox = ({msg, changeScreen, pushNotif, setNotif}) => {
    return (
        <div className="messageBox" 
            onClick={() => (changeScreen(
                            <ChatScreen msg={msg} 
                                        changeScreen={changeScreen}
                                        pushNotif={pushNotif} 
                                        setNotif={setNotif}
                                        />))}>
            <div className="msgBox-profile">
                <HiUser className="profile-icon"/>
            </div>
            <div className="msgBox-text">
                <p className="msgFrom">{msg.from}</p>
                <p className="msgPrev">{msg.prev}</p>
            </div>                                                
        </div>
    );
}
 
export default MessageBox;