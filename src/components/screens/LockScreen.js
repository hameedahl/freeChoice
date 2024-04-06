import CurrentDate from "../phoneParts/CurrentDate";
import Notification from "../Notification";

const LockScreen = () => {

    return (<div className="lockScreen screen">
        <CurrentDate />
        <div className="content">
            <Notification icon= "" 
                        title = "Alice" 
                        subtitle = "Alice, Bob, Chris" 
                        content = "OMG did you guys see this??"
                        app = "msg" />
        </div>
        
    </div> );
}
 
export default LockScreen;