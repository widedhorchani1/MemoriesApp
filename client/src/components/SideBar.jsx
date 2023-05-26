import React from 'react'
import {FaBirthdayCake} from "react-icons/fa"
import {MdFamilyRestroom} from "react-icons/md"
import {MdCastForEducation} from"react-icons/md"
import {BsMemory} from "react-icons/bs"
import {SiYourtraveldottv} from "react-icons/si"
import {CgProfile} from "react-icons/cg"
import {NavLink } from 'react-router-dom'
import {SiCountingworkspro} from 'react-icons/si'
import {TbPhysotherapist}from 'react-icons/tb'
import Work from '../pages/Work'
function sideBar () 
{
const id=localStorage.getItem("id")

  return (
    <>
    <div className='sideBar'>
        <div className='sideBar_menu'>
            <a><NavLink className="NavLink"  to={`/birthday/${id}`}> <FaBirthdayCake size={55} />Birthday Moments</NavLink> </a>
            <a><NavLink className="NavLink"  to={`/family/${id}`}><MdFamilyRestroom size={55}/>  Family Moments</NavLink></a>
            <a> <NavLink className="NavLink" to ={`/education/${id}`}><MdCastForEducation size={55}/>Education Moments </NavLink></a>
            <a><NavLink className="NavLink" to ={`/bestmoments/${id}`}><BsMemory size={60}/> Best Moments Ever </NavLink></a>
            <a> <NavLink className="NavLink" to ={`/travel/${id}`}><SiYourtraveldottv size={55}/> Travel</NavLink></a>
            <a> <NavLink className="NavLink" to={`/profile/${id}`}><TbPhysotherapist size={55}/> Others</NavLink> </a>
            <a> <NavLink className="NavLink" to={`/work/${id}`}><SiCountingworkspro size={55}/> Work</NavLink> </a>
        </div>
    </div>
    </>
  )
}

export default sideBar