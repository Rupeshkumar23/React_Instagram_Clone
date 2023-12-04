import React from 'react'
import "./Explore.css"
import ExplorePost from '../../pages/ExplorePost/ExplorePost'
import { PostExplore } from '../../pages/data'
import Sidenav from '../../navigation/Sidenav'
export default function Explore() {
  return (
    <div>
      <div>
          <div className='homesubcontainer'>
              <div className='homesidebar'>
                  <Sidenav />
              </div>
              <div className='Explorerightbar'>
                {PostExplore.map((item,id)=>(
                  <ExplorePost key={id} item={item}/>
                ))}
              </div>
          </div>
      </div>
    </div>
  )
}
