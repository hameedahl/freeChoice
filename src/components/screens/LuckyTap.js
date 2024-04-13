import { useState } from "react";
import { FaCcMastercard } from "react-icons/fa";
import Notification from "../Notification";
import { GiPhotoCamera } from "react-icons/gi"; // picTok
import PicTok from "./PicTokApp";
import { IoIosArrowForward } from "react-icons/io";

const LuckyTap = ({changeScreen, pushNotif, setNotif}) => {
    const [showPrize, setShowPrize] = useState(false)
    const [showSurvey, setShowSurvey] = useState(false)
    const [showEndMsg, setShowEndMsg] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)

    const questions = [
        {id: 1, ques: "I am more likely to change my decision if I am given more options (ie. rational choice theory)", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 2, ques: "I get easily distracted when my phone is around", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 3, ques: "Would you rather get $200 right now or $250 in 1 week?", choices: ["$200 right now", "Neutral", "$250 in a week"]}

    ]

    const handleGift = () => {
        setShowPrize(true)
    }

    const notify = () => {
        setQuestionIndex(questionIndex + 1)
        setShowEndMsg(true);
        setTimeout(() => {
            setNotif(
            <Notification
                iconColor = "#e9155c" 
                iconImg = {<GiPhotoCamera />} 
                title = "PicTok" 
                subtitle = "Your friend @jess jut posted" 
                content = "Be the first to comment!"
                app = {<PicTok changeScreen={changeScreen} 
                            pushNotif={pushNotif} 
                            setNotif={setNotif}/>}
                changeScreen={changeScreen}/>)
            pushNotif(true);
        }, 2000)
    }

    return (
        <div className="luckyTap screen">
            <h1>Feeling Lucky?</h1>
            <h2>Don't miss out on your chance to unwrap something special! 🎉</h2>
            {showPrize && <div className="prizeReveal">
                <div className="prize-content">
                    <h4>Congratulations 💸</h4> 
                    <p>You won a <strong>$500</strong> gift card! <FaCcMastercard/></p>
                    <div className="prizeBtn" onClick={() => (setShowSurvey(true))} >Claim Your Reward!</div>
                </div>
            </div>}

            {showSurvey && <div className="survey prizeReveal">
             <h4>Complete this survey to get your prize 🧠</h4>
             {(questionIndex !== questions.length) && <h5>How much do you agree with the following statements?</h5>}
                <div className="survey-content prize-content">
                    <div className="question">
                        {(questionIndex < questions.length) && 
                        <>
                            <p><em>{questions[questionIndex].ques}</em></p><br />
                            <p><input type="radio" name="ans"/> {questions[questionIndex].choices[0]}</p>
                            <p><input type="radio" name="ans"/> {questions[questionIndex].choices[1]}</p>
                            <p><input type="radio" name="ans"/> {questions[questionIndex].choices[2]}</p><br />
                            {(questionIndex !== questions.length - 1) &&  <div className="nextBtn" onClick={() => (setQuestionIndex(questionIndex + 1))}><IoIosArrowForward/></div>}
                            {(questionIndex === questions.length - 1) && <div className="claimBtn prizeBtn" onClick={() => (notify())}>Claim Your Reward!</div>}
                        </>}
                        {(questionIndex >= questions.length) && 
                        <>
                            <h4>Thank you! Your Response has been recorded</h4>
                            <h5>$500 was added to your account ending in 1234!</h5> <br />
                            <h6>This survey was brought to you by ...For more information on cognition, our PicTok @bbh</h6>
                        </>}
                    </div>

                    {/* {questions.map((question) => (
                        <div key={question.id} className="question">
                            <p>{question.ques}</p>
                            <p>A. {question.choices[0]}</p>
                            <p>B. {question.choices[1]}</p>
                            <p>C. {question.choices[2]}</p>
                        </div>
                    ))}
                    {showEndMsg && <h5>$500 was added to your account!</h5>}
                    <div className="claimBtn prizeBtn" onClick={() => (notify())}>Claim Your Reward!</div> */}
                </div>
            </div>}
            <div className="gifts">
                <div onClick={() => handleGift()}>🎁</div>
                <div onClick={() => handleGift()}>🎁</div>
                <div onClick={() => handleGift()}>🎁</div>
            </div>
            <h3>Tap on a box to reveal what exciting reward you've received today. 💫</h3>
        </div>
    );
}
 
export default LuckyTap;