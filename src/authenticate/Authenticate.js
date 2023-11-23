import React, { useState } from "react";
import "./Authenticate.css";
import Login from "./Login";
import Signup from "./Signup";
import Crousel from "./Crousel ";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  const items = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified",
  ];
  const languages = [
    "English",
    "Español",
    "Deutsch",
    "中文",
    "日本語",
    "한국어",
    "Русский",
    "العربية",
    "Português",
    "Italiano",
    "Nederlands",
    "Svenska",
    "Türkçe",
    "हिंदी",
    "বাংলা",
    "తెలుగు",
    "मराठी",
    "தமிழ்",
    "اردو",
    "ગુજરાતી",
    "ಕನ್ನಡ",
    "ଓଡ଼ିଆ",
    "ਪੰਜਾਬੀ",
    "普通话",
    "广东话",
    "福建话",
    "上海话",
  ];
    const [selectedLanguage, setSelectedLanguage] = useState('English');
  
    const handleLanguageSelect = (event) => {
      setSelectedLanguage(event.target.value);
    };

  return (
    <>
     <div className="login_container">
    <div className="authenticate">
      <div className="auth_left">
        {/* <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        /> */}
          <Crousel/>
       
      </div>
      <div className="auth_right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth_more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
    </div>
    <div className="list_L">
      {items.map((item, index) => (
        <div key={index} className="list_item">
          {item}
        </div>
      ))}
    </div>
    <div className="dropdown_container">
      <select
        id="languages"
        value={selectedLanguage}
        onChange={handleLanguageSelect}
      >
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
        <span>© 2023 Instagram from Meta</span>
    </div>
    
    </>
  );
}

export default Authenticate;
