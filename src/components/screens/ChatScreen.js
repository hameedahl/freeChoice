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
    const [startJessConv, setStartJessConv] = useState(false);
    const [newMsgIndex, setNewMsgIndex] = useState(0);
    var index = 0
    var conv;

    const liveConv = [
        {id: "c1m2", type: "rcvd",  order: "last", sender: "", msgText: "are you there?"},
        {id: "c1m3", type: "rcvd",  order: "last", sender: "", msgText: "I can see you reading my messages :("},
        {id: "c1m4", type: "sent",  order: "not-last", sender: "", msgText: "hii sorry"},
        {id: "c1m5", type: "sent",  order: "last", sender: "", msgText: "yes that sounds like a lot of fun!"},
        {id: "c1m6", type: "rcvd",  order: "last", sender: "", msgText: "okk let's get our tickets now before it's too late"},
        {id: "c1m7", type: "sent",  order: "last", sender: "", msgText: "sounds good :)"},
        {id: "c1m8", type: "rcvd",  order: "last", sender: "", msgText: "anyways what are you up to?"},
        {id: "c1m9", type: "sent",  order: "not-last", sender: "", msgText: "not much"},
        {id: "c1m10", type: "sent",  order: "last", sender: "", msgText: "I was just reading this interesting article about technology and its affects on our decision-making"},
        {id: "c1m11", type: "sent",  order: "last", sender: "", msgText: "I was just reading this interesting article about technology and its affects on our decision-making"},
        {id: "c1m25", type: "rcvd",  order: "not-last", sender: "", msgText: "omg that sounds really cool!!"},
        {id: "c1m26", type: "rcvd",  order: "not-last", sender: "", msgText: "I've definitely fallen victim to most tricks 😩"},
        {id: "c1m27", type: "rcvd",  order: "last", sender: "", msgText: "lmk when you finish and I'll be your first test user 🫡"},
        {id: "c1m28", type: "sent",  order: "last", sender: "", msgText: "thanks and I will ❤️"}
    ]

    const [chats, setChats] = useState([
        /* GC */ 
        {id: "c0", msgs: [{id: "c0m0", type: "rcvd", order: "last", sender: "Chris", msgText: "Ok I'll see you guys there"},
        {id: "c0m1", type: "rcvd", order: "last", sender: "Alice", msgText: "Kk"},
        {id: "c0m2", type: "rcvd", order: "last", sender: "Matt", msgText: "is anyone here yet?"},
        {id: "c0m3", type: "sent", order: "last", sender: "", msgText: "omw now"},
        {id: "c0m4", type: "rcvd",  order: "not-last", sender: "Bella", msgText: "OMG did you guys see this??"},
        {id: "c0m5", type: "rcvd",  order: "last", sender: "Bella", msgText: "pictok.com/adf313"} ]},
        /* Jess */ 
        {id: "c1", msgs: [{id: "c1m0", type: "rcvd",  order: "not-last", sender: "", msgText: "did you see eventEnvy?"},
        {id: "c1m1", type: "rcvd",  order: "last", sender: "", msgText: "we have to go!!"} ]},
        
        /* Chris */ 
        {id: "c2", msgs: [{id: "c2m0", type: "rcvd", order: "last", sender: "Chris", msgText: "Ok I'll see you guys there"},
        {id: "c2m1", type: "rcvd", order: "last", sender: "Alice", msgText: "Kk"},
        {id: "c2m2", type: "rcvd", order: "last", sender: "Matt", msgText: "is anyone here yet?"},
        {id: "c2m3", type: "sent", order: "last", sender: "", msgText: "omw now"},
        {id: "c2m4", type: "rcvd",  order: "not-last", sender: "Bella", msgText: "OMG did you guys see this??"},
        {id: "c2m5", type: "rcvd",  order: "last", sender: "Bella", msgText: "pictok.com/adf313"} ]},
        
        /* Bella */ 
        {id: "c3", msgs: [{id: "c3m0", type: "rcvd", order: "last", sender: "Chris", msgText: "Ok I'll see you guys there"},
        {id: "c3m1", type: "rcvd", order: "last", sender: "Alice", msgText: "Kk"},
        {id: "c3m2", type: "rcvd", order: "last", sender: "Matt", msgText: "is anyone here yet?"},
        {id: "c3m3", type: "sent", order: "last", sender: "", msgText: "omw now"},
        {id: "c3m4", type: "rcvd",  order: "not-last", sender: "Bella", msgText: "OMG did you guys see this??"},
        {id: "c3m5", type: "rcvd",  order: "last", sender: "Bella", msgText: "pictok.com/adf313"} ]},
    
        /* Matt */ 
        {id: "c4", msgs: [{id: "c4m0", type: "rcvd", order: "last", sender: "Chris", msgText: "Ok I'll see you guys there"},
        {id: "c4m1", type: "rcvd", order: "last", sender: "Alice", msgText: "Kk"},
        {id: "c4m2", type: "rcvd", order: "last", sender: "Matt", msgText: "is anyone here yet?"},
        {id: "c4m3", type: "sent", order: "last", sender: "", msgText: "omw now"},
        {id: "c4m4", type: "rcvd",  order: "not-last", sender: "Bella", msgText: "OMG did you guys see this??"},
        {id: "c4m5", type: "rcvd",  order: "last", sender: "Bella", msgText: "pictok.com/adf313"} ]},
    
        /* Grubhub */ 
        {id: "c5", msgs: [{id: "c5m0", type: "rcvd", order: "last", sender: "Chris", msgText: "Your order is on the way and will arrive between 7:33 PM and 7:48 PM."},
        {id: "c5m1", type: "rcvd", order: "last", sender: "", msgText: "Your Grubhub driver will arrive with your order soon."},
        {id: "c5m2", type: "rcvd", order: "last", sender: "", msgText: "Your Grubhub order is here!"}]},
    
        /* Mom */ 
        {id: "c6", msgs: [{id: "c6m0", type: "rcvd", order: "last", sender: "Chris", msgText: "I'll be home in 10."},
        {id: "c7m1", type: "sent", order: "not-last", sender: "", msgText: "Okk"},
        {id: "c7m2", type: "sent", order: "last", sender: "", msgText: "See you soon"},
        {id: "c7m3", type: "rcvd", order: "last", sender: "", msgText: "Call me."}]},
    ]);

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

    

    const jessConv = () => {
        conv = setInterval(() => {
            if (index < liveConv.length) {
                console.log(chats[msg.id].msgs)

                chats[msg.id].msgs.push(liveConv[index])
                index++
                setChats(chats)
            } else {
                endConv();
            }
        }, 2000)
    }

    const endConv = () => {
        clearInterval(conv)

    }


    if (msg.from === "Jess 🌺") {
        if (!startJessConv) {
            setStartJessConv(true);
            jessConv();

        }
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
                    {(chats[msg.id].msgs).map((msg) => (
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