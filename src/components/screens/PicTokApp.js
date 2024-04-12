import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

const PicTok = ({changeScreen}) => {
    var pathRoot = process.env.PUBLIC_URL + "/images/picTok"
    const posts = [
        {id: 1, user: "@jess", likes: "100", comments: "10", 
        caption: "Happy Spring!", img: "/spring.gif", isVideo: false},
        {id: 2, user: "@foodies", likes: "10K", comments: "1K", 
        caption: "What's your favorite burger place?", img:"/food.jpeg", isVideo: false},
        {id: 6, user: "@fitFocusOfficial", likes: "13K", comments: "125", 
        caption: "Discover the magic of yoga with FitFocus. Strengthen, balance, and find your calm. Start your yoga journey today! 🧘‍♂️💫 #FitFocus", img: "/yoga.jpeg", isVideo: false},
        {id: 3, user: "@stargazer21", likes: "1M", comments: "100K", 
        caption: "#eclipse2024", img: "/eclipse.jpg", isVideo: false},
        {id: 4, user: "@funnyVideos", likes: "100K", comments: "3K", 
        caption: "🤣", img: "/funny.gif", isVideo: false},
        {id: 5, user: "@travelGuide", likes: "13K", comments: "125", 
        caption: "paris always a pleasure <3", img: "/paris.mp4", isVideo: true},
    ]
    return (
        <div className="picTokApp screen">
            <h1>PicTok</h1>
            <div className="feed">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="imgBox">
                            {!post.isVideo && <img src={pathRoot + post.img} alt="" className="postImg" />}
                            {post.isVideo && <video loop autoPlay muted src={pathRoot + post.img} alt="" className="postImg" />}
                            <div className="imgCounts">
                                <span className="likes"><FaHeart className="postIcon"/><p>{post.likes}</p></span>
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
                <ul>
                    <li><FaCirclePlus/></li>
                    <li><div className="bell">
                        <p>10</p>
                        <IoNotificationsSharp/>
                    </div></li>
                    
                </ul>
            </div>
        </div>
    );
}
 
export default PicTok;