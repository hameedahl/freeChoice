import { FaPhoneFlip } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import Chats from "../Chats.js"
import MessageBubble from "../MessageBubble.js";

const ChatScreen = ({msg, changeScreen, prevScreen}) => {

    return (
        <div className="chatScreen screen">
            <div className="chatTop">
                <div className="chatTopContent">
                    <div className="msgBackBtn" 
                         onClick={() => (changeScreen(prevScreen))}>
                        <p><IoIosArrowBack/>Messages</p></div>
                    <div className="headerContainer"><h1>{msg.from}</h1></div>
                    <div><FaPhoneFlip className="phoneIcon" /></div>
                </div>
            </div>
            <div className="chatContent chat">
                    {(Chats.chats[msg.id].msgs).map((msg) => (
                        <div key={msg.id}>
                        <MessageBubble id={msg.id}
                                        from={msg.sender} 
                                        text= {msg.msgText}
                                        type={msg.type}
                                        order={msg.order}/></div>
                    ))}
            </div>
            <div className="chatBottom">
                <div className="keyboard">
                    <div className="textBox">
                    </div>
                    <img src= {process.env.PUBLIC_URL + "/images/keyboard1.png"} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default ChatScreen;