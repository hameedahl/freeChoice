import { useState } from "react";
import { FaCcMastercard } from "react-icons/fa";
import Notification from "../Notification";
import { GiPhotoCamera } from "react-icons/gi"; // picTok
import PicTok from "./PicTokApp";
import { IoIosArrowForward } from "react-icons/io";

const LuckyTap = ({changeScreen, pushNotif, setNotif}) => {
    const [showPrize, setShowPrize] = useState(false)
    const [showSurvey, setShowSurvey] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)

    const questions = [
        {id: 1, ques: "I am more likely to change my decision if I am given more options.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 2, ques: "I get easily distracted when my phone is around.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 3, ques: "Would you rather get $200 right now or $250 in 1 week?", choices: ["$200 right now", "Neutral", "$250 in a week"]},
        {id: 4, ques: "If I make an irrational decision, I am more forgiving of myself than if someone else made the same decision.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 5, ques: "I am impulsive and I tend to let my emotions affect my decision-making.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 6, ques: "I am more of a Homo economicus, making rational decisions by weighing all the relevant factors.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 7, ques: "I always jump at the site of a sale because I'm afraid I'll buy something at a higher price.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 8, ques: "I can easily tell when a company is trying to influence my decision.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 9, ques: "I make sure to use any coupon/promo I am given so it doesn't go to waste.", choices: ["Agree", "Neutral", "Disagree"]},
        {id: 10, ques: "I find myself scrolling countless hours through social media.", choices: ["Agree", "Neutral", "Disagree"]},
    ]

    const handleGift = () => {
        if (!showSurvey) {
            setShowPrize(true)
        }
    }

    const nextQuestion = () => {
        setQuestionIndex(questionIndex + 1);
        document.getElementsByClassName("ans")[0].checked = false;
        document.getElementsByClassName("ans")[1].checked = false;
        document.getElementsByClassName("ans")[2].checked = false;

    }

    const notify = () => {
        setQuestionIndex(questionIndex + 1)
        setTimeout(() => {
            setNotif(
            <Notification
                iconColor = "#e9155c" 
                iconImg = {<GiPhotoCamera />} 
                title = "PicTok" 
                subtitle = "Your friend @jess just posted" 
                content = "Be the first to comment!"
                app = {<PicTok changeScreen={changeScreen} 
                            pushNotif={pushNotif} 
                            setNotif={setNotif}/>}
                changeScreen={changeScreen}/>)
            pushNotif(true);
        }, 4000)
    }

    return (
        <div className="luckyTap screen">
            {/* <img src={process.env.PUBLIC_URL + "/images/mone.jpg"} alt="" /> */}
            <div className="luckyContent">
                <h1>Feeling Lucky?</h1>

           <h2>Don't miss out on your chance to unwrap something special! 🎉</h2>
            {showPrize && <div className="prizeReveal">
                <div className="prize-content">
                    <h4>Congratulations 💸</h4> 
                    <p>You won a <strong style={{color: "#edc638"}}>$500</strong> gift card! 💳</p>
                    <div className="prizeBtn" onClick={() => {setShowSurvey(true); setShowPrize(false);}} >Claim Your Reward!</div>
                </div>
            </div>}
            {showSurvey && <div className="survey prizeReveal">
            {(questionIndex !== questions.length) && <h4>Complete this survey to get your prize 🧠</h4>}
             {(questionIndex !== questions.length) && <h5>How much do you agree with the following statements?</h5>}
                <div className="survey-content prize-content">
                    <div className="question">
                        {(questionIndex < questions.length) && 
                        <>
                            <p><em>{questions[questionIndex].ques}</em></p><br />
                            <p><input type="radio" name={"ans"} className="ans"/> {questions[questionIndex].choices[0]}</p>
                            <p><input type="radio" name={"ans"} className="ans"/> {questions[questionIndex].choices[1]}</p>
                            <p><input type="radio" name={"ans"} className="ans"/> {questions[questionIndex].choices[2]}</p><br />
                            {(questionIndex !== questions.length - 1) &&  <div className="nextBtn" onClick={() => (nextQuestion())}><IoIosArrowForward/></div>}
                            {(questionIndex === questions.length - 1) && <div className="claimBtn prizeBtn" onClick={() => (notify())}>Claim Your Reward!</div>}
                        </>}
                        {(questionIndex >= questions.length) && 
                        <div className="tyMsg">
                            <h4>Thank you! Your response has been recorded 💰💰</h4>
                            <h5><span style={{color: "#fbd240"}}>$500</span> was added to your account ending in 1234!</h5> <br />
                            <h6>This survey was brought to you by Tech & Science Inc. For more information on cognition and decision making, visit our PicTok @tech&science</h6>
                        </div>}
                    </div>
                </div>
            </div>}
            <div className="gifts">
                <div onClick={() => handleGift()}>🎁</div>
                <div onClick={() => handleGift()}>🎁</div>
                <div onClick={() => handleGift()}>🎁</div>
            </div>
            <h3>Tap on a box to reveal what exciting reward you've received today. 💫</h3>
        </div>
        </div>

    );
}
 
export default LuckyTap;