// VerticalReels.js
import React, { useState } from "react";
import ReactPlayer from "react-player";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./VerticalReels.css";
import Sidenav from "../../navigation/Sidenav";
import Reel1 from "./Videos/reels-1.mp4";
import Reel2 from "./Videos/reels-2.mp4";
import Reel3 from "./Videos/reels-3.mp4";
import Reel4 from "./Videos/reels-4.mp4";
import Reel5 from "./Videos/reels-5.mp4";

const VerticalReels = () => {
  const videos = [
    { url: Reel1 },
    { url: Reel2 },
    { url: Reel3 },
    { url: Reel4 },
    { url: Reel5 },
  ];

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Sidenav />
      <div className="vertical-reels-container">
        {videos.map((video, index) => (
          <div key={index} className="vertical-reel">
            <ReactPlayer
              url={video.url}
              width="100%"
              height="100%"
              playing={true}
              controls
            />
            <div className="all_icons">
              {isFavorite ? (
                <FavoriteIcon
                  className="fav_1 fav_1_active"
                  onClick={handleFavoriteClick}
                />
              ) : (
                <FavoriteBorderIcon
                  className="fav_1"
                  onClick={handleFavoriteClick}
                />
              )}
              <ChatBubbleOutlineIcon className="fav_1" />
              <TelegramIcon className="fav_1" />
              <BookmarkBorderIcon className="fav_1" />
              <MoreHorizIcon className="fav_1" />
              <div className="move_top">117k</div>
              <div className="move_top1">205</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VerticalReels;
