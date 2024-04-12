const AppIcon = ({name, iconImg, changeScreen, screen, iconColor}) => {
    const handleClick = () => {
        if (screen != null) {
            changeScreen(screen);
        }
    }

    return ( 
        <div className="appIcon" onClick={() => (handleClick())}>
            <div className="appBox" style={{backgroundColor: iconColor}}>
                <div className="icon">{iconImg}</div>
            </div>
            <div className="name"><p>{name}</p></div>
        </div>
    );
}
 
export default AppIcon;