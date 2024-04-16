import { IoIosArrowBack } from "react-icons/io";
import Chats from "../Chats.js"
import MessageBubble from "../MessageBubble.js";
import { IoVideocamOutline } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import MessageApp from "./MessageApp.js";
import Notification from "../Notification.js";
import { useState } from "react";

const ChatScreen = ({msg, changeScreen, pushNotif, setNotif}) => {
    const [chatMsg, setChatMsg] = useState(msg);

    const notify = () => {
        setTimeout(() => {
            setNotif(
            <Notification
                iconColor = "#e9155c" 
                iconImg = {null} 
                title = "PicTok" 
                subtitle = "Your friend @jess just posted" 
                content = "Be the first to comment!"
                // app = {<PicTok changeScreen={changeScreen} 
                //             pushNotif={pushNotif} 
                //             setNotif={setNotif}/>}
                changeScreen={changeScreen}/>)
            pushNotif(true);
        }, 2000)
    }


    if (msg.sender === "Jess 🌺") {
        // text conv or nah?
    }

    return (
        <div className="chatScreen screen">
            <div className="chatTop">
                <div className="chatTopContent">
                    <div className="msgBackBtn" 
                         onClick={() => (changeScreen(<MessageApp changeScreen={changeScreen} />))}>
                        <div><IoIosArrowBack/></div></div>
                    <div className="headerContainer"><div className="profile"><HiUser className="profile-icon"/></div><p>{msg.from}</p></div>
                    <div><IoVideocamOutline className="phoneIcon" /></div>
                </div>
            </div>
            <div className="chatContent chat">
                    {(Chats.chats[msg.id].msgs).map((msg) => (
                        <div key={msg.id} className="chat-div">
                        <MessageBubble id={msg.id}
                                        from={msg.sender} 
                                        text= {msg.msgText}
                                        type={msg.type}
                                        order={msg.order}/></div>
                    ))}
            </div>
            <div className="chatBottom">
                <div className="keyboard">
                    <img src= {process.env.PUBLIC_URL + "/images/keyboard2.png"} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default ChatScreen;