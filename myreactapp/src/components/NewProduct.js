import './NewProduct.css';
import NewProductForm from './NewProductFrom';

function NewProduct({props,fetch}) {
    // function saveProduct(product){
    //     // console.log("I'm inside new product");
    //     props.printData(product);
    // }
    // function fetch1(name){
    //     console.log("i am in newProduct.js");
    //     props.fetch(name);
    // }
    return(
        <div>
            <NewProductForm onfetch={fetch}/>
        </div>
    )
}
export default NewProduct;