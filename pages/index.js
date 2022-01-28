import { useEffect, useState } from "react";
import Banner from "../components/banner"
import HomeBlog from "../components/homeBlog";

function Home(){
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 10;
  useEffect(() => {
      fetch(`https://afternoon-atoll-34406.herokuapp.com/blogs?page=${page}&&size=${size}`)
      .then(res => res.json())
      .then(data => {
          setBlogs(data.blogs);
          const count = data.count;
          const pageNumber = Math.ceil(count/10);
          setPageCount(pageNumber)
      });
      
  },[page]);

  // const selected ={
  //     backgroudColor:"blue"
  // }
  
  return (
      
          <>
          <Banner></Banner>
            <center><h1  className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">BLOG POSTS</h1></center>
                  <div className="max-w-screen-2xl place-items-center sm:grid-cols-1 md:grid-cols-2 mx-auto gap-8 grid lg:grid-cols-4">
       
                      {
                          blogs.map(blog => <HomeBlog
                          key={blog._id}
                          blog = {blog}
                          ></HomeBlog>)
                      }
                      
                      <center className="lg:col-span-4 md:col-span-4 my-10">
                          <div className='w-full pagination'>
                              {
                                  [...Array(pageCount).keys()]
                                  .map(number => <button
                                       key={number}
                                       onClick={() => setPage(number)}
                                      className={number === page ? "selected" : ''}>{number + 1}
                                      </button>)
                              }
                              
                          </div>
                      </center>
                  </div>
          </>
      
  );
}
export default Home
