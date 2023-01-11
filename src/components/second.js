import React,{useState} from 'react';
import './second.css';
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';

const Second=()=>{
    const[type,setType]=useState(null);
    const[income,setIncome]=useState(null);
    const[saving,setSaving]=useState(null);
    const[duration,setDuration]=useState(null);
    return(
        <div align="center">
            <h3>Select your Kind</h3>
           <label>
  <input type="radio" name="gender" value="Earning"  onChange={(e)=>setType(e.target.value)}></input>
  <span class="value">Earning</span>
</label>
<label>
  <input type="radio" name="gender" value="Non earning" onChange={(e)=>setType(e.target.value)}></input>
  <span class="value">Non Earning</span>
</label>{
    type=='Earning' &&(
      <div class="container">
    <div class="row">
      <div class="col-25">
        <label for="fname">Initial Balance</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Monthly Income" onChange={(e)=>setIncome(e.target.value)}></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Expected Savings</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Amount expected to save at each month end" onChange={(e)=>setSaving(e.target.value)}></input>
      </div>
    </div>
</div>
    )
}
{
    type=='Non earning' &&(
      <div class="container">
      
        <div class="row">
          <div class="col-25">
            <label for="fname">Initial Balance</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="firstname" placeholder="Monthly income" onChange={(e)=>setIncome(e.target.value)}></input>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Expected Savings</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="lastname" placeholder="Amount expected to save at month end"  onChange={(e)=>setSaving(e.target.value)}></input>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="country">Duration</label>
          </div>
          <div class="col-75">
            <select id="country" name="country" onChange={(e)=>setDuration(e.target.value)}>
              <option value="australia">1 Week</option>
              <option value="canada">2 Week</option>
              <option value="usa">4 Week</option>
            </select>
          </div>
        </div>
        
    </div>
  
    )
}
<br></br>
<Link to="/second/third"><button class="button button4" >Confirm</button></Link>

        </div>
    )
}
export default Second;