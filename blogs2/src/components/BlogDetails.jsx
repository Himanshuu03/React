import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BlogDetails({post}) {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        <p>
            By
            <span>{post.author}</span>
            on 
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p>Posted On {post.date}</p>
        <p>{post.content}</p>
        <div>
        {
            post.tags.map((tag,index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span>#{tag}</span>
                </NavLink>
            ))
        }
        </div>
    </div>
  )
}
