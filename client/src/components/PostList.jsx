import { Card,  Image,Button,Input ,Form, Accordion,Icon,Message} from 'semantic-ui-react'
import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { useParams } from 'react-router'
import swal from 'sweetalert'
function PostList() {
    const [posts,setPosts]=useState([])
    const [showUpdate,setShowUpdate]=useState(false)
    const [postId,setPostId]=useState("")
    const [updatePost,setUpdatePost]=useState({})
    const [newPost,setNewPost]=useState({})
    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")
    const [deletePost,setDeletePost]=useState(false)

    const {id}=useParams()
    useEffect(() => {
    axios.get(`/api/myapp/user/getownpost/${id}`).then((res)=>setPosts(res.data.data)).catch((err)=>console.dir(err))  
    
    }, [posts,id])
    //console.log(posts)
    const handleShow=(post_id)=>{
        setShowUpdate(!showUpdate);
        setPostId(post_id)
    }
    const handleChange=(e)=>{
        setUpdatePost({...updatePost, [e.target.name]:e.target.value})
    }
    const handleSave=(post_id)=>{
        axios.put(`/api/myapp/user/updatepost/${post_id}`,updatePost)
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
                    }})
        .catch((err)=>console.dir(err))
    }
    const [activeIndex,setActiveIndex]=useState(0)
    const handleClick=(e,titleProps)=>{
    const {index}=titleProps;
    const newIndex=activeIndex===index ?-1 : index;
        setActiveIndex(newIndex)
    }
    const handleNewPost=(e)=>{
        setNewPost({...newPost,[e.target.name]:e.target.value})
    }
    //console.log("newost:",newPost)
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
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`/api/myapp/user/deletepost/${postId}`).then((res)=>{if (res){
                    setDeletePost(true)
                }}).catch((err)=>console.dir(err))
              swal("Poof! Your post has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Operation cancelled!");
            }
          })
        
  return (
    <div className='col-span-2 m-auto w-full border-2 border-[green] h-full'>
    {posts.map((post)=>(
        <Card key={post._id}>
            {(showUpdate && postId===post._id) ? (
                <Form  onChange={(e)=>handleChange(e)}>
                    <Input  label="Picture"defaultValue={post.postImg} name="postImg" type="text"/>
                    <Input  label="Title" defaultValue={post.title}  name="title" type="text"/>
                    <Input  label="Dtae"defaultValue={post.date} name="date" type="date"/>
                    <Input  label="Description"defaultValue={post.description} name="desciprtion"  type="text"/>
                    <Input  label="Category"defaultValue={post.category} name="category"  type="text"/>
                </Form>
            ):( <>
    <Image src={post.postImg} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{post.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{post.date}</span>
      </Card.Meta>
      <Card.Description>
       {post.description}
      </Card.Description>
    </Card.Content>
    </>)}
    {(showUpdate && postId===post._id) ? (<div className='ui two buttons'>
          <Button basic color='green'
          onClick={()=>{
            handleSave(post._id)
          }}>
            Save
          </Button>
          <Button basic color='red'onClick={()=>{
            handleShow(post._id)
          }}>
            Cancel
          </Button>
        </div>):(<div className='ui two buttons'>
          <Button basic color='green'
          onClick={()=>{
            handleShow(post._id)
          }}>
            Update
          </Button>
          <Button basic color='red'onClick={()=>handleDeletPost(post._id)}>
            Delete
          </Button>
        </div>)}   
  </Card>
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
{deletePost && (
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
          )}
    </div>
  )
}
}

export default PostList