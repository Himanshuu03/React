import './App.css';
import {useState} from 'react';
function App() {
  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState("");
  // function changeFirstHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeSecondHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email :"",
    comment :"",
    isVisible :true,
    mode : true
  })
  console.log(formData.email);
  function changeHandler(event){
    const {name ,value ,checked ,type} = event.target;
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
        // [event.target.name] : event.target.value
        // name:value
        [name] : type === "checkbox" ? checked :value
      }
    })
  }
  console.log(formData);
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="first name" onChange={changeHandler} name="firstName" value={formData.firstName}></input>
        <br/>
        <br/>
        <input type="text" placeholder="last name" onChange={changeHandler} name="lastName" value={formData.lastName}></input>
        <br/>
        <br/>
        <input type="email" placeholder="email" onChange={changeHandler} name="email" value={formData.email}></input>
        <br/>
        <br/>
        <textarea placeholder='enter your comments here' onChange={changeHandler} name="comment" value={formData.comment}></textarea>
        <br/>
        <br/>
        <input type='checkBox' onChange={changeHandler} name="isVisible" id="isVisible" checked={formData.isVisible}></input>
        <label htmlFor='isVisible'>Am i visible</label>
        <br/>
        <br/>
        <input type='radio' onChange={changeHandler} name="mode" id="isMode" value="ismode" checked={formData.mode === "ismode"}></input>
        <label htmlFor='isMode'>On</label>
        <br/>
        <br/>
        <input type='radio' onChange={changeHandler} name="mode" id="offMode" value="offmode" checked={formData.mode === "offmode"}></input>
        <label htmlFor='offMode'>Oof</label>
      </form>
    </div>
  );
}

export default App;
