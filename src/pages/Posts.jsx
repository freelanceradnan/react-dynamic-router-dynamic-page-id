import { useState,useEffect} from "react"
import { Link } from "react-router-dom"



const PostList=()=>{
    const [post,setPost]=useState([])
    useEffect(()=>{
    fetch('http://localhost:3000/notes')
    .then(res=>res.json())
    .then(data=>setPost(data))
    },[])
    return(
        <>
        {post.map((post)=>(
            <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
        ))}
        </>
    )
}
export default PostList