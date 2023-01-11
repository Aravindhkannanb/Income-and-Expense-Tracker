import React ,{useState} from "react";
import './firstpage.css';
import Wallet from './animation.json';
import Lottie from "lottie-react";
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';
const First=()=>{
    const [data,setData]=useState(null);
    const [name,setName]=useState("Name to be Register");
    function getData(val){
        setData(val.target.value);
}
    function storename(){
        setName(data);
        console.log(name);
    }
    return (
        <div >
            <div >
     <Lottie animationData={Wallet} className="lottie"/>
     </div>
     <div class="container">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
    </div> 
</div>
  <br></br>
  <br></br>
  <Link to="/second"><button class="button button4" onClick={storename}>Confirm</button>
  </Link>
  
</div>
    )
}
export default First;