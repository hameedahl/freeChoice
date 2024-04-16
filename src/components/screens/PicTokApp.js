import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Notification from "../Notification";
import EventEnvy from "./EventEnvy";
import { MdEvent } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TiCompass } from "react-icons/ti";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";


const PicTok = ({changeScreen, pushNotif, setNotif}) => {
    var pathRoot = process.env.PUBLIC_URL + "/images/picTok"
    // add posts of partying and travel and shopping!!!

    const posts = [
        {id: 1, user: "@jess", likes: "100", comments: "10", 
        caption: "Happy Spring!", img: "/spring.gif", isVideo: false},
        {id: 7, user: "@scientificDigest", likes: "1K", comments: "90", 
        caption: "What was the last big decision you made?", img: "/sciD.jpg", isVideo: false},
        {id: 2, user: "@foodies", likes: "10K", comments: "1K", 
        caption: "What's your favorite burger place?", img:"/food.jpeg", isVideo: false},
        {id: 6, user: "@fitFocusOfficial", likes: "13K", comments: "125", 
        caption: "Discover the magic of yoga with FitFocus. Strengthen, balance, and find your calm. Start your yoga journey today! 🧘‍♂️💫 #FitFocus", img: "/yoga.jpeg", isVideo: false},
        {id: 8, user: "@tech&science", likes: "19K", comments: "2450", 
        caption: "This is your daily reminder to take a break from technology 🏖️", img: "/brainphone.jpg", isVideo: false},
        {id: 9, user: "@eventEnvy", likes: "100k", comments: "9K", 
        caption: "You just had to be there", img: "", isVideo: false},
        {id: 10, user: "@eventEnvy", likes: "35k", comments: "200", 
        caption: "You don't want to miss it 😏 ", img: "/tuftonias.jpeg", isVideo: false},
        {id: 3, user: "@stargazer21", likes: "1M", comments: "100K", 
        caption: "#eclipse2024", img: "/eclipse.jpg", isVideo: false},
        {id: 4, user: "@funnyVideos", likes: "100K", comments: "3K", 
        caption: "🤣", img: "/funny.gif", isVideo: false},
        {id: 12, user: "@bethMoore", likes: "20K", comments: "400",
        caption: "Beware of the framing effect! These products are the same, and yet one feels more appealing than the other...", img: "/framing.png", isVideo: false},
        {id: 5, user: "@travelGuide", likes: "13K", comments: "125", 
        caption: "paris always a pleasure <3", img: "/paris.mp4", isVideo: true},
        {id: 13, user: "@supplies4Kids", likes: "15k", comments: "20", 
        caption: "Thank you all for your generous donations 🥹! These will be put to good use✏️ Every donation counts, so please view the link in our bio if you want to make a difference! ", img: "/school.jpeg", isVideo: false},

        {id: 11, user: "@eventEnvy", likes: "35k", comments: "200", 
        caption: "Only a few days left! Tickets are going fast! 🎫", img: "/fling.jpg", isVideo: false},
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
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="imgBox">
                            {!post.isVideo && <img src={pathRoot + post.img} alt="" className="postImg" />}
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