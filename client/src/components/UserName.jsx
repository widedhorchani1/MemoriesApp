import React from 'react'

function UserName( props) {
  return (
   <>
   <div className='useName'>
    <div className='userName_info'>
        <h3 className='name'>{props.user.firstName + ' '+ props.user.lastName}</h3>
    </div>
   {/* <div className='userName_img'>
        {props.user.userImg === ""?( <h3></h3>): 
        <img src="" alt="" />       }
  </div>*/}
   </div>
   </>
  )
}

export default UserName