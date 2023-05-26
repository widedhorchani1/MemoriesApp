import React, { useState,useEffect } from 'react'
import Calendar from '../components/Calendar'
import NavBar from '../components/NavBar'
import PostsLists from '../components/PostsLists'
function Education(props) {
  return (
    <div className='layout' >
      
    <NavBar/>
    <div class="part1">
     <PostsLists category={"Education"}/>
   </div>
   <div className='part2'> 
     <Calendar/>
    </div>
 </div>
  )
}

export default Education