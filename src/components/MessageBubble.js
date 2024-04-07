const MessageBubble = ({id, from, text, type}) => {
    return (
        <div key={id} data-time={from} className={`msg ${type}`}>
            <div className="msgText">{text}</div>
        </div>
    );
}
// key={id}
export default MessageBubble;