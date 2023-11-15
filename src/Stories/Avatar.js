import React from 'react'
import './Stories.css'
const Avatar = ({image}) => {
  return (
    <section className='avatar_detail'>
      <div className='avatar_box'>
        <img class="avatar_profile_image" src={image.img} alt="" />
      </div>
      <p className='avatar_name'>{image.name}</p>
    </section>
  )
}

export default Avatar;