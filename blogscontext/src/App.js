import { useContext, useEffect ,useState } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import './App.css'

export default function App() {
    const {fetchBlogPost} = useContext(AppContext);

    const [dark,setDark] = useState(false);

    useEffect(()=>{
      fetchBlogPost();
    },[])
  return (
    <div className={`${dark ? "text-white bg-black" : "bg-white text-black"}
     w-full h-full flex flex-col justify-center items-center gap-y-1`}>
      <Header setDark={setDark} dark={dark}/>
      <Blogs/>
      <Pagination dark={dark} />
    </div>
  );
}

