import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";

const App = () => {
  const [tours,setTours] = useState(data);
   
  function removeTour(id){
    const newTours = tours.filter((e)=>e.id !== id);
    setTours(newTours);
   }
   function displayTour(id){
    const choiceTour = tours.filter((e) =>e.id === id);
    setTours(choiceTour);
   }
   if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={()=>{setTours(data)}} className="btn-white">
          Refresh
        </button>
      </div>
    );
   }
  return (
  <div className="app">
    <Tours tours={tours} removeTour={removeTour} displayTour={displayTour} title="Plan With Love"></Tours>
  </div>
  );
};

export default App;
