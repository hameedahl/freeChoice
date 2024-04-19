import { IoIosArrowBack } from "react-icons/io";
import MessageBubble from "../MessageBubble.js";
import { IoVideocamOutline } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import MessageApp from "./MessageApp.js";
import { useEffect, useState, useRef } from "react";
import Battery from "./Battery.js";

const ChatScreen = ({msg, changeScreen, pushNotif, setNotif}) => {
    const [startJessConv, setStartJessConv] = useState(false);
    const [newMsgIndex, setNewMsgIndex] = useState(0);
    const [textDelay, setDelay] = useState(3000);
    const chatContainerRef = useRef(null);

    const liveConv = [
        {id: "c1m2", type: "rcvd",  order: "last", sender: "", msgText: "are you there?"},
        {id: "c1m3", type: "rcvd",  order: "last", sender: "", msgText: "I can see you reading my messages :("},
        {id: "c1m4", type: "sent",  order: "last", sender: "", msgText: "hii sorry"},
        {id: "c1m5", type: "sent",  order: "last", sender: "", msgText: "yes that sounds like fun!"},
        {id: "c1m6", type: "rcvd",  order: "last", sender: "", msgText: "okk let's get our tickets now before it's too late"},
        {id: "c1m7", type: "sent",  order: "last", sender: "", msgText: "sounds good :)"},
        {id: "c1m8", type: "rcvd",  order: "last", sender: "", msgText: "anyways what are you up to?"},
        {id: "c1m9", type: "sent",  order: "last", sender: "", msgText: "not much"},
        {id: "c1m10", type: "sent",  order: "last", sender: "", msgText: "I was just reading this article about tech and its affects on decision-making"},
        {id: "c1m11", type: "sent",  order: "last", sender: "", msgText: "And then I got stuck scrolling through picTok 🫠"},
        {id: "c1m14", type: "rcvd",  order: "last", sender: "", msgText: "😂😂😂"},
        {id: "c1m13", type: "sent",  order: "last", sender: "", msgText: "But it's amazing how much companies can influence us 😳"},
        {id: "c1m15", type: "rcvd",  order: "last", sender: "", msgText: "yeah I've definitely fallen victim to most of their tricks 😩"},
        {id: "c1m16", type: "sent",  order: "last", sender: "", msgText: "same!"},
        {id: "c1m17", type: "sent",  order: "last", sender: "", msgText: "so I think that's what I'll focus my cbs project on"},
        {id: "c1m18", type: "sent",  order: "last", sender: "", msgText: "I'll probably make an interactive website showcasing the illusion of free choice"},
        {id: "c1m25", type: "rcvd",  order: "last", sender: "", msgText: "omg that sounds really cool!!"},
        {id: "c1m27", type: "rcvd",  order: "last", sender: "", msgText: "lmk when you finish and I'll be your first test user 🫡"},
        {id: "c1m28", type: "sent",  order: "last", sender: "", msgText: "thanks and I will ❤️"},
        {id: "c1m28", type: "rcvd",  order: "last", sender: "", msgText: "🩷🩷🩷"},
        {id: "c1m29", type: "sent",  order: "last", sender: "", msgText: "my phone is about to die but I'll see you later"},
        {id: "c1m29", type: "rcvd",  order: "last", sender: "", msgText: "okkk"}
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
        
        /* Sister */ 
        {id: "c2", msgs: [{id: "c2m0", type: "rcvd", order: "not-last", sender: "", msgText: "those shoes you wanted are on sale for $100 👀"},
        {id: "c2m5", type: "rcvd", order: "last", sender: "", msgText: "and it says limited time 😬"},
        {id: "c2m1", type: "sent", order: "last", sender: "", msgText: "Nooooo"},
        {id: "c2m2", type: "sent", order: "not-last", sender: "", msgText: "I don't get paid until next week 😭"},
        {id: "c2m3", type: "rcvd", order: "last", sender: "", msgText: "maybe it will last until next week?"},
        {id: "c2m4", type: "sent",  order: "last", sender: "", msgText: "but what if it doesn't 🥺"},
        {id: "c2m6", type: "sent",  order: "not-last", sender: "", msgText: "ughh no I think I'll just buy them today"},
        {id: "c2m6", type: "sent",  order: "last", sender: "", msgText: "because I can't miss another sale!!"},
    ]},

        // {id: "c2m5", type: "rcvd",  order: "last", sender: "Bella", msgText: "pictok.com/adf313"} ]},
        
        /* Nicole */ 
        {id: "c3", msgs: [{id: "c3m0", type: "rcvd", order: "not-last", sender: "", msgText: "Heyy"},
        {id: "c3m1", type: "rcvd", order: "last", sender: "", msgText: "Have you started your CBS project yet? "},
        {id: "c3m2", type: "sent", order: "not-last", sender: "", msgText: "no not yet :("},
        {id: "c3m3", type: "sent", order: "not-last", sender: "", msgText: "I still haven't decided on a topic"},
        {id: "c3m4", type: "rcvd",  order: "not-last", sender: "", msgText: "Same!!"},
        {id: "c3m5", type: "rcvd",  order: "last", sender: "", msgText: "There are soo many options 😭"} ]},
    
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

    /* handle closure issue with setTimeout */
    function useInterval(callback, delay) {
        const savedCallback = useRef();
       
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
       
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }
    
      if (msg.from === "Jess 🌺") {
        if (!startJessConv) {
            setStartJessConv(true);
        }
    }
 
    useInterval(() => {
            if (newMsgIndex < liveConv.length) {
                chats[msg.id].msgs.push(liveConv[newMsgIndex])
                setNewMsgIndex(newMsgIndex => newMsgIndex + 1)
                setChats(chats)
                setScrollAtBot()
                // chatContainerRef.current?.scrollIntoView();


                
                // updateContainerHeight();
            } else {
                setDelay(null);
                killBattery();
            }
    }, startJessConv? textDelay : null);

    const setScrollAtBot = () => {
        const element = chatContainerRef.current;

        if (element) {
          element.scrollTop = element.scrollHeight;
        } 

    }

    const killBattery = () => {
        setTimeout(() => {
            changeScreen(<Battery/>)
        }, 3000)
    }


    return (
        <div className="chatScreen screen">
            <div className="chatTop">
                <div className="chatTopContent">
                    <div className="msgBackBtn" 
                         onClick={() => {changeScreen(<MessageApp changeScreen={changeScreen} />); setStartJessConv(false);}}>
                        <div><IoIosArrowBack/></div></div>
                    <div className="headerContainer"><div className="profile"><HiUser className="profile-icon"/></div><p>{msg.from}</p></div>
                    <div><IoVideocamOutline className="phoneIcon" /></div>
                </div>
            </div>
            <div className="chatContent" id="chat" ref={chatContainerRef}>
                    {(chats[msg.id].msgs).map((msg) => (
                        <div key={msg.id} className="chat-div">
                        <MessageBubble id={msg.id}
                                        from={msg.sender} 
                                        text= {msg.msgText}
                                        type={msg.type}
                                        order={msg.order}/></div>
                    ))}
                    <div className="msg-ref" /> 
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