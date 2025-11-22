import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const PostList=()=>{
    const [post,setPost]=useState([])
    useEffect(()=>{
   fetch('http://localhost:3000/notes')
   .then(res=>res.json())
   .then(data=>setPost(data))
    },[])
    const {PostId}=useParams()
    // console.log("my page id is",PostId)
    return(
        <>
        
        {post.map((post)=>(
            <li key={post.id}>
                <span>{post.para}</span>
            </li>
        ))}
        </>
    )
}
export default PostList