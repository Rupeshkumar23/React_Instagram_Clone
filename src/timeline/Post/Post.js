import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


function Post({ user, postImage, likes, timestamp }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar style={{ backgroundColor: '#ff4081', marginRight: '10px', borderRadius: '50%' }}>
            {/* {user.charAt(0).toUpperCase()} */}
            <img src={postImage} alt="UserAvatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post_image">
        <img src={postImage} alt="PostImage" />
      </div>
      <div className="post__footer">
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            {isLiked ? (
              <FavoriteIcon
                className={`postIcon liked`}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderIcon
                className={`postIcon ${isLiked ? "liked" : ""}`}
                onClick={handleLike}
              />
            )}
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post_iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <span className="like-count">{likeCount} likes</span>
      </div>
      <p style={{textAlign:'start' , }}>zuck Sharing an update on some of Meta's next generation infra to power new AI experiences…</p>
       <div  style={{cursor:"pointer"}}>
           <p style={{textAlign:"start" , color:"#A8A8A8"}}>View all 3,250 comments</p>
           <p style={{textAlign:"start" , color:"#A8A8A8"}}>more</p>
      <div className="text_A">
      <textarea placeholder="Add a comment..."></textarea>
      <span className="emoji" role="img" aria-label="smiley">☺</span>
    </div>
       </div>
    </div>
    
  );
}

export default Post;
