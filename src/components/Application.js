const Application = ({name, iconImg, changeScreen, screen, iconColor}) => {
    return ( 
        <div className="app" onClick={() => (changeScreen(screen))}>
            <div className="appBox" style={{backgroundColor: iconColor}}>
                <div className="icon">{iconImg}</div>
            </div>
            <div className="name"><p>{name}</p></div>
        </div>
    );
}
 
export default Application;