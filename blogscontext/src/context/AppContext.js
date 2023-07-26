import { createContext, useEffect, useState } from "react";
import {baseUrl} from '../baseUrl';
import axios from 'axios';

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
            // const result = await axios.get(finalUrl);
            // const result = await response.json();
            // const {data} = result;
            // console.log(data); 
            const {data} = await axios.get(finalUrl);
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPage(data.totalPages);
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
        loading,setLoading,post,setPost,page,setPage,totalPage,setTotalPage,handleChangePage,fetchBlogPost
    }
    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}