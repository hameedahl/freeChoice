import ChatScreen from "./screens/ChatScreen";

const MessageBox = ({msg, changeScreen}) => {
    return (
        <div className="messageBox" 
            onClick={() => (changeScreen(
                            <ChatScreen msg={msg} 
                                        changeScreen={changeScreen} 
                                        prevScreen={
                                            <MessageBox msg={msg}   
                                                        changeScreen={changeScreen} />}/>))}>
            <p className="msgFrom">{msg.from}</p>
            <p className="msgPrev">{msg.prev}</p>
        </div>
    );
}
 
export default MessageBox;