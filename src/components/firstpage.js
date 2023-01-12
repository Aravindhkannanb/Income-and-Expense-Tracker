import React ,{useState} from "react";
import './firstpage.css';
import Wallet from './animation.json';
import Lottie from "lottie-react";
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';

const First=()=>{
  
     const[names,setName]=useState("Name to be Register");
    function storename(e){
        setName(e.target.value);
    }
    console.log(names)
    return (
        <div >
            <div >
              <h3>Income and Expense Tracker</h3>
     <Lottie animationData={Wallet} className="lottie"/>
     </div>
     <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Enter your name:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={storename}></input>
  </div>
 <br></br>
 <Link to="/second">
 <button type="submit" class="btn btn-primary">Confirm</button>
  </Link> 
</div>
    )
}
export default First;
