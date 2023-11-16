/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Img_1 from "../Imgs/Sun.png";
import Img_2 from "../Imgs/Tech.png";
import Img_3 from "../Imgs/Go_S.png";
import Img_4 from "../Imgs/V_J.png";
import Img_5 from "../Imgs/Rock_S.png";
import Img_6 from "../Imgs/Js.png";
import Img_7 from "../Imgs/Rockstar_Games.png";
import Img_8 from "../Imgs/Sun_news.png";
import Img_9 from "../Imgs/gowsami.png";
import Img_10 from "../Imgs/Tech_G.jpg";
import Img_11 from "../Imgs/GTA_6.jpg";
import tick from "../Imgs/icons8-instagram-verified.svg";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "rockstargames",
      userAvatar: Img_7,
      postImage: Img_5,
      likes: 970,
      comments: 520,
      description:
        "Red Dead Redemption for Nintendo Switch and PlayStation 4 is now available from the Rockstar Store and other select retailers for both digital download and physical purchase.Get it now at store.rockstargames.com",
      timestamp: "2d",
      tickmark: tick,
    },
    {
      id: 2,
      user: "actorvijay",
      userAvatar: Img_4,
      postImage: Img_4,
      likes: 2023,
      comments: 1500,
      description: "Hello Nanbas and Nanbis 😊",
      timestamp: "1d",
      tickmark: tick,
    },
    {
      id: 3,
      user: "sunnews",
      userAvatar: Img_8,
      postImage: Img_1,
      likes: 800,
      comments: 1200,
      description:
        "நன்றி.. நன்றி.. நன்றி..! ❤️To Subscribe: https://www.youtube.com/sunnewstamil",
      timestamp: "5d",
      tickmark: tick,
    },
    {
      id: 4,
      user: "gowsami.dev",
      userAvatar: Img_9,
      postImage: Img_3,
      likes: 50,
      comments: 54,
      description:
        "Javascript string methods🔥Post by: @decode_now @code_tune 🎯Hit the like button 💬Share your thoughts in the comments! 📁Save for future reference Till then Happy Coding 👨🏻‍💻 !!!------- #javascript #js #angularjs #reactjs #angular #web #webdeveloper #html #css #css3 #html5 #frontend #frontenddeveloper #vuejs #expressjs #nodejs #coder #coding #programmer #programming #software # #informationtechnology #java #python # php #codinggirl",
      timestamp: "6d",
      tickmark: false,
    },
    {
      id: 5,
      user: "Techie Programmer",
      userAvatar: Img_10,
      postImage: Img_2,
      likes: 180,
      comments: 340,
      description:
        "60 front end ideas for web developers #programming #linux #python #google #data #webdev #google",
      timestamp: "5d",
      tickmark: false,
    },
    {
      id: 6,
      user: "gowsami.dev",
      userAvatar: Img_9,
      postImage: Img_6,
      likes: 100,
      comments: 120,
      description:
        "Post by: @new_javascript, , , , , , , , , , , , #javascript #js #angularjs #reactjs #angular #web #webdeveloper #html #css #css3 #html5 #frontend #frontenddeveloper #vuejs #expressjs #nodejs #coder #coding #programmer #programming #software # #informationtechnology #java #python # php #codinggirl Removal of the post could be requested by the Copyright Holder of the property through DM. ©️ No copyright infringement intended.",
      timestamp: "6d",
      tickmark: false,
    },
    {
      id: 7,
      user: "rockstargames",
      userAvatar: Img_7,
      postImage: Img_11,
      likes: 400,
      comments: 1000,
      description:
        "We are very excited to let you know that in early December, we will release the first trailer for the next Grand Theft Auto.",
      timestamp: "2d",
      tickmark: tick,
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          {posts.map((post, id) => (
            <Post
              key={id}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              description={post.description}
              timestamp={post.timestamp}
              userAvatar={post.userAvatar}
              comments={post.comments}
              tick={post.tickmark}
            />
          ))}
        </div>
      </div>
      <div className="timeline_right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
