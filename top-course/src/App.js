import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {filterData,apiUrl} from './data';
import Loading from "./components/Loading";
import { toast } from "react-toastify";

const App = () => {
  const [course,setCourse] = useState(null);
  const [loading,setLoading] = useState(true);
  const [check,setCheck] = useState(filterData[0].title);
  const fetchData = async()=>{
    setLoading(true);
    try {
      const respone = await fetch(apiUrl);
      const result = await respone.json();
      setCourse(result.data);
    } catch (error) {
      toast.error("Error in api call")
    } 
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
      <Navbar title ="Top Course"></Navbar>
      </div>
      <div>
      <Filter filterData={filterData} setCheck={setCheck} check ={check}></Filter>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ?(<Loading></Loading>):(<Cards course={course} check={check}></Cards>)}
      </div>
    </div>
  );
};

export default App;
