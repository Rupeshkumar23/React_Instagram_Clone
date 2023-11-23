import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img_1 from "../Imgs/ss1.png";
import Img_2 from "../Imgs/ss2.png";
import Img_3 from "../Imgs/ss3.png";
import Img_4 from "../Imgs/ss4.png";

function Crousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    fade: true,
    swipe: false,
    speed: 1000,
  };

  return (
    <div className="crousel_container">
      <div className="crousel_wrapper">
        <Slider {...settings}>
          <div>
            <img src={Img_1} className="crousel_image" alt="car_img" />
          </div>
          <div>
            <img src={Img_2} className="crousel_image" alt="car_img" />
          </div>
          <div>
            <img src={Img_3} className="crousel_image" alt="car_img" />
          </div>
          <div>
            <img src={Img_4} className="crousel_image" alt="car_img" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Crousel;
