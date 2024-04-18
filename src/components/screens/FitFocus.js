import { useEffect, useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Notification from "../Notification";
import { GiCrownCoin } from "react-icons/gi";
import LuckyTap from "./LuckyTap";
import { PiVideo } from "react-icons/pi";
import { BiHealth } from "react-icons/bi";
import { PiCircleNotchBold } from "react-icons/pi";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoFootstepsSharp } from "react-icons/io5";
import { IoBarbell } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineForest } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";

const FitFocus = ({changeScreen, pushNotif, setNotif}) => {
    const [showGoals, setGoals] = useState(false);
    const [showLog, setLogs] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [showShareMsg, setShowShareMsg] = useState(false);
    const [pushedNotif, setPushedNotif] = useState(false);
    // make it any close button
    const notify = () => {
        if (!pushedNotif) {
            setPushedNotif(true)
            setTimeout(() => {
                setNotif(<Notification
                    iconColor = "#27b227" 
                    iconImg = {<GiCrownCoin />} 
                    title = "LuckyTap" 
                    subtitle = "Surprise Gift Inside! 🎉" 
                    content = "Tap here to reveal your reward 🎁💰"
                    app = {<LuckyTap changeScreen={changeScreen} 
                                pushNotif={pushNotif} 
                                setNotif={setNotif}/>}
                    changeScreen={changeScreen} />)
                pushNotif(true)
            }, 8000)
        }
    }

    const goals = () => {
        setGoals(true);
    }

    const log = () => {
        setLogs(true);
    }

    
    const handleClose = () => {
        setShowMsg(false);
        setGoals(false);
        setLogs(false);
    }

    const handleBtn = () => {
        setShowMsg(true);
        setShowShareMsg(true);
    }

    return (
        <div className="screen fitFocus darkBack">
            <div className="ffContent">
            <h1>FitFocus<GiWeightLiftingUp/></h1>
            <h2>"Strive for progress. Not perfection"</h2>
            <div className="summary">
                <div className="sumContent">
                    <div className="sumText">
                        <div><p style={{fontSize:"12px", color: "#c7ff43"}}>Hot Streak - 189 Days 🔥</p><p style={{fontSize:"19px"}}>Daily Steps Goal</p></div>
                    </div>
                    <div className="steps">
                        <PiCircleNotchBold style={{fontSize:"60px"}}/>
                        <p>13,500/15,500 <IoFootstepsSharp/></p>
                    </div>
                </div>
            </div>
            <h4 style={{fontSize:"12px", color:"#c7ff43", fontWeight:"bold", top: "70px"}}>Start a workout to keep your streak!</h4>
            <ul className="fFmenu">
                <li onClick={() => (goals())}>Set New Goals <GiLaurelsTrophy/></li>
                <li onClick={() => (log())}>Log Workouts <LuListTodo/></li>
            </ul>
            {showShareMsg && 
                <div className="celMsg">
                    <p>🎉Share your fitness update on PicTok!</p> <br />
                    <span>✅ Yes</span> <span>❌ Maybe Later</span>

                    </div>}
            <div className="discover">
                <div className="disTitle">Discover Workouts </div>
                <div className="disContent">
                    <div><FaRegStar color="#c7ff43"/> Celebrity Trainer Series <FaRegStar color="#c7ff43"/></div>
                        <p>Access exclusive workout routines and training tips from celebrity trainers, featuring popular exercises and fitness trends.</p>
                    <div><MdOutlineForest color="#c7ff43"/> Outdoor Adventure Workouts <MdOutlineForest color="#c7ff43"/></div>
                        <p>Discover adventurous workout routines inspired by outdoor activities like hiking, rock climbing, and kayaking, for a fun and dynamic fitness experience.</p>
                    <div><MdOutlineTravelExplore color="#c7ff43"/> Bodyweight Workouts for Travelers <MdOutlineTravelExplore color="#c7ff43"/></div>
                        <p>Access workout routines that require no equipment and can be done anywhere, ideal for travelers or those without access to a gym.</p>
                    <div><MdOutlineSportsBasketball color="#c7ff43"/> Sport-Specific Training Programs <MdOutlineSportsBasketball color="#c7ff43"/></div>
                        <p>Explore specialized training programs tailored to specific sports or activities, such as soccer, basketball, or martial arts, to enhance performance and skills.</p>
                </div>
            </div>
            {showGoals && <div className="goals fFWindow">
                <IoMdClose className="closeBtn" onClick={() => {handleClose(); notify();}}/>
                <h3>Set A Goal 🏆</h3>
                <div className="fFWinContent">
                    <ul className="goalsList">
                        <li><input type="checkbox" name="goal"/>Run a 5K Race</li>
                        <li><input type="checkbox" name="goal"/>Achieve Weight Loss Milestone</li>
                        <li><input type="checkbox" name="goal" defaultChecked/>Master a New Yoga Pose</li>
                        <li><input type="checkbox" name="goal"/>Increase Daily Step Count</li>
                        <li><input type="checkbox" name="goal"/>Complete a Fitness Challenge</li>
                    </ul>
                    {showMsg && <p>Great! We've set daily remainders to help you stay on track! </p>}
                    <div className="ffBtn" onClick={() => (handleBtn())}>Set</div>
                </div>
            </div>}
            {showLog && <div className="log fFWindow">
                <IoMdClose className="closeBtn" onClick={() => (handleClose())}/>
                <h3>Log Workouts 🏋️‍♀️</h3>
                <div className="fFWinContent">
                    <ul className="logList goalsList">
                        <li><input type="checkbox" name="workout"/>High-Intensity Interval Training (HIIT) Circuit <strong>60 minutes</strong></li>
                        <li><input type="checkbox" name="workout"/>Strength Training with Resistance Bands <strong>30 minutes</strong></li>
                        <li><input type="checkbox" name="workout" defaultChecked/>Yoga Flow for Stress Relief <strong>15 minutes</strong></li>
                        <li><input type="checkbox" name="workout"/>Outdoor Running Challenge <strong>35 minutes</strong></li>
                        <li><input type="checkbox" name="workout"/>Complete a Fitness Challenge <strong>65 minutes</strong></li>
                    </ul>
                    {showMsg && <p>Great Work! </p>}
                    <div className="ffBtn logBtn" onClick={() => (handleBtn())}>Log</div>
                </div>
            </div>}
            <div className="ffBottomBar">
                <div className="ffBB-content">
                    <div><PiSquaresFourFill/></div>
                    <div><IoBarbell/></div>
                    <div><PiVideo/></div>
                    <div><BiHealth/></div>
                </div>
            </div>
        </div>
        </div>

    );
}
 
export default FitFocus;