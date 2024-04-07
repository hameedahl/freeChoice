import CurrentDate from "../phoneParts/CurrentDate";
import Notification from "../Notification";
import MessageApp from "./MessageApp";

const LockScreen = ({changeScreen, currDate, currTime}) => {
    return (<div className="lockScreen screen">
        <CurrentDate/>
        <div className="content">
            <Notification icon= "" 
                        title = "Bella" 
                        subtitle = "Bella, Chris, Jess & Matt" 
                        content = "OMG did you guys see this??"
                        app = {<MessageApp changeScreen={changeScreen}/>}
                        changeScreen={changeScreen} />
        </div>
        
    </div> );
}
 
export default LockScreen;