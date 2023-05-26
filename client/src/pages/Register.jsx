import React,{useState} from 'react'
//import logo from "./img/logo.png"
import { Button, Form,Message,Divider} from 'semantic-ui-react'
import axios from "axios"
import swal from "sweetalert"
import {useNavigate,Link} from "react-router-dom"
import PublicNavBar from "../components/PublicNavBar"
function Register() {
  const[newUser,setNewUser]=useState({})
  const[loading,setLoading]=useState(false)
  const[errorMsg,setErrorMsg]=useState("")
  const navigate=useNavigate()
 // console.log((newUser))
  const handleChange =(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
  const handleRegister=()=>{
    setLoading(true)
    axios.post("/api/myapp/user/register",newUser)
    .then((res=>{
      swal("Success!", res.data.message, "success").then(()=>navigate("/login"));
      setLoading(false);
      console.log(res)}))
    .catch((err)=>{
      setErrorMsg(err.response.data.error)
      setLoading(false)
      console.dir(err)})
  }
  return (
    <>
    <PublicNavBar/>
    <div className='bg-slate-100 rounded-md h-screen grid grid-cols-2 grid-rows-1 m-[15px]'>
        <div className='bg-[#b45309] flex justify-center items-center text-blue text-center text-[4rem] font-kaushan ' >
          <p className='text-white'> 
        Define your memories in a while new way... 
        </p> 
        </div>
        <div className='flex justify-center items-center flex-col '>
        <Form className='border border-2 rounded-md p-5 shadow-slate-50/50 m-[10px]' onChange={(e)=>{handleChange(e)}}>
    <Form.Group unstackable widths={1}>
      <Form.Input 
      label='First Name'
      placeholder='First name'
      type='text'
      name="firstName" 
      error={ errorMsg.includes("first") && errorMsg}/>
      <Form.Input 
      label='Last Name' 
      placeholder='Last Name' 
      type='text'
      name="lastName"
      error={ errorMsg.includes("last")&& errorMsg }/>
    </Form.Group>
    <Form.Group unstackable widths={2}>
    <Form.Input 
    label='Email' 
    placeholder='ex@exemple.com' 
    name="email"
    error={ errorMsg.includes("e-mail")&& errorMsg }/>
      <Form.Input 
      label='Password' 
      placeholder='Minimum 8 caracters' 
      type='password'
      name="password"
      error={ errorMsg.includes("Password")&& errorMsg }/>   
    </Form.Group>
    <Form.Group unstackable widths={2}>
    <Form.Input 
    label='Birthdate' 
    placeholder='II/MM/AAAA' 
    type='date'
    name="birthDate"/>
      <Form.Input 
      label='Phone' 
      placeholder='Phone' 
      name="phone"
      error={ errorMsg.includes("phone")&& errorMsg }/>
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Form.Input 
      label='Address'
      placeholder='Address'
      name="address" />
      <Form.Input 
      label='Profile picture' 
      placeholder='Paste your image here'
      name="userImg" />
     
    </Form.Group>
    <div className='flex justify-center'>
    
    <Button  
    type='submit' 
    class="ui inverted segment brown button"
    onClick={()=>handleRegister()}
    loading={loading}
    >Submit</Button>
    </div>
    <Divider horizontal>Or</Divider>
         <div className='flex justify-center flex-col items-center'>
         <h4>You already have an account!</h4>
          <Link to="/login">
         <Button type='submit'  class="ui inverted segment brown button"> Login
         </Button></Link>
         </div>
  </Form>
  {errorMsg.includes("E-mail")&&
  <Message
      error
      header="Ouups!🤕" content={errorMsg}
    />}
 </div>
 
    </div>
    </>
  )
}

export default Register