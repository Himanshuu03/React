import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext"; 
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams,setSearchParama] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),null,tag);
    }
    else{
      fetchBlogPosts(Number(page))
    }
  },[location.pathname, location.search]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
        <Route path="/tags/:tag" element={<TagPage/>}></Route>
        <Route path="/categories/:category" element={<CategoryPage/>}></Route>
      </Routes>
    </>
  );
}
