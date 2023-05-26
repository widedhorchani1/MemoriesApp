import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Button ,Form,Input,Accordion,Icon,Message} from 'semantic-ui-react'
import { ToastContainer,toast } from 'react-toastify'
import swal from 'sweetalert'
import axios from 'axios'
function PostsLists({category}) {
 
    let {id}= useParams()
    const[posts,setPosts]=useState([])
    const[showUpdate,setShowUpdate]=useState(false)
    const[postId,setPostId]=useState("")
    const[updatedPost,setUpdatedPost]=useState({})
    const [newPost,setNewPost]=useState({})
    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")
    const [activeIndex,setActiveIndex]=useState(0)
    const [deletePost,setDeletePost]=useState(false)
    //console.log(id)
    useEffect(()=>{
        axios.get(`/api/myapp/user/getownpost/${id}`).then((res)=>setPosts(res.data.data)).catch((err)=>console.dir(err))},[posts,id])
      // console.log(posts)
    const handleShow=(post_id) =>{
      setShowUpdate(!showUpdate);
      setPostId(post_id)
    }
      const handleChange = (e)=>{
        setUpdatedPost({...updatedPost,[e.target.name]:e.target.value})
      }
      const handleSave=(post_id)=>{
        axios
        .put(`/api/myapp/user/updatepost/${post_id}`,updatedPost)
        .then((res)=>{console.log(res)
                    setShowUpdate(!showUpdate)
                    if(res.data.status){
                      toast.success(res.data.message, {
                          position: "top-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                          })
                  }
                  
                    })
        .catch((err)=>console.dir(err))
    }
    const handleClick=(e,titleProps)=>{
      const {index}=titleProps;
      const newIndex=activeIndex===index ?-1 : index;
          setActiveIndex(newIndex)
      }
      const handleNewPost=(e)=>{
        setNewPost({...newPost,[e.target.name]:e.target.value})
    }
    const handleCreatePost=()=>{
      axios.post(`/api/myapp/user/addpost/${id}`,newPost)
      .then((res)=>{
          if (res ){
              setError("")
              setSuccess(res.data.message)
          console.log(res)}
      
      setNewPost({
          title:"",
          date:"",
          description:"",
          postImg:""})})
      .catch((err)=>{if (err){
          setError(err.response.data.error)}})

  }
  const handleDeletPost=(postId)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
          axios.delete(`/api/myapp/user/deletepost/${postId}`).then((res)=>{if (res){
              setDeletePost(true)
          }}).catch((err)=>console.dir(err))
          swal("Poof! Your post has been deleted!", {
            icon: "success",
          })} else {
            swal("Operation cancelled!");
          }
        })
    }
    
  return (
    <div>
        {posts.filter((post)=>post.category === category).map((post)=>(
          
        <div class="ui_card" key={post._id}>
          {showUpdate && postId === post._id ?( 
          <Form onChange={(e)=>handleChange(e)}>
          <Input  label="Picture"Value={post.postImg} name="postImg" type="File"/>
          <Input  label="Title" defaultValue={post.title}  name="title" type="text"/>
          <Input  label="Dtae"defaultValue={post.date} name="date" type="date"/>
          <Input  label="Description"defaultValue={post.description} name="desciprtion"  type="text"/>
          <Input  label="Category"defaultValue={post.category} name="category"  type="text"/>
          <select class="ui dropdown" name="category" >
         <option value="">{post.category}</option>
         <option value="Birthday">Birthday</option>
         <option value="Education">Education</option>
         <option value="Family">Family</option>
         <option value="Travel">Travel</option>
         <option value="Best Momets">Best Momets</option>
         <option value="Work">Work</option>

         <option value="Others">Others</option>
        

        </select>
      </Form>
          
      ):(
     <>
     <div class="image">
     <img src={post.postImg}/>
    </div>
     <div class="content">
    <a class="header">{post.title}</a>
    <div class="meta">
      <span class="date">{post.date}</span>
    </div>
    <div class="category">
        {post.category}
    </div>
     </div>
     <div class="description">
            {post.description}
     </div>
     </>
     )}
     {showUpdate && postId === post._id ?(
        <div>
          <Button basic color='green' onClick={()=>handleSave(post._id) }>
            Save
          </Button>
          <Button basic color='red' onClick={()=>handleShow(post._id) }>
            Cancel
          </Button>
          </div>
          ):(
            <div>
               <Button basic color='green' onClick={()=>handleShow(post._id)
          }>
            Update
          </Button>
          <Button basic color='red' onClick={()=>handleDeletPost(post._id)}>
            Delete
          </Button>
            </div>
          )}
</div>
))}
 <Accordion>
        <Accordion.Title
          active={activeIndex !== 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          Add new memory
        </Accordion.Title>
        <Accordion.Content active={activeIndex !== 0}>
        <Form onChange={(e)=>{handleNewPost(e)}}>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title'type="text" name='title' value={newPost.title}/>
    </Form.Field>
    <Form.Field>
      <label>Date</label>
      <input placeholder='Date' type="date" name='date' value={newPost.date}/>
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder='Description' name='description'value={newPost.description} />
    </Form.Field>
    <Form.Field>
      <label>Memory picture</label>
      <input placeholder='memory picture' name='postImg' value={newPost.postImg}/>
    </Form.Field>
    <Form.Field>
      <h6><b>Category</b> </h6>
 <select label="Category"  class="ui dropdown" name="category"  value={newPost.category} type="text">
         <option value="Birthday">Birthday</option>
         <option value="Education">Education</option>
         <option value="Family">Family</option>
         <option value="Travel">Travel</option>
         <option value="Best Moments">Best Moments</option>
         <option value="Work">Work</option>

         <option value="Others">Others</option>
        </select>
        </Form.Field>
    
    <Button type='submit' onClick={()=>handleCreatePost()}>Create</Button>
    { error &&(
    <Message negative>
    <Message.Header>Ooooops! An error has occured </Message.Header>
    <p>{error}</p>
  </Message>
  )}
  { success &&  
  ( <Message positive>
    <Message.Header>Successfly</Message.Header>
    <p>
      {success}
    </p>
  </Message>)}
  </Form>
        </Accordion.Content>
      </Accordion>
<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
    
  )
}

export default PostsLists