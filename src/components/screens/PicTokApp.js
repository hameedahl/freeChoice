import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Notification from "../Notification";
import EventEnvy from "./EventEnvy";
import { MdEvent } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TiCompass } from "react-icons/ti";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";


const PicTok = ({changeScreen, pushNotif, setNotif}) => {
    var pathRoot = process.env.PUBLIC_URL + "/images/picTok"

    const posts = [
        {id: 1, user: "@jess", likes: "20", comments: "2", 
        caption: "Happy Spring!", img: "/spring.gif", isVideo: false},
        {id: 7, user: "@scientificDigest", likes: "1K", comments: "90", 
        caption: "What was the last big decision you made?", img: "/sciD.jpg", isVideo: false},
        {id: 6, user: "@fitFocusOfficial", likes: "13K", comments: "125", 
        caption: "Discover the magic of yoga with FitFocus. Strengthen, balance, and find your calm. Start your yoga journey today! 🧘‍♂️💫 #FitFocus", img: "/yoga.jpeg", isVideo: false},
        {id: 2, user: "@foodies", likes: "10K", comments: "1K", 
        caption: "What's your favorite burger place? 🍔 Use our code FOODIE4LIFE and get 20% off your next purchase! Only 2 days left ⏰, so act fast 🏃!", img:"/food.jpeg", isVideo: false},
        {id: 14, user: "@tech&science", likes: "35k", comments: "200", 
        caption: "Technology can help with decision-making, but may also introduce biases", img: "/decTech.png", isVideo: false},
        {id: 10, user: "@eventEnvy", likes: "35k", comments: "200", 
        caption: "You don't want to miss it 😏 ", img: "/tuftonias.jpeg", isVideo: false},
        {id: 3, user: "@stargazer21", likes: "1M", comments: "100K", 
        caption: "#eclipse2024", img: "/eclipse.jpg", isVideo: false},
        {id: 19, user: "@hameedah", likes: "1400", comments: "100", 
        caption: "Just got this uber eats notification and it looks a lot like loss aversion. Thoughts? @tech&Science", img: "/uber.webp", isVideo: false},
        {id: 4, user: "@funnyVideos", likes: "100K", comments: "3K", 
        caption: "🤣", img: "/funny.gif", isVideo: false},
        {id: 12, user: "@bethMoore", likes: "20K", comments: "400",
        caption: "Beware of the framing effect! Although these products are the same, one feels more appealing than the other...", img: "/framing.jpeg", isVideo: false},
        {id: 5, user: "@travelGuide", likes: "13K", comments: "125", 
        caption: "Paris always a pleasure <3. Thank you @Delta for the amazing trip! Where should I go next with my Delta SkyMiles Credit Card? ✈️", img: "/paris.mp4", isVideo: true},
        {id: 9, user: "@theoryOfTheDay", likes: "18k", comments: "90", 
        caption: "Are you a rational thinker?", img: "/rational.jpg", isVideo: false},
        {id: 11, user: "@eventEnvy", likes: "35k", comments: "200", 
        caption: "Only a few days left! Tickets are going fast! 🎫", img: "/fling.jpg", isVideo: false},
        {id: 16, user: "@cookingWithSam", likes: "105k", comments: "1201", 
        caption: "I just spent 2 hours in the grocery store trying to decide what pasta sauce to buy 😅 #choiceoverload", img: "/sauce.webp", isVideo: false},
        {id: 17, user: "@tech&Science", likes: "25k", comments: "800", 
        caption: "A time-limited offer with a countdown clock triggering FOMO. Who can resist? ", img: "/lossAversion.png", isVideo: false},
        {id: 15, user: "@partyCentral", likes: "100k", comments: "3002", 
        caption: "Our best event thus far! If you weren't here, where were you 🪩??", img: "/party.jpeg", isVideo: false},
        {id: 18, user: "@fitFocusOfficial", likes: "19K", comments: "300", 
        caption: "📢 Sign up for a free trial of our new premium membership! Get access to our most popular packages and more! See you there! 🧘‍♂️💫", img: "/rewards.jpeg", isVideo: false},
        {id: 13, user: "@supplies4Kids", likes: "15k", comments: "20", 
        caption: "Thank you all for your generous donations 🥹! These will be put to good use✏️ Every donation counts, so please view the link in our bio if you want to make a difference! ", img: "/school.jpeg", isVideo: false},
        {id: 8, user: "@tech&science", likes: "19K", comments: "2450", 
        caption: "This is your daily reminder to take a break from technology 🏖️", img: "/brainphone.jpg", isVideo: false},
    ]

    const stories = [
        {id: 1, user: "jess", color: "purple", img: "", isVideo: false},
        {id: 2, user: "tech&science", color: "cyan", img: "", isVideo: false},
        {id: 4, user: "foodies ", color: "red", img: "", isVideo: false},
        {id: 3, user: "fitFocusOfficial", color: "#c7ff43", img: "", isVideo: false},
    ]

    const notify = () => {
        setTimeout(() => {
            setNotif(
            <Notification
                iconColor = "#da3b3b" 
                iconImg = {<MdEvent/>} 
                title = "EventEnvy" 
                subtitle = "Don't Miss Out! Exciting Event Alert 🚀" 
                content = "Open for more details 💃🪩🕺"
                app = {<EventEnvy changeScreen={changeScreen} 
                            pushNotif={pushNotif} 
                            setNotif={setNotif}/>}
                changeScreen={changeScreen}/>)
            pushNotif(true);
        }, 2000)
    }

    const handleScroll = (e) => {
        const atBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

        if (atBottom) {
            notify();
        }
    }

    const handleLike = (e) => {
        if (e.target.classList.contains("liked")) {
            e.target.classList.add("not-liked");
            e.target.classList.remove("liked");
        } else {
            e.target.classList.remove("not-liked");
            e.target.classList.add("liked");
        }
    }

    return (
        <div className="picTokApp screen">
            <h1>PicTok</h1>
            <div className="feed" onScroll={(e) => handleScroll(e)}>
                <div className="storiesTab">
                    {stories.map((story) => (
                        <div key={story.id} className="picTokProfile">
                            <div className="profileOutline"><div className="storyProfile" style={{backgroundColor: story.color}}></div></div>
                            <div className="user">{story.user}</div>
                        </div>
                    ))}
                </div>
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="imgBox">
                            {!post.isVideo && <img src={pathRoot + post.img} alt="" className="postImg" loading="lazy" />}
                            {post.isVideo && <video loop autoPlay muted src={pathRoot + post.img} alt="" className="postImg" />}
                            <div className="imgCounts">
                                <span className="likes"><FaHeart className="postIcon not-liked" onClick={(e) => (handleLike(e))} /><p>{post.likes}</p></span>
                                <span className="comments"><FaComment className="postIcon"/><p>{post.comments}</p></span>
                                <span className="shareBtn"><FaShare className="postIcon"/><p>Share</p></span>
                            </div>
                        </div>
                        <div className="postInfo">
                            <p className="postUser">{post.user}</p>
                            <p className="postCaption">{post.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bottomMenu">
                <div className="bottomMenu-content">
                    <div><GoHomeFill /></div>
                    <div><TiCompass /></div>
                    <div><MdOutlineAddBox/></div>
                    <div>
                        <div className="bell">
                            <p className="bell-num">100</p>
                            <FaRegHeart/>
                        </div>
                    </div>
                        <div className="msg-picTok">
                            <p className="msg-num">10</p>
                            <AiOutlineMessage />
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default PicTok;