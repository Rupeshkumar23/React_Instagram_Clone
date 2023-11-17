/* eslint-disable no-unused-vars */

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useSelector } from "react-redux";
import user_Av from '../../Imgs/Tech_G.jpg';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
function Post({
  user,
  postImage,
  likes,
  comments1,
  timestamp,
  description,
  userAvatar,
  tick,
}) {
  const user1 = useSelector((state) => state.data.user.user);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isEmojiPickerVisible, setEmojiPickerVisibility] = useState(false);

  const emojiPickerRef = useRef(null);

  const addEmoji = (e) => {
    const sym = e.unified.split("_").map((el) => parseInt(el, 16));
    const emoji = String.fromCodePoint(...sym);
    setChosenEmoji(emoji);
    setComment(comment + emoji);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const addComment = async () => {
    const newComment = {
      postid: "7823131",
      username: user1.username,
      comment: comment,
      profile:
        "https://images.pexels.com/photos/2646841/pexels-photo-2646841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };

    setComments([...comments, newComment]);
    setComment("");
  };

  const handlecomment = () => {
    addComment();
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const toggleEmojiPickerVisibility = () => {
    setEmojiPickerVisibility(!isEmojiPickerVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        // Clicked outside the emoji picker, close it
        setEmojiPickerVisibility(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [emojiPickerRef]);

  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar
            style={{
              backgroundColor: "#fff",
              marginRight: "10px",
              borderRadius: "50%",
            }}
          >
            <img
              src={userAvatar}
              alt="UserAvatar"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Avatar>{" "}
          {user}
          {tick && (
            <img
              src={tick}
              alt="Verified"
              style={{
                width: "10%",
                height: "10%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
          • <span>{timestamp}</span>
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
              <FavoriteIcon className={`postIcon liked`} onClick={handleLike} />
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
      <p style={{ textAlign: "start" }}>{description}</p>

      <div style={{ cursor: "pointer" }}>
        <p style={{ textAlign: "start", color: "#A8A8A8" }}>more</p>
        <p style={{ textAlign: "start", color: "#A8A8A8" }}>
          View all {comments1} comments
        </p>

        {comments.map((comment, index) => (
          <p key={index} style={{ marginTop: '.5rem', display: 'flex', color: "#fff" }}>
            <img
              src={user_Av}
              alt="Verified"
              style={{
                width: "4%",
                height: "4%",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: ".5rem"
              }}
            />
            <b>{comment.username}</b><span style={{ marginLeft: '.4rem' }}>{comment.comment}</span>
          </p>
        ))}

        <div className="text_A">
          <textarea
            placeholder="Add a comment..."
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          {comment.trim() !== "" && (
            <span onClick={handlecomment} className="post_P">
              Post
            </span>
          )}
          <span
            className="emoji"
            role="img"
            aria-label="smiley"
            onClick={toggleEmojiPickerVisibility}
          >
            ☺
          </span>
          <div className="pick_emoji" ref={emojiPickerRef}>
            {isEmojiPickerVisible && (
              <Picker
                data={data}
                emojiSize={20}
                emojiButtonSize={28}
                onEmojiSelect={addEmoji}
                navPosition="top"
                previewPosition="none"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
