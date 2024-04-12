import AppIcon from "./AppIcon";

const Notification = ({iconColor, iconImg, title, subtitle, content, app, changeScreen}) => {
    const handleClick = () => {
        if (app != null) {
            changeScreen(app);
        }
    }

    return (
    <div className="notification" onClick={() => {handleClick()}}>
        <AppIcon name="" 
                 iconImg={iconImg} 
                 changeScreen={null}
                 screen= {null}
                 iconColor={iconColor}/>
        <div className="text">
            <p className="notifTitle">{title}</p>
            <p className="notifSubtitle">{subtitle}</p>
            <p className="notifContent">{content}</p>
        </div>
    </div>);
}
 
export default Notification;