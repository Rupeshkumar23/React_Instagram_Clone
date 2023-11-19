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
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Modal from "react-modal";
import Emoji1 from "../../Imgs/Emoji.png";
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
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isEmojiPickerVisible, setEmojiPickerVisibility] = useState(false);

  const emojiPickerRef = useRef(null);
  const emojiPickerRef_M = useRef(null);

  const handleShowmodal = () => {
    setmodalIsOpen(true);
  };

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
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        // Clicked outside the emoji picker, close it
        setEmojiPickerVisibility(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
            <ChatBubbleOutlineIcon
              onClick={handleShowmodal}
              className="postIcon"
            />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post_iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <span className="like-count">{likeCount} likes</span>
      </div>

      {/* <Modal></Modal> */}

      <Modal
        style={{ overlay: { backgroundColor: "#2e2b2bc7" } }}
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        className={"modalclassNameforAPost"}
      >
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1.3 }}>
            <img
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
              src={postImage}
              alt="A_v"
            />
          </div>
          <div style={{ flex: 1, height: "90vh" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 10,
                  }}
                >
                  <img
                    src={userAvatar}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="A_V"
                  />
                  <div style={{ paddingLeft: 10 }}>
                    <p style={{ marginBottom: 5 }}>{user}</p>
                  </div>
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
                </div>
                <div style={{ marginBottom: "5px" }}>
                  <MoreHorizIcon />
                </div>
              </div>

              <hr
                style={{
                  border: "none",
                  borderRadius: "10px",
                  height: "1px",
                  marginTop: "13px",
                  marginLeft: "5px",
                  background: "#2727279b",
                }}
              />

              <div className="scrollable-div">
                {comments.map((item, id) => (
                  <div style={{ display: "flex", marginLeft: 30 }}>
                    <img
                      key={id}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginTop: 20,
                      }}
                      alt="A_V"
                    />
                    <div style={{ marginLeft: 10 }}>
                      <p style={{ marginTop: 20 }}>{item.username}</p>
                      <p style={{ marginTop: 10 }}>{item.comment}</p>
                      <p style={{ color: "#A8A8A8", marginTop: 5 }}>1d</p>
                    </div>
                  </div>
                ))}

                <div style={{ display: "flex", marginTop: 10, marginLeft: 30 }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: -1,
                    }}
                    alt="A_V"
                  />
                  <div style={{ marginLeft: 20 }}>
                    <p>Suman</p>
                    <p style={{ marginTop: 8 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore hic blanditiis asperiores sint, odit odio nemo
                      dolore reiciendis necessitatibus assumenda corporis.
                      Corporis doloribus aspernatur eligendi, praesentium
                      delectus quam reiciendis labore.
                    </p>
                    <p style={{ color: "#A8A8A8", marginTop: 10 }}>1d</p>
                  </div>
                </div>

                <div style={{ display: "flex", marginTop: 10, marginLeft: 30 }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: -1,
                    }}
                    alt="A_V"
                  />
                  <div style={{ marginLeft: 20 }}>
                    <p>Suman</p>
                    <p style={{ marginTop: 15 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore hic blanditiis asperiores sint, odit odio nemo
                      dolore reiciendis necessitatibus assumenda corporis.
                      Corporis doloribus aspernatur eligendi, praesentium
                      delectus quam reiciendis labore.
                    </p>
                    <p style={{ color: "#A8A8A8", marginTop: 10 }}>1d</p>
                  </div>
                </div>

                <div style={{ display: "flex", marginLeft: 30 }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: -1,
                    }}
                    alt="A_V"
                  />
                  <div style={{ marginLeft: 20 }}>
                    <p>Suman</p>
                    <p style={{ marginTop: 15 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore hic blanditiis asperiores sint, odit odio nemo
                      dolore reiciendis necessitatibus assumenda corporis.
                      Corporis doloribus aspernatur eligendi, praesentium
                      delectus quam reiciendis labore.
                    </p>
                    <p style={{ color: "#A8A8A8", marginTop: 10 }}>1d</p>
                  </div>
                </div>

                <div style={{ display: "flex", marginLeft: 30 }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: -1,
                    }}
                    alt=""
                  />
                  <div style={{ marginLeft: 20 }}>
                    <p>Suman</p>
                    <p style={{ marginTop: 15 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore hic blanditiis asperiores sint, odit odio nemo
                      dolore reiciendis necessitatibus assumenda corporis.
                      Corporis doloribus aspernatur eligendi, praesentium
                      delectus quam reiciendis labore.
                    </p>
                    <p style={{ color: "#A8A8A8", marginTop: 10 }}>1d</p>
                  </div>
                </div>
              </div>
            </div>
            <hr
              style={{
                border: "none",
                borderRadius: "10px",
                height: "1px",
                marginTop: "13px",
                marginLeft: "5px",
                background: "#2727279b",
              }}
            />

            <div style={{ marginLeft: 20, marginTop: 0 }}>
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
                    <ChatBubbleOutlineIcon
                      onClick={handleShowmodal}
                      className="postIcon"
                    />
                    <TelegramIcon className="postIcon" />
                  </div>
                  <div className="post_iconSave">
                    <BookmarkBorderIcon className="postIcon" />
                  </div>
                </div>
                <span style={{ marginLeft: 11 }} className="like-count">
                  {likeCount} likes
                </span>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "#A8A8A8",
                  marginBottom: "10px",
                  marginLeft: "10px",
                  marginTop: 10,
                }}
              >
                1 DAY AGO
              </p>
              <hr
                style={{
                  border: "none",
                  borderRadius: "10px",
                  height: "1px",
                  marginTop: "13px",
                  marginLeft: "5px",
                  background: "#2727279b",
                }}
              />
              <div className="text_A" style={{ marginTop: "10px" }}>
                <img
                  className="emoji"
                  onClick={toggleEmojiPickerVisibility}
                  src={Emoji1}
                  style={{
                    width: 24,
                    marginTop: "7px",
                    marginLeft: "18px",
                    height: 24,
                    cursor: "pointer",
                  }}
                  alt="Emoji"
                />
                <textarea
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={handleCommentChange}
                ></textarea>
                {comment.trim() !== "" && (
                  <span
                    onClick={handlecomment}
                    style={{
                      marginTop: "10px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    className="post_P"
                  >
                    Post
                  </span>
                )}

                <div className="pick_emoji" ref={emojiPickerRef_M}>
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
        </div>
      </Modal>
      {/* <Modal></Modal> */}

      <p style={{ textAlign: "start" }}>{description}</p>

      <div style={{ cursor: "pointer" }}>
        <p style={{ textAlign: "start", color: "#A8A8A8" }}>more</p>
        <p
          onClick={handleShowmodal}
          style={{ textAlign: "start", color: "#A8A8A8" }}
        >
          View all {comments1} comments
        </p>

        {comments.map((comment, index) => (
          <p
            key={index}
            style={{ marginTop: ".5rem", display: "flex", color: "#fff" }}
          >
            <img
              src={user1.avatarURL}
              alt="Verified"
              style={{
                width: "4%",
                height: "4%",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: ".5rem",
              }}
            />
            <b>{comment.username}</b>
            <span style={{ marginLeft: ".4rem" }}>{comment.comment}</span>
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
