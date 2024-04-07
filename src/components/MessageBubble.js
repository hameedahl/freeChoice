const MessageBubble = ({id, from, text, type, order}) => {
    return (
        <div key={id} data-time={from} className={`messages ${type}`}>
            <div className={`message ${order} msgText`}>{text}</div>
        </div>
    );
}
export default MessageBubble;