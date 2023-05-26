import React from 'react'
import logo from "../pages/img/logo.png"
import { NavLink } from 'react-router-dom'
//import {IoLogOutOutline} from "react-icons/io5"
function PublicNavBar() {
   // const id = localStorage.getItem("id")
    const handeLogout=()=>{
      localStorage.clear()
    }
    return (
      <div className='py-[10px] px-[50px]'>
          <nav className='bg-[#fbfaf9] lg:h-[50px] box-border rounded-md  flex justify-between py-[10px] px-[50px] m-[10px items-center shadow-lg shadow-gray-300 fixed top-0 left-10 right-10'>
              <NavLink style={({isActive})=>(isActive ? {color: "white",borderBottom:"2px white solid"}:undefined)} to="/">
    <img src={logo} width={210} height={50} />
      </NavLink>
      <div className='flex items-center gap-[15px] '>
      <NavLink to="/login" className="flex items-center text-xl  border-1" onClick={()=>{handeLogout()}}>Login </NavLink>
      
      <NavLink to="/register" className="flex items-center text-xl border-1 color-[#573201]" onClick={()=>{handeLogout()}}>Sing up </NavLink>
      </div>
      </nav> 
     
      </div>
    )
}

export default PublicNavBar