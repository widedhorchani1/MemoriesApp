import React ,{useState,useEffect} from 'react'
import logo from "../pages/img/logo.png"
import { NavLink } from 'react-router-dom'
import {IoLogOutOutline} from "react-icons/io5"
import UserName from "./UserName"
import axios from 'axios'
function NavBar() {
  const [user,setUser]=useState({})
  const id = localStorage.getItem("id")
useEffect(() => {
axios.get(`/api/myapp/user/${id}`)
.then((res)=>setUser(res.data.data))
.catch((err)=>console.dir(err))
}, [user,id])
  const handeLogout=()=>{
    localStorage.clear()
  }
  
  return (
    <div className='py-[10px] px-[50px]'>
        <nav className='bg-[#fbfaf9] lg:h-[50px] box-border rounded-md  flex justify-between py-[10px] px-[50px] m-[10px items-center shadow-lg shadow-gray-300 fixed top-0 left-10 right-10'>
            <NavLink style={({isActive})=>(isActive ? {color: "white",borderBottom:"2px white solid"}:undefined)} to={`/profile/${id}`}>
  <img src={logo} width={210} height={50} />
    </NavLink>
    <div className='navbar_part2'>
      <span className='user_name'>
    <UserName  user={user}/>
    </span>
    <NavLink className="navbar_navlink" to="/login"  onClick={()=>{handeLogout()}}>Logout <IoLogOutOutline size={20}/></NavLink>
    </div>
    
    </nav> 
    </div>
  )
}

export default NavBar