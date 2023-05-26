import React ,{useState, useEffect}from 'react'
import axios from "axios"
//import logo from "./img/logo.png"
import { Button, Form ,Divider,Message} from 'semantic-ui-react'
import {useNavigate,Link} from "react-router-dom"
import PublicNavBar from '../components/PublicNavBar'
function Login() {
  const[loginData,setLoginData]=useState({})
  const[loading,setLoading]=useState(false)
  const[errorMsg,setErrorMsg]=useState("")
  const[errorTime,setErrorTime]=useState(false)

  const navigate=useNavigate()
 // console.log((newUser))
  const handleChange =(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  const handleLogin=()=>{
    setLoading(true)
    axios.post("/api/myapp/user/login",loginData)
    .then((res=>{
      setLoading(false);
      localStorage.setItem("id",res.data.id)
      localStorage.setItem("isAdmin",res.data.isAdmin)
      localStorage.setItem("isUser",res.data.isUser)
      localStorage.setItem("token",res.data.token)
      console.log(res)
      navigate(`/profile/${res.data.id}`)
    }))
    .catch((err)=>{
      if (err.response.data.message){
      setErrorTime(true)
      setErrorMsg(err.response.data.message)
      setLoading(false)
      console.dir(err)
  }})
  }
  useEffect(()=>{
    setTimeout(()=>{
      setErrorTime(false)
    },10000)
  },[errorTime])
  return (
    <>
    <PublicNavBar/>
    <div className='bg-slate-100 rounded-md h-screen grid grid-cols-2 grid-rows-1 m-[15px] '>
    <div className='bg-[#b45309] flex justify-center items-center text-[#ff914d] text-center text-[4rem] font-kaushan ' >
      <p className='text-white'> 
    Define your memories in a while new way... 
    </p> 
    </div>
    <div className='flex justify-center items-center flex-col'>
   
      <Form className='border border-2 rounded-md p-5 shadow-slate-50/50' onChange={(e)=>{handleChange(e)}}>
       <Form.Field>
          <label>Email</label>
          </Form.Field>

          <Form.Field>
          <input placeholder='ex@exemple.com' 
                 name="email"
                  />
       </Form.Field>
       <Form.Field>
          <label>Password</label>
          </Form.Field>
          <Form.Field>
          <input placeholder='Enter your password here'
                 type='password'
                 name="password"
                  />
       </Form.Field>
         <div className='flex justify-center'>
         <Button 
         type='submit' 
         class="ui inverted segment brown button"
          onClick={()=>handleLogin()}
          loading={loading}>Login
         </Button>
         </div>
         <Divider horizontal>Or</Divider>
         <div className='flex justify-center text-white'><Link to="/register">
         <Button type='submit'  class="ui inverted segment brown button"> Sign Up 
         </Button></Link>
         </div>
      </Form>
      {errorTime && errorMsg.includes("e-mail")&&(
  <Message
      error
      header="Ouups!🤕" content={errorMsg}
    />)}
    </div>
  </div>
  </>
  )
}

export default Login