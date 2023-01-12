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
</label>
<br></br>

{
    type=='Earning' &&(
      <div>
      <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Initial Balance</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setIncome(e.target.value)}></input>
      
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Expected Savings</label>
      <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setSaving(e.target.value)}></input>
    </div>
    
</div>
    )
}
{
    type=='Non earning' &&(
      <div>
      
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Initial Balance</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Expected Savings</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className='duration'>
  <label>Duration</label>
  <select onChange={(e)=>setType(e.target.value)}>
    <option>1 Week</option>
    <option>1 Week</option>
    <option>1 Week</option>

  </select>
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