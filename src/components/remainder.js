import React from "react";
import './remainder.css';
import  {db} from "./firebase.js";
import { addDoc, collection } from "firebase/firestore";
import Pay from './googlepay.js';
import { useState } from "react";
const Remainder=()=>{
    const [note, setNote] = useState('');
  const [currentNotes, setCurrentNotes] = useState([]);
  const [phone, setPhone] = useState('');
  const [currentphone, setcurrentphone] = useState([]);
  const [date, setDate] = useState('');
  const [currentdate, setCurrentdate] = useState([]);
  const handleChange = (event) => {
    setNote(event.target.value);
  }
  const handleChanged = (event) => {
    setDate(event.target.value);
  }
  const details=collection(db,"UserRemainder");
  const handleClick = () => {
    setCurrentNotes([...currentNotes, note]);
    setcurrentphone([...currentphone,phone]);
    setCurrentdate([...currentdate,date]);
    addDoc(details,{
      Remainder:note,
      Phone:phone,
      Date:date,
  })
    
  }
  const handleChanges = (event) => {
    setPhone(event.target.value);
  }
 
    return (
        <div className="App">
          <h1>PayBack Remainder</h1>
          <p>A place to put your remainder details,phone number.</p>
          <div className="formHolder">
            <div className="mb-3">
              <label htmlFor='note' className='form-label'>Remainder details:</label>
              <input 
              type="text"
              className='form-control'
              id="note"
              name="note"
              placeholder='Enter a note here...'
              onChange={handleChange}
              value={note}
              />
              <br></br>
              <label htmlFor='note' className='form-label'>Phone number:</label>
              <input 
              type="text"
              className='form-control'
              id="note"
              name="note"
              placeholder='Enter a phone number'
              onChange={handleChanges}
              value={phone}
              />
              <br></br>
              <br></br>
              <label htmlFor='note' className='form-label'>Dates :</label>

              <input 
              type="date"
              className='form-control'
              id="note"
              name="note"
             
              onChange={handleChanged}
              value={phone}
              />
              <br></br>
              <br></br>
              <button type="button" class="btn btn-outline-primary" onClick={handleClick}>Submit</button>
            </div>
          </div>
          <br></br>
          <br></br>
    <Pay  />

          
        </div>
      );
}
export default Remainder;