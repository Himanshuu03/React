import './Item.css';
function Item(props) {
    const itemName = props.name;
    return(
        <>
          <p className ={props.class}>{itemName}</p>
          {props.children}
        </>
    )
}
export default Item;