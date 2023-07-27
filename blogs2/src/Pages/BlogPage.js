import React, { useState,useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

export default function BlogPage() {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog,setBlog] = useState(null);
    const [relatedblogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const {setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1)

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const result = await fetch(url);
            const response = await result.json();
            setBlog(response.blog);
            setRelatedBlogs(response.relatedBlogs)
        } catch (error) {
            console.error("error");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
  return (
    <div>
        <Header></Header>
        <button
        onClick={
            ()=>{
                navigate(-1);
            }
        }>
            Back
        </button>
        {
            loading ? <p>Loading</p> :
            blog ? (
                <div>
                    <BlogDetails post={blog}></BlogDetails>
                    <h2>Related Blogs</h2>
                    {
                        relatedblogs.map((post)=>{
                            return(
                                <div key={post.id}>
                                    <BlogDetails post={post}></BlogDetails>
                                </div>
                            )
                        })
                    }
                    </div>
            ):(
                <div>
                No Block Found
                </div>
            )
        }
    </div>
  )
}
