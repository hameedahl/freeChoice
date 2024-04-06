const Notification = ({icon, title, subtitle, content, app}) => {
    const handleClick = () => {
        
    }

    return (<div className="notification" onClick={handleClick}>
        <img src={icon} alt="" className="notifImg"/>
        <div className="text">
            <p className="notifTitle">{title}</p>
            <p className="notifSubtitle">{subtitle}</p>
            <p className="notifContent">{content}</p>
        </div>
    </div>);
}
 
export default Notification;