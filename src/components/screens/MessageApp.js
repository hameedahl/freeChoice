import MessageBox from "../MessageBox";

const MessageApp = ({changeScreen}) => {
    const messageList = [
        {id: 0, from: "Bella, Chris, Jess & Matt", prev: "Jess sent you a link"},
        {id: 1, from: "Jess", prev: "see you tomm..."},
        {id: 2, from: "Chris", prev: "What time are we...?"},
        {id: 3, from: "Bella", prev: "thank you <3"},
        {id: 4, from: "Matt", prev: "let me know..."},
        {id: 5, from: "30124", prev: "Your Grubhub order is here!"},
        {id: 6, from: "Mom", prev: "I'll be home in 10."},
    ];
    
    return (
        <div className="messageApp screen">
            <h1>Messages</h1>
            <ul className="msgList">
                {messageList.map((msg) => (
                    <li key={msg.id}><MessageBox msg={msg} changeScreen={changeScreen}/></li>
                ))}
            </ul>
        </div>
    );
}
 
export default MessageApp;