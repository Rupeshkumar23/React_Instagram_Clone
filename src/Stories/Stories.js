import React from "react";
import Avatar from "./Avatar";
import "./Stories.css";
import { statusCarousel } from "./data";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Stories = () => {
  const handleSlide = (direction) => {
    const slider = document.getElementsByClassName("carousel-body")[0];
  
    if (slider) {
      const scrollAmount = 400; // Adjust as needed
  
      if (direction === "left") {
        if (slider.scrollLeft > 0) {
          slider.scrollLeft -= scrollAmount;
        }
      } else {
        if (slider.scrollLeft + slider.clientWidth < slider.scrollWidth) {
          slider.scrollLeft += scrollAmount;
        }
      }
    }
  };
  

  return (
    <section className="check">
      <div className="arrow-btn left-icon" onClick={() => handleSlide("left")}>
        <KeyboardArrowLeftIcon />
      </div>
      <div
        className="arrow-btn right-icon"
        onClick={() => handleSlide("right")}
      >
        <ChevronRightIcon />
      </div>
      <div className="carousel-body">
        {statusCarousel.map((item) => {
          return <Avatar key={item} image={item} />;
        })}
      </div>
    </section>
  );
};

export default Stories;
