import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

function BolgDetails(){
    const router = useRouter()
    const blogId = router.query.blogId
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://afternoon-atoll-34406.herokuapp.com/blogs/${blogId}`)
        .then(res => res.json())
        .then(data => setBlogs(data));
        
    },[]);

    console.log(blogs)
    return(
        <>
          <div className="max-w-7xl	 mx-auto py-14">
            <img className="w-full max-h-80" alt="travelai" src={blogs.image}/>
            <h1 className="text-indigo-800 font-bold text-9xl py-8"> {blogs.title}</h1>
            <div className="grid grid-cols-2">
                <h3 className="font-semibold text-6xl">THU <br/>28</h3>
                <div className="mx-4">
                    <h2 className="font-semibold text-4xl">{blogs.date}</h2>
                    <p className="text-4xl text-slate-400">{blogs.time}</p>
                </div>
            </div>
            <p className="font-semibold text-slate-500 text-2xl">{blogs.body}</p>
            <Link href='/'>
                <a>
                    <p className="text-center py-4 px-10 my-10 text-indigo-200 bg-indigo-700 font-medium border rounded-md">Go to Home</p>
                </a>
            </Link>
          </div>
        </>
    )
}

export default BolgDetails