/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Img_1 from '../Imgs/Sun.png'
import Img_2 from '../Imgs/Tech.png'
import Img_3 from '../Imgs/Go_S.png'
import Img_4 from '../Imgs/V_J.png'
import Img_5 from '../Imgs/Rock_S.png'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "rockstargames",
      postImage:
      Img_5,
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "actorvijay",
      postImage:Img_4,
      likes: 432,
      timestamp: "1d",
    },
    {
      user: "sunnews",
      postImage:Img_1,
      likes: 140,
      timestamp: "5d",
    },
    {
      user: "gowsami.dev",
      postImage:Img_3,
      likes: 14,
      timestamp: "6d",
    },
    {
      user: "Techie Programmer",
      postImage:Img_2,
      likes: 14,
      timestamp: "5d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          {posts.map((post,id) => (
            <Post
              key={id}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
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
