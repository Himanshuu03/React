import logo from "./logo.svg";
import {useState} from 'react';
import "./App.css";

function App() {

  const [data, setData] = useState(0);

  function incrementHandler(){
    setData(data+1);
  }
  function decrementHandler() { 
    setData(data-1); 
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={incrementHandler}>+</button>
        <p>{data}</p>
        <button onClick={decrementHandler}>- </button>
      </div>
    </div>
  );
}

export default App;
