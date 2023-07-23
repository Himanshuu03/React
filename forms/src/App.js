import './App.css';
import {useState} from 'react'
function App() {
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    address:"",
    city:"",
    state:"",
    postalcode:"",
    isComment:false,
    isCandidates:false,
    isOffers:false,
    notify:false
  })
  function changeHandler(event){
    const {name,value,type,checked} = event.target;
    setData( prevData => {
      return{
        ...prevData,
        [name] : type === "checkbox" ? checked : value,
      }
    })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Your final data");
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First name</label>
        <br/>
        <input type='text' id="firstName" name="firstName" placeholder='Himanshu' value={data.firstName} onChange={changeHandler}></input>
        <br/>
        <label htmlFor='lastName'>Last name</label>
        <br/>
        <input type='text' id="lastName" name="lastName" placeholder='Jangra' value={data.lastName} onChange={changeHandler}></input>
        <br/>
        <label htmlFor='email'>Email</label>
        <br/>
        <input type='text' id="email" name="email" placeholder='himanshu@123.com' value={data.email} onChange={changeHandler}></input>
        <br/>
        <label htmlFor='country'>Country</label>
        <br/>
        <select name='country' value={data.country} id='country' onChange={changeHandler}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Dubai">Dubai</option>
        </select>
        <br/>
        <label htmlFor='address'>Street address</label>
        <br/>
        <input type='text' id="address" name="address" placeholder='1234 man Hattan' value={data.address} onChange={changeHandler}></input>
        <br/>
        <label htmlFor='city'>City</label>
        <br/>
        <input type='text' id="city" name="city" placeholder='Ambala' value={data.city} onChange={changeHandler}></input>
        <br/>
        <label htmlFor='state'>State /Province</label>
        <br/>
        <input type='text' id="state" name="state" placeholder='Haryana' value={data.state} onChange={changeHandler}></input>
        <br/>
        <label htmlFor='postalcode'>ZIP /Postal code</label>
        <br/>
        <input type='text' id="postalcode" name="postalcode" placeholder='134007' value={data.postalcode} onChange={changeHandler}></input>
        <br/>
        <input type='checkbox' id="comments" name='isComment' checked={data.isComment} onChange={changeHandler}></input>
        <label htmlFor='comments'>Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
        <input type='checkbox' id="candidates" name='isCandidates' checked={data.isCandidates} onChange={changeHandler}></input>
        <label htmlFor='comments'>Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
        <input type='checkbox' id="offers" name='isOffers' checked={data.isOffers} onChange={changeHandler}></input>
        <label htmlFor='offers'>Offers</label>
        <p>Get notified when a candidate accepts or reject an offer.</p>
        <h3>Push Notification</h3>
        <p>There are delivered via SMS to your mobile phone.</p>
        <input type='radio' name='notify' value="everything" id="everything" onChange={changeHandler} checked={data.notify === "everything"}></input>
        <label htmlFor='everthing'>Everything</label>
        <br/>
        <input type='radio' name='notify' value="saveAsEmail" id="saveAsEmail" onChange={changeHandler} checked={data.notify === "saveAsEmail"}></input>
        <label htmlFor='everthing'>Save as email</label>
        <br/>
        <input type='radio' name='notify' value="nopushNotifiction" id="nopushNotifiction" onChange={changeHandler} checked={data.notify === "nopushNotifiction"}></input>
        <label htmlFor='everthing'>No push notifiction</label>
        <br/>
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
