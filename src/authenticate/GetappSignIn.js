import React from "react";
import "./Login.css";
import windows from "../Imgs/Micro.png";
import playstore from "../Imgs/play.png";

const GetappSignIn = () => {
  const playstoreUrl ='https://tinyurl.com/56ms2d9v'
  const Microsoft='https://tinyurl.com/2t8fc4xv'
  return (
    <div>
      <div className="loginPage_downloadSection">
        <div>Get the app.</div>
        <div className="loginPage_option">
        <a href={playstoreUrl} target="_blank" rel="noopener noreferrer">
      <img
        className="loginPage_dwimg play"
        src={playstore}
        width="136px"
        alt="play"
      />
    </a>
    <a href={Microsoft} target="_blank" rel="noopener noreferrer">
          <img
            className="loginPage_dwimg play"
            src={windows}
            width="136px"
            alt="app"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetappSignIn;
