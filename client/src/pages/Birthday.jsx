import React from 'react'
import Calendar from '../components/Calendar'
import NavBar from '../components/NavBar'
import PostsLists from '../components/PostsLists'
function Birthday(props) {
  return (
    <div className='layout'>
       <NavBar/>
       <div className="part1">
        <PostsLists category={"Birthday"}/>
      </div>
      <div className='part2'> 
        <Calendar/>
       </div>
    </div>
  )
}

export default Birthday