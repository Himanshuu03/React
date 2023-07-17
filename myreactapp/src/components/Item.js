import './Item.css';
import {useState} from 'react';
function Item(props) {
    // const itemName = props.name;
    //state
    const[itemName,setItemName] = useState(props.name);
    function clickHandler(){
      setItemName("nirma");
      console.log("button clicked");
    }
    return(
        <div>
          <p className ={props.class}>{itemName}</p>
          {/* {props.children} */}
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
    )
}
export default Item;