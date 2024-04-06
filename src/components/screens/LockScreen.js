import CurrentDate from "../phoneParts/CurrentDate";
import Notification from "../Notification";
import MessageApp from "./MessageApp";

const LockScreen = ({changeScreen, currDate, currTime}) => {

    return (<div className="lockScreen screen">
        <div className='dateTime'>
            <p className='date'>{currDate}</p>
            <p className='time'>{currTime}</p>
        </div>
        <div className="content">
            <Notification icon= "" 
                        title = "Alice" 
                        subtitle = "Alice, Bob, Chris" 
                        content = "OMG did you guys see this??"
                        app = {<MessageApp changeScreen={changeScreen}/>}
                        changeScreen={changeScreen} />
        </div>
        
    </div> );
}
 
export default LockScreen;