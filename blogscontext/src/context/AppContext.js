import { createContext, useEffect, useState } from "react";
import {baseUrl} from '../baseUrl';

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [post,setPost] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPage,setTotalPage] = useState(null);


    async function fetchBlogPost(page = 1){
        setLoading(true);
        const finalUrl = `${baseUrl}?page=${page}`
        try{
            const response = await fetch(finalUrl);
            const result = await response.json();
            setPage(result.page);
            setPost(result.posts);
            setTotalPage(result.totalPages);
        }
        catch(e){
            console.log("error")
            setPage(1);
            setPost([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handleChangePage(page){
        setPage(page);
        fetchBlogPost(page);
    }

    const value ={
        post,setPost,loading,setLoading,totalPage,setTotalPage,page,setPage,fetchBlogPost,handleChangePage
    }

    return<AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}