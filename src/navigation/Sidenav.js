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
import { Avatar } from "@mui/material";
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

function Sidenav() {
  const { currentUser } = useAuth();
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [createOpen, setcreateOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [file , setFile] = useState(null);
  const [imagepre , setImagePre] = useState(null);
  const dispatch = useDispatch();
  const handleShowmodal_C = () => {
    setcreateOpen(true);
  };
  const handleCloseModal_C = () => {
    setcreateOpen(false);
  };
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearClick = () => {
    setSearchText("");
  };
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
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
    document.querySelector(".main").style.width = "2.8%";
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
              className="sidenav_logo"
              src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
              alt="Instagram Logo"
            />
          )}

          <div className="sidenav_buttons">
            <button className="sidenav_button">
              <HomeIcon />
              <span>Home</span>
            </button>
            <button className="sidenav_button">
              <SearchIcon onClick={handleSearchModalClose} />
              <span onClick={handleShowmodal}>Search</span>
            </button>
            {/* Search Modal */}
            <Modal
              style={{
                overlay: {
                  marginLeft: "112px",
                  backgroundColor: "transparent",
                },
              }}
              isOpen={modalIsOpen}
              ariaHideApp={false}
              onRequestClose={() => setmodalIsOpen(false)}
              className={`modalSearch ${modalIsOpen ? "modal-open" : ""}`}
            >
              <h2>Search</h2>
              <div className="search-box">
                <SearchIcon className="search-icon" />
                <input
                  className="showsearchinput"
                  type="search"
                  placeholder="Search"
                  name="text"
                  value={searchText}
                  onChange={handleInputChange}
                />
                {searchText && (
                  <ClearIcon
                    className="clear-icon"
                    onClick={handleClearClick}
                  />
                )}
              </div>
            </Modal>
            <button className="sidenav_button">
              <ExploreOutlinedIcon className="" />
              <span>Explore</span>
            </button>
            <button className="sidenav_button">
              <SlideshowIcon className="" />
              <span>Reels</span>
            </button>
            <button className="sidenav_button">
              <ChatOutlinedIcon className="" />
              <span>Messages</span>
            </button>
            <button className="sidenav_button">
              <FavoriteBorderIcon className="" />
              <span>Notifications</span>
            </button>
            <Modal
              style={{
                overlay: {
                  backgroundColor: "rgb(0, 0, 0,.5)"
                },
              }}
              isOpen={createOpen}
              ariaHideApp={false}
              onRequestClose={() => setcreateOpen(false)}
              className={`modalCreate`}
            >
              <div className="create_box">
              <div style={{flex:1 , height:"70vh"}}>
                    {imagepre == null ?
                    
                    <div >
                       <p style={{display:'flex' , alignItems:"center" , margin:'auto' , justifyContent:'center' ,fontWeight:600 , marginTop:10}}>Create new post</p>
                       <hr style={{ borderBottom:' 1px',borderBottomStyle:'solid',   borderColor:'#ffffff3b', marginTop:'10px', }}/>
                       <div style={{display:'flex',alignItems:"center" , margin:'auto' , justifyContent:'center', marginTop:-10}}>
                        <div style={{marginTop:280 , marginLeft:40}}>
                         <img src={Iconsfromcreatemodal} style={{marginLeft:30}} alt=''/>
                         <p style={{fontWeight:"600" , marginLeft:"-40px" ,marginBottom:'10px', fontSize:18}}>Drag photos and videos here</p>
                         <label htmlFor="file">
                            <div  style={{backgroundColor:"#0095F6" , paddingLeft:25 , marginLeft:-20 , borderRadius:4 }}>
                              <p style={{paddingTop:"6px" ,  paddingBottom:"7px"}}>Select from computer</p>
                            </div>
                          <input type="file" name="file" id='file' accept='image/*' onChange={(e)=>[setFile(e.target?.files[0]), setImagePre(URL.createObjectURL(e.target.files[0]))]} style={{display:"none"}}/>
                         </label>
                         
                        </div>
                       </div>
                    </div>
                  :
                  <div>
                    <div style={{display:"flex" }}>
                        <img src={imagepre} style={{width:"60%" , height:"60vh", objectFit:"cover"}} alt=''/>   
                        <div style={{marginLeft:20 , width:"40%"}}>
                            <div style={{display:'flex' , alignItems:"center"}}>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATOWAXKfh8Bt6g6wp2nobJIWLTX5PQqcp3Q&usqp=CAU' style={{width:"30px" , height:"30px" , borderRadius:"50%" , objectFit:"cover"}} alt=''/>
                                <p style={{marginLeft:10 , fontWeight:600 , fontSize:16}}>madan khadka</p>
                            </div>
                            <textarea type='text' name='text' id='text' placeholder='Write a status for post'  className='textinputforpost'/>
                            <button className='createpost'>Post</button>
                        </div>
                    </div>
                 </div>}
              </div>
              </div>
            </Modal>
            <button className="sidenav_button">
              <AddBoxOutlinedIcon onClick={handleCloseModal_C} className="" />
              <span onClick={handleShowmodal_C}>Create</span>
            </button>
            <div className="sidenav_button1 pop_bg">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {currentUser && currentUser.photoURL && (
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
                )}
                <span className="log_p">Profile </span>
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
                <MenuItem className="Menu_C" onClick={handelLogout}>
                  Logout
                </MenuItem>
              </Popover>
            </div>
          </div>
        </div>
        <div className="sidenav_more">
          <button className="sidenav_button Noti_B">
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
            <a
              href="https://www.threads.net/login"
              className="sidenav_buttonText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads
            </a>
            <ArrowOutwardIcon className="up_arrow " />
          </button>
          <button className="sidenav_button">
            <MenuIcon className="" />
            <span className="sidenav_buttonText">More</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
