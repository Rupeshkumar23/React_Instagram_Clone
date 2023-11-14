import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import Img1 from '../Imgs/Marvel.jpg'
import Img2 from '../Imgs/Sony_Music.jpg'

function Suggestions() {
  return (
    <>
    <div className="suggestions">
      <div className="suggestions_title">Suggestions for you</div>
      <div className="suggestions_usernames">
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
            <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/65?img=12" />
            </span>
            <div className="username_info">
              <span className="username">Ramkumar</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
            <Avatar alt="Cindy Baker" src={Img2} style={{backgroundImage:'center', objectFit:'cover'}} />
            </span>
            <div className="username_info">
              <span className="username">sonymusic_south</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
            <Avatar alt="Cindy Baker" src={Img1}  style={{backgroundImage:'center', objectFit:'cover'}}/>
            </span>
            <div className="username_info">
              <span className="username">marvel</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
            <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/65?img=13" />
            </span>
            <div className="username_info">
              <span className="username">John</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      </div>
    </div>
    <div className="Foot_About">
      <ul>
        <li>About</li>.
        <li>Help</li>.
        <li>Press</li>.
        <li>API</li>.
        <li>Jobs</li>.
        <li>Privacy</li>.
        <li>Terms</li>.
        <li>Locations</li>.
        <li>Language</li>.
        <li>Meta Verified</li>
      </ul>
    </div>
    <div className="copy_r">
      © 2023 INSTAGRAM FROM META 
    </div>
    </>
  );
}

export default Suggestions;
