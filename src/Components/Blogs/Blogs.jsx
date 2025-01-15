import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelAddToBookmark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">blogs: {blogs.length} </h1>
            {
                blogs.map(blog => 
                <Blog key={blog.id} 
                blog={blog}>
                handelAddToBookmark={handelAddToBookmark}
                </Blog>)
               
            }
        </div>
    );
};

export default Blogs;