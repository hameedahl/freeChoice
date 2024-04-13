import { useEffect, useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Notification from "../Notification";
import { GiCrownCoin } from "react-icons/gi";
import LuckyTap from "./LuckyTap";


const FitFocus = ({changeScreen, pushNotif, setNotif}) => {
    const [showGoals, setGoals] = useState(false);
    const [showLog, setLogs] = useState(false);
    const [showDiscover, setDiscover] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [showShareMsg, setShowShareMsg] = useState(false);
    // envy thing
    // message from your friend
    useEffect(() => {
        setTimeout(() => {
            setNotif(<Notification
                iconColor = "#27b227" 
                iconImg = {<GiCrownCoin />} 
                title = "LuckyTap" 
                subtitle = "Surprise Gift Inside! 🎉" 
                content = "Tap here to reveal your surprise 🎁💰"
                app = {<LuckyTap changeScreen={changeScreen} 
                            pushNotif={pushNotif} 
                            setNotif={setNotif}/>}
                changeScreen={changeScreen} />)
            pushNotif(true)
        }, 10000)
    }, [showLog])

    const goals = () => {
        setGoals(true);
    }

    const log = () => {
        setLogs(true);
    }

    const discover = () => {
        setDiscover(true);
    }

    const handleClose = () => {
        setShowMsg(false);
        setGoals(false);
        setLogs(false);
        setDiscover(false);
    }

    const handleBtn = () => {
        setShowMsg(true);
        setShowShareMsg(true);
    }

    return (
        <div className="screen fitFocus darkBack">
            <h1>FitFocus<GiWeightLiftingUp/></h1>
            <h2>"Strive for progress. Not perfection"</h2>
            <ul className="fFmenu">
                <li onClick={() => (goals())}>Set New Goals</li>
                <li onClick={() => (log())}>Log Workouts</li>
                <li onClick={() => (discover())}>Discover Workouts</li>
            </ul>
            {showShareMsg && 
                <div className="celMsg">
                    <p>🎉Share your fitness update on PicTok!</p> <br />
                    <span>✅ Yes</span> <span>❌ Maybe Later</span>

                    </div>}
            {showGoals && <div className="goals fFWindow">
                <IoMdClose className="closeBtn" onClick={() => (handleClose())}/>
                <h3>Set A Goal 🏆</h3>
                <div className="fFWinContent">
                    <ul className="goalsList">
                        <li><input type="checkbox"/>Run a 5K Race</li>
                        <li><input type="checkbox"/>Achieve Weight Loss Milestone</li>
                        <li><input type="checkbox" defaultChecked/>Master a New Yoga Pose</li>
                        <li><input type="checkbox"/>Increase Daily Step Count</li>
                        <li><input type="checkbox"/>Complete a Fitness Challenge</li>
                    </ul>
                    {showMsg && <p>We've set daily remainders to help you stay on track! </p>}
                    <div className="ffBtn" onClick={() => (handleBtn())}>Set</div>
                </div>
            </div>}
            {showLog && <div className="log fFWindow">
                <IoMdClose className="closeBtn" onClick={() => (handleClose())}/>
                <h3>Log Workouts 🏋️‍♀️</h3>
                <div className="fFWinContent">
                    <ul className="goalsList">
                        <li><input type="checkbox"/>High-Intensity Interval Training (HIIT) Circuit</li>
                        <li><input type="checkbox"/>Strength Training with Resistance Bands</li>
                        <li><input type="checkbox" defaultChecked/>Yoga Flow for Stress Relief</li>
                        <li><input type="checkbox"/>Outdoor Running Challenge</li>
                        <li><input type="checkbox"/>Complete a Fitness Challenge</li>
                    </ul>
                    {showMsg && <p>Great Work! </p>}
                    <div className="ffBtn" onClick={() => (handleBtn())}>Log</div>
                </div>
            </div>}
            {showDiscover && <div className="discover fFWindow">
                <IoMdClose className="closeBtn" onClick={() => (handleClose())}/>
                <h3>Discover Workouts 📱</h3>
                <div className="fFWinContent disContent">
                    <div>Celebrity Trainer Series</div>
                    <p>Access exclusive workout routines and training tips from celebrity trainers, featuring popular exercises and fitness trends.</p>
                    <div>Outdoor Adventure Workouts</div>
                    <p>Discover adventurous workout routines inspired by outdoor activities like hiking, rock climbing, and kayaking, for a fun and dynamic fitness experience.</p>

                    <div>Bodyweight Workouts for Travelers</div>
                    <p>Access workout routines that require no equipment and can be done anywhere, ideal for travelers or those without access to a gym.</p>

                    <div>Sport-Specific Training Programs</div>
                    <p>Explore specialized training programs tailored to specific sports or activities, such as soccer, basketball, or martial arts, to enhance performance and skills.</p>

                </div>
            </div>}
        </div>
    );
}
 
export default FitFocus;