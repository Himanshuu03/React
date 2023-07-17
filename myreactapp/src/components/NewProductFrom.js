import { useState } from "react";

function NewProductForm(props){

    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const productData ={
           title:title,
           date:date
        }

        // console.log(productData);
        props.onSaveProduct(productData);
        props.onfetch("HImanshuuuu");
        setDate('');
        setTitle('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-product_title">
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-product_date">
                <label>Date</label>
                <input type="date" value={date} min='2023-01-01' max='2023-12-12' onChange={dateChangeHandler}></input>
            </div>
            <div className="new-product_button">
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}
export default NewProductForm;