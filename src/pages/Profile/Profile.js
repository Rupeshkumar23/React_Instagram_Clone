import React from "react";
import "./Profile.css";
import SettingIcon from "../../Imgs/Settingslogo.png";
import ExplorePost from "../../pages/ExplorePost/ExplorePost";
import { PostExplore } from "../../pages/data";
import Sidenav from "../../navigation/Sidenav";
import useAuth from "../../features/custom-hooks/useAuth";

import { Skeleton } from "@mui/material";
export default function Profile() {
  const { currentUser } = useAuth();
  return (
    <div>
      <div>
        <div className="homesubcontainer">
          <div className="homesidebar">
            <Sidenav />
          </div>
          <div className="Profilerightbar">
            <div className="subProfilerightbar">
              <div>
                {currentUser && currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                ) : (
                  <Skeleton
                    variant="circular"
                    width={150}
                    height={150}
                    style={{ backgroundColor: "#424242" }}
                  />
                )}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {currentUser && currentUser.displayName ? (
                    <p style={{ marginLeft: 100 }}>{currentUser.displayName}</p>
                  ) : (
                    <Skeleton
                      width={50}
                      style={{ backgroundColor: "#424242", marginLeft: 100 }}
                    />
                  )}
                  <button
                    style={{
                      paddingLeft: 10,
                      marginLeft: 20,
                      paddingRight: 20,
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit profile
                  </button>
                  <img
                    src={SettingIcon}
                    style={{ marginLeft: 20, cursor: "pointer" }}
                    alt=""
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginLeft: 100 }}>1 Post</p>
                  <p style={{ marginLeft: 40 }}>200k Followers</p>
                  <p style={{ marginLeft: 40 }}>10k Following</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    style={{ marginLeft: 100, marginTop: 10, fontWeight: 600 }}
                  >
                    User description
                  </p>
                </div>
              </div>
            </div>
            <hr className="line_hr" />
            <div className="css-odjnfu">
              <div className="css-ubxb0p">
                <div className="css-bk9fzy">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"></path>
                  </svg>
                </div>
                <p >Posts</p>
              </div>
              <div className="css-12eiaa3">
                <div className="css-bk9fzy">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                  </svg>
                </div>
                <p >Saved</p>
              </div>
              <div className="css-12eiaa3">
                <div className="css-bk9fzy">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    font-weight="bold"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                  </svg>
                </div>
                <p >Likes</p>
              </div>
            </div>

            <div className="postContainerForProfile">
              {PostExplore.map((item, id) => (
                <ExplorePost key={id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
