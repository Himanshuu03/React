import { useState } from "react";

function Card({id,image,info,price,name,removeTour,displayTour}){
    const [readMore ,setReadMore] = useState(false);
    const [text,setText] = useState("Interested")
    const description = readMore ? info :`${info.substring(0,200)}....`
    function readmoreHandler(){
        setReadMore(!readMore);  
    }
    function textHandler(){
        setText("Pay")
    }
    return(
        <div className="card">
            <img src={image} className="image" alt="i"/>
            <div className="tour-info">
            <div className="tours-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description} 
                <span className="read-more" onClick={readmoreHandler}>
                    {readMore ? `Show Less` : `Read More`}
                </span>
            </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
            <button className="btn-green" onClick={()=> {displayTour(id);textHandler();}}>
                {text}
            </button>
        </div>
    )
}
export default Card;