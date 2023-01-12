import React,{useState,useEffect} from 'react';
import  {db} from "./firebase.js";
import { addDoc, collection,doc,getDocs } from "firebase/firestore";
const Fetch= async()=>{

    const [details, setDetails] = useState([])

    useEffect(async()=>{
        const query=await getDocs(collection(db,"UserTransactiondetails"))
        
        query.forEach((doc)=>{
        
        setDetails([... details, doc.data()]) 
    });
    },[])
   
console.log(details);
return(
    <div>
        <h1>Working</h1>
    {
       details.map((doc)=><p>Hello</p>)
    }
    </div>
)
}
export default Fetch;