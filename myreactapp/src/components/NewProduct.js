import './NewProduct.css';
import NewProductForm from './NewProductFrom';

function NewProduct(props) {
    function saveProduct(product){
        // console.log("I'm inside new product");
        props.printData(product);
    }
    function fetch1(name){
        console.log("i am in newProduct.js");
        props.fetch(name);
    }
    return(
        <div>
            <NewProductForm onSaveProduct={saveProduct} onfetch={fetch1}/>
        </div>
    )
}
export default NewProduct;