/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Modal from "react-modal";
import useAuth from "../features/custom-hooks/useAuth";
import InstagramIcon from "../Imgs/Instagramlogo.png";
import ClearIcon from "@mui/icons-material/Clear";
import Iconsfromcreatemodal from "../Imgs/Icon to represent media such as images or videos.png";
import Badge from "@mui/material/Badge";
import { searchData } from "./data";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SkeletonAvatar from "./SkeletonAvatar";
import SearchModal from "./SearchModal";

function Sidenav() {
  const { currentUser } = useAuth();
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [createOpen, setcreateOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [file, setFile] = useState(null);
  const [imagepre, setImagePre] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const handleInputChange_1 = (e) => {
    const text = e.target.value;
    setSearchText(text);

    // Filter searchData based on the input text
    const filtered = searchData.filter((data) =>
      data.user.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredData(filtered);
  };
  const handleClearIconClick = (id) => {
    const updatedFilteredData = filteredData.filter((data) => data.id !== id);
    setFilteredData(updatedFilteredData);
  };

  const handleClearClick_1 = () => {
    setSearchText("");
    setFilteredData([]);
  };
  const handleFileChange = (e) => {
    setFile(e.target?.files[0]);
    setImagePre(URL.createObjectURL(e.target.files[0]));
  };
  const dispatch = useDispatch();
  const handleShowmodal_C = () => {
    setcreateOpen(true);
  };
  const handleCloseModal_C = () => {
    setcreateOpen(false);
  };

  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      // Navigate only if logout is successful
      navigate("/authenticate", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error if needed
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleShowmodal = () => {
    setmodalIsOpen(true);
    document.querySelector(".main").style.width = "3.5%";
  };
  const handleSearchModalClose = () => {
    setmodalIsOpen(false);
    document.querySelector(".main").style.width = "17.6%";
  };
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      const modal = document.querySelector(".modalSearch");
      const main = document.querySelector(".main");

      if (
        modal &&
        !modal.contains(event.target) &&
        main &&
        !main.contains(event.target)
      ) {
        // Clicked outside the modal and the main element
        setmodalIsOpen(false);
        main.style.width = "17.6%"; // Set it back to the original width
      }
    };

    // Attach the event listener on component mount
    document.addEventListener("mousedown", handleClickOutsideModal);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [setmodalIsOpen]);

  const open = Boolean(anchorEl);

  return (
    <>
      <div className="main">
        <div className="sidenav">
          {modalIsOpen ? (
            <img
              className="sidenav_logo"
              src={InstagramIcon}
              alt="Instagram Logo"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <img
              className="sidenav_logo span_hide"
              src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
              alt="Instagram Logo"
            />
          )}

          <Link to="/home" className="sidenav_buttons">
            <button className="sidenav_button">
              <HomeIcon />
              <span className="span_hide">Home</span>
            </button>
            <button className="sidenav_button">
              <SearchIcon onClick={handleSearchModalClose} />
              <span className="span_hide" onClick={handleShowmodal}>Search</span>
            </button>
            {/* Search Modal */}
            <SearchModal
              modalIsOpen={modalIsOpen}
              setmodalIsOpen={setmodalIsOpen}
              searchText={searchText}
              handleInputChange_1={handleInputChange_1}
              handleClearClick_1={handleClearClick_1}
              filteredData={filteredData}
              handleClearIconClick={handleClearIconClick}
            />
            <Link
              to="/explore"
              style={{ textDecoration: "none", fontWeight: "bold" }}
              className="sidenav_button"
            >
              <ExploreOutlinedIcon className="" />
              <span className="span_hide">Explore</span>
            </Link>
            <Link
              to="/reels"
              style={{ textDecoration: "none", fontWeight: "bold" }}
              className="sidenav_button"
            >
              <SlideshowIcon className="" />
              <span className="span_hide">Reels</span>
            </Link>
            <Link
              to="/messages"
              style={{ textDecoration: "none", fontWeight: "bold" }}
              className="sidenav_button"
            >
              <ChatOutlinedIcon className="" />
              <span className="span_hide">Messages</span>
            </Link>
            <button className="sidenav_button">
              <FavoriteBorderIcon className="" />
              <span className="span_hide">Notifications</span>
            </button>
            <Modal
              style={{
                overlay: {
                  backgroundColor: "rgb(0, 0, 0,.5)",
                },
              }}
              isOpen={createOpen}
              ariaHideApp={false}
              onRequestClose={() => setcreateOpen(false)}
              className={`modalCreate`}
            >
              <div className="create_box">
                <div style={{ flex: 1, height: "70vh" }}>
                  {imagepre == null ? (
                    <div className="post-container">
                      <p className="post-title">Create new post</p>
                      <hr className="post-hr" />
                      <div className="post-content">
                        <div className="image-upload-container">
                          <img
                            src={Iconsfromcreatemodal}
                            className="upload-icon"
                            alt=""
                          />
                          <p className="upload-text">
                            Drag photos and videos here
                          </p>
                          <label
                            htmlFor="file"
                            className="select-button"
                            onClick={(e) => {
                              e.stopPropagation(); // Stop event propagation
                            }}
                          >
                            <div className="select-button-inner">
                              <p>Select from computer</p>
                              <input
                                type="file"
                                name="file"
                                id="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="postContainer">
                        <img
                          src={imagepre}
                          className="postImage"
                          alt="img_post"
                        />
                        <div className="postDetails">
                          <div className="userInfo">
                            <img
                              src={currentUser.photoURL}
                              className="userAvatar"
                              alt=""
                            />
                            <p className="userName">
                              {currentUser.displayName}
                            </p>
                          </div>
                          <textarea
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Write a status for post"
                            className="textInputForPost"
                          />
                          <button className="createPostButton">Post</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Modal>
            <button className="sidenav_button">
              <AddBoxOutlinedIcon onClick={handleCloseModal_C} className="" />
              <span className="span_hide" onClick={handleShowmodal_C}>Create</span>
            </button>
            <div className="sidenav_button1 pop_bg">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {currentUser && currentUser.photoURL ? (
                  <Avatar
                    className=""
                    style={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "16px",
                    }}
                    alt="UserAvatar"
                    src={currentUser.photoURL}
                  />
                ) : (
                  <SkeletonAvatar />
                )}
                <Link
                  to="/username"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  className="log_p span_hide"
                >
                  Profile{" "}
                </Link>
              </Button>

              <Popover
                id="demo-positioned-popover"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                  },
                }}
              >
                <MenuItem className="Menu_C" onClick={handleClose}>
                  Settings
                </MenuItem>

                {currentUser ? (
                  // Content for authenticated user
                  <div>
                    {/* ... */}
                    <MenuItem className="Menu_C" onClick={handelLogout}>
                      Logout
                    </MenuItem>
                  </div>
                ) : (
                  // Content for unauthenticated user
                  <Navigate to="/authenticate" replace />
                )}
              </Popover>
            </div>
          </Link>
        </div>
        <div className="sidenav_more">
          <button
            style={{ marginLeft: "-2px" }}
            className="sidenav_button Noti_B"
          >
            <Badge badgeContent={1} color="error">
              <svg
                aria-label=""
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 192 192"
                width="24"
              >
                <path
                  className="xcslo1z "
                  d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
                ></path>
              </svg>
            </Badge>
            <a
              href="https://www.threads.net/login"
              className="sidenav_buttonText span_hide"
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads
            </a>
            <ArrowOutwardIcon className="up_arrow " />
          </button>
          <button className="sidenav_button">
            <MenuIcon className="" />
            <span className="sidenav_buttonText span_hide">More</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
