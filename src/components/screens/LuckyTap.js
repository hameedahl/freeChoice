import { useState } from "react";
import { FaCcMastercard } from "react-icons/fa";

const LuckyTap = ({changeScreen}) => {
    const [showPrize, setShowPrize] = useState(false)
    const [showSurvey, setShowSurvey] = useState(false)
    const questions = [
        {id: 1, ques: "What is your favorite color?", choices: ["Blue", "Red", "Green"]},
        {id: 2, ques: "What is your favorite color?", choices: ["Blue", "Red", "Green"]},

        // {id: 2, ques: "What is your favorite color?", choices: []},


    ]

    const handleGift = () => {
        setShowPrize(true)
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
                <h4>Answers a few questions to get your prize 🧠</h4> 
                <div className="survey-content prize-content">
                    {questions.map((question) => (
                        <ul className="question">
                            <h4>{question.ques}</h4>
                            <p>{question.choices[0]}</p>
                            <p>{question.choices[1]}</p>
                            <p>{question.choices[2]}</p>
                        </ul>
                    ))}
                    <div className="claimBtn prizeBtn">Claim Your Reward!</div>
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