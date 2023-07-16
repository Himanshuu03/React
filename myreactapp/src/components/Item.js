import './Item.css';
function Item(props) {
    const itemName = props.name;
    return(
        <>
          <p>{itemName}</p>
          {props.children}
        </>
    )
}
export default Item;