import "./App.css";
import Item from "./components/Item";
import Itemdata from "./components/Itemdata";
import Card from "./components/Card";
import NewProduct from "./components/NewProduct";
function App(props) {
  const itemTwoname = "item2";
  const respone = [
    {
      itemName: "item1",
      itemDay: "20",
      itemMonth: "june",
      itemYear: "1998",
    },
    {
      itemName: "item2",
      itemDay: "22",
      itemMonth: "july",
      itemYear: "1997",
    },
    {
      itemName: "item3",
      itemDay: "27",
      itemMonth: "june",
      itemYear: "1989",
    },
  ];
  function propsData(data){
    
    console.log(data);
  }
  function fetchName(name){
    console.log("i am in app.js")
    console.log(name)
  }
  return (
    <>
      <Card>
        <NewProduct printData={propsData} fetch={fetchName}/>
        <Item name={respone[0].itemName} class="applytext">
          Hello I'm am first item</Item>
        <Itemdata
          day={respone[0].itemDay}
          month={respone[0].itemMonth}
          year={respone[0].itemYear}
        ></Itemdata>

        <Item name={respone[1].itemName}></Item>
        <Itemdata
          day={respone[1].itemDay}
          month={respone[1].itemMonth}
          year={respone[1].itemYear}
        ></Itemdata>

        <Item name="item3"></Item>
        <Itemdata day="24" month="september" year="1998"></Itemdata>
        <div className="App">Himanshu</div>
      </Card>
    </>
  );
}
export default App;
