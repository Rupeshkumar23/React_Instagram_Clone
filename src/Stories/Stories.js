/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './Stories.css'
import Slider from "react-slick";
const Stories = () => {
  const [state, setState] = useState([
    { id: 1, image: "https://i.pravatar.cc/65?img=1", name: "Natalie" },
    { id: 2, image: "https://i.pravatar.cc/65?img=2", name: "Rajan" },
    { id: 3, image: "https://i.pravatar.cc/65?img=3", name: "Ethan" },
    { id: 4, image: "https://i.pravatar.cc/65?img=4", name: "Joseph" },
    { id: 5, image: "https://i.pravatar.cc/65?img=5", name: "Layla" },
    { id: 6, image: "https://i.pravatar.cc/65?img=6", name: "Nolan" },
    { id: 7, image: "https://i.pravatar.cc/65?img=7", name: "Karthik" },
    { id: 8, image: "https://i.pravatar.cc/65?img=8", name: "Bobby" },
    { id: 9, image: "https://i.pravatar.cc/65?img=9", name: "آمال" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
         
    </div>
  );
      
};

export default Stories;