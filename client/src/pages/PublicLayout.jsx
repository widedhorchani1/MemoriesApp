import React, { useState } from 'react'
import PublicNavBar from '../components/PublicNavBar'
import memory1 from "./img/memory1.jpg"
import memory2 from "./img/memory2.jpg"
import memory3 from "./img/memory3.jpg"
import memory4 from "./img/memory4.jpg"

import axios from 'axios'
function PublicLayout() {
  /*const [file,setFile]=useState(null)
  const [url,setUrl]=useState("")
  const uploadImage= async()=>{
const form= new FormData ()
form.append('file',file)
form.append('upload_preset',"hwided")
 await axios.post('https://api.cloudinary.com/v1_1/dlrx8ro2m/upload',form).then(result=>setUrl(result.data.secure_url)).catch((err)=>console.dir(err))
  }*/
  return (
    <div>
    <PublicNavBar/>
    <section className='layoutPublic'>
    <div className='section1'>
      <h1 className='flex justify-center items-center text-blue text-center text-[4rem] font-kaushan ' > 
      Define your memories in a while new way... </h1>
      <img src={memory1}/>
    </div>
    <div className='section2'>
      <img src={memory2}/>
      <h2 className='flex justify-center items-center text-blue text-center text-[4rem] font-kaushan ' > "Little moments big Memories"</h2>
      </div>
    <div className='section3'>
    <h2 className='flex justify-center items-center text-blue text-center text-[4rem] w-96 font-kaushan '> " Sometimes you miss the memories not the person"</h2>
    <img src={memory3}/>
    </div>
    <div className='section4'>
    <h2 className='flex justify-center items-center text-blue text-center text-[4rem]  font-kaushan '>"Make memories that last forever"</h2>
    <img src={memory4}/>
    </div>
    </section>





   { /*<input
     type="File"
     defaultValue={file}
     onChange={(e)=>setFile(e.target.files[0])}/>
    <button onClick={uploadImage}>upload</button>
  <img src={url} alt="" />*/}
    </div>
  )
}

export default PublicLayout