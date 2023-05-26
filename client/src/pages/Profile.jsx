import React,{useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router'
import axios from 'axios'
import PostList from "../components/PostList"
import Sidebar from '../components/SideBar'
import UserName from '../components/UserName'
import Calendar from '../components/Calendar'
function Profile(){
const [user,setUser]=useState({})
let {id}=useParams()
useEffect(() => {
axios.get(`/api/myapp/user/${id}`)
.then((res)=>setUser(res.data.data))
.catch((err)=>console.dir(err))
}, [user,id]) 
//console.log(user)
  return (
    <div className='layout'>
       <NavBar/>
       <div class="part1">
    <Sidebar/>
      </div>
      <div className='part2'> 
        <Calendar/>
       </div>
    </div>
  )
}

export default Profile