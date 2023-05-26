import React from 'react'
import Calendar from '../components/Calendar'
import NavBar from '../components/NavBar'
import PostsLists from '../components/PostsLists'
function BestMoments(props) {
  return (
<div className='layout'>
       <NavBar/>
       <div class="part1">
      <PostsLists category={"Best Moments"}/>
      </div>
      <div className='part2'> 
        <Calendar/>
       </div>
    </div>
  )
}

export default BestMoments