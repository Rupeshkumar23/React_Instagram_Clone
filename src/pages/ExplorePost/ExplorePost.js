import React from 'react'
import love from "../../Imgs/Notifications2.png"
import comment from "../../Imgs/Comment.png"
import "../../pages/ExplorePost/Explore.css"

export default function Explorepost(item) {
  // console.log(item)
 
  return (
    <div className="container" >
      <div className="imagefor">
        <img src={item?.item?.postimage} className='imageforimage' alt="" />
        <div className="text">
          <div style={{display:"flex" , alignItems:'center' , marginLeft:"10px" }}>
            <img src={love} className='logoforexplorepost' alt="" />
            <p style={{marginLeft:5}}>{item?.item?.likes}</p>
          </div>
          <div style={{display:"flex" , alignItems:'center' , marginLeft:"10px"  }}>
            <img src={comment} className='logoforexplorepost' alt="" />
            <p style={{marginLeft:5}}>{item?.item?.comments}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
