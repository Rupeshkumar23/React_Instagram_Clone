import React from "react";
import "./Login.css";
import windows from "../Imgs/Micro.png";
import playstore from "../Imgs/play.png";

const GetappSignIn = () => {
  return (
    <div>
      <div className="loginPage_downloadSection">
        <div>Get the app.</div>
        <div className="loginPage_option">
          <img
            className="loginPage_dwimg play"
            src={playstore}
            width="136px"
            alt="play"
          />
          <img
            className="loginPage_dwimg play"
            src={windows}
            width="136px"
            alt="app"
          />
        </div>
      </div>
    </div>
  );
};

export default GetappSignIn;
