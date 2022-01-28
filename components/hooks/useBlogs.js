import { useEffect, useState } from "react";

const useBlogs = () =>{
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-atoll-34406.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data.blogs));
        
    },[]);
    // return necessary things fro product
    return [blogs];
}

export default useBlogs;