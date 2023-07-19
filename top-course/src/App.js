import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {filterData,apiUrl} from './data';

const App = () => {
  const [courses,setCourses] = useState("");
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch(apiUrl);
        const result = await response.json();
        setCourses(result.data);
      }
      catch(e){
      }
    }
    fetchData();
  })
  return(
    <div>
      <Navbar title ="Top Course"></Navbar>

      <Filter filterData ={filterData}></Filter>
      
      <Cards courses={courses}></Cards>
    </div>
  );
};

export default App;
