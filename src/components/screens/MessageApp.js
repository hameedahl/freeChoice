import MessageBox from "../MessageBox";

const MessageApp = ({changeScreen, pushNotif, setNotif}) => {
    const messageList = [
        {id: 1, from: "Jess 🌺", prev: "did you see eventEnvy? we have to go!!"},
        {id: 0, from: "Nicole 💫 & Jess 🌺", prev: "Jess sent you a link"},
        {id: 2, from: "Sister 👭", prev: "because I can't miss another sale!!"},
        {id: 3, from: "Nicole 💫", prev: "There are soo many options 😭"},
        {id: 4, from: "30124", prev: "Your Grubhub order is here!"},
        {id: 5, from: "Mom ❤️", prev: "Call me."},
    ];
    
    return (
        <div className="messageApp screen">
            <h1>Messages</h1>
            <ul className="msgList">
                {messageList.map((msg) => (
                    <li key={msg.id}><MessageBox msg={msg} 
                                                 changeScreen={changeScreen}
                                                 pushNotif={pushNotif} 
                                                 setNotif={setNotif}/></li>
                ))}
            </ul>
        </div>
    );
}
 
export default MessageApp;