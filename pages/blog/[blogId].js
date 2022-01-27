import { useRouter } from "next/router"
import { useEffect, useState } from "react";

function BolgDetails(){
    const router = useRouter()
    const blogId = router.query.blogId
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`)
        .then(res => res.json())
        .then(data => setBlogs(data));
        
    },[]);

    console.log(blogs)
    return(
        <>
          <p>Blog ID: {blogId}</p>
          <h1 className=""><span>Blog Title:</span> {blogs.title}</h1>
        </>
    )
}

export default BolgDetails