import { useState } from 'react';
import {storage} from '../components/firebase.js';
import './upload.css';
import {ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';

const Fileupload=()=>{
    const [imageUpload,setImageUpload]=useState(null);
  const uploadImage=()=>{
    if(imageUpload==null){
        return;
    }
    else{
const imageref=ref(storage,`images/${imageUpload.name+v4()}`);
uploadBytes(imageref,imageUpload).then(()=>{
    alert("Image Uploaded");
});
    }
  }
  
    return (
        <div>
            <div class="container">
  <div class="card"> 
    <div class="drop_box">
      <header>
        <h4>Select File here</h4>
      </header>
      <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
      <input type="file" onChange={(e)=>{setImageUpload(e.target.files[0]);}}></input>
    <br></br>
      <button class="btn" onClick={uploadImage}>Choose File</button>
    </div>

  </div>
</div>
        </div>
    );
}
export default Fileupload;