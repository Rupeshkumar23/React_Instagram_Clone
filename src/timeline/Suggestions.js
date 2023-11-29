import { Avatar, Skeleton } from "@mui/material";
import React from "react";
import Img1 from "../Imgs/Marvel.jpg";
import Img2 from "../Imgs/Sony_Music.jpg";
import useAuth from "../features/custom-hooks/useAuth";
import './Suggestions.css'

function Suggestions() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Render skeleton loading state
    return (
      <div className="Rightbar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: -30,
            marginTop: 30,
            cursor: "pointer",
            marginBottom: 50,
          }}
        >
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            style={{ backgroundColor: "#424242" }}
          />
          <div style={{ marginLeft: 10, marginBottom: "2px" }}>
            <Skeleton
              width={100}
              style={{ backgroundColor: "#424242" }}
            />
            <Skeleton
              width={80}
              style={{ backgroundColor: "#424242" }}
            />
          </div>
          <div style={{ marginLeft: "127px", cursor: "pointer" }}>
            <Skeleton
              width={50}
              style={{ backgroundColor: "#424242" }}
            />
          </div>
        </div>

        <div className="suggestions">
          <div className="suggestions_title">
            <Skeleton width={200} style={{ backgroundColor: "#424242" }} />
            <span><Skeleton width={50} style={{ backgroundColor:'#424242'}}/></span>
          </div>

          <div className="suggestions_usernames">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="suggestions_username">
                <div className="username_left">
                  <span className="avatar">
                    <Skeleton
                      variant="circular"
                      width={40}
                      height={40}
                      style={{ backgroundColor: "#424242" }}
                    />
                  </span>
                  <div className="username_info">
                    <Skeleton
                      width={80}
                      style={{ backgroundColor: "#424242" }}
                    />
                    <Skeleton
                      width={100}
                      style={{ backgroundColor: "#424242" }}
                    />
                  </div>
                </div>
                <Skeleton
                  variant="rectangular"
                  width={50}
                  height={10}
                  style={{ backgroundColor: "#424242" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="Foot_About">
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
              <li key={index}>
                <Skeleton width={40} style={{ backgroundColor: "#424242" }} />
              </li>
            ))}
          </ul>
        </div>

        <div className="copy_r">
          <Skeleton width={200} style={{ backgroundColor: "#424242" }} />
        </div>
      </div>
    );
  }

  // Render the actual content once the data is available
  return (
    <>
      <div className="Rightbar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: -30,
            marginTop: 30,
            cursor: "pointer",
            marginBottom: 50,
          }}
        >
          {currentUser && currentUser.photoURL && (
            <Avatar
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              alt="UserAvatar"
              src={currentUser.photoURL}
            />
          )}
          <div style={{ marginLeft: 10, marginBottom: "2px" }}>
            <p style={{ textAlign: "start" }}> {currentUser.displayName}</p>
            <p
              style={{
                marginTop: "5px",
                textAlign: "start",
                color: "#A8A8A8",
              }}
            >
              {currentUser.email}
            </p>
          </div>
          <div style={{ marginLeft: "127px", cursor: "pointer" }}>
            <p style={{ color: "#0095f6", fontSize: 12, fontWeight: "500" }}>
              Switch
            </p>
          </div>
        </div>
        <div className="suggestions">
          <div className="suggestions_title">
            Suggestions for you<span className="see_A">See All</span>
          </div>
          <div className="suggestions_usernames">
            <div className="suggestions_username">
              <div className="username_left">
                <span className="avatar">
                  <Avatar
                    alt="Cindy Baker"
                    src="https://i.pravatar.cc/65?img=12"
                  />
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
                  <Avatar
                    alt="Cindy Baker"
                    src={Img2}
                    style={{ backgroundImage: "center", objectFit: "cover" }}
                  />
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
                  <Avatar
                    alt="Cindy Baker"
                    src={Img1}
                    style={{ backgroundImage: "center", objectFit: "cover" }}
                  />
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
                  <Avatar
                    alt="Cindy Baker"
                    src="https://i.pravatar.cc/65?img=13"
                  />
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
            <li>About</li>.<li>Help</li>.<li>Press</li>.<li>API</li>.
            <li>Jobs</li>.<li>Privacy</li>.<li>Terms</li>.<li>Locations</li>.
            <li>Language</li>.<li>Meta Verified</li>
          </ul>
        </div>
        <div className="copy_r">© 2023 INSTAGRAM FROM META</div>
      </div>
    </>
  );
}

export default Suggestions;
