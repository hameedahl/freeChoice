import { IoIosArrowBack } from "react-icons/io";
import Chats from "../Chats.js"
import MessageBubble from "../MessageBubble.js";
import { IoVideocamOutline } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import MessageApp from "./MessageApp.js";

const ChatScreen = ({msg, changeScreen}) => {

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