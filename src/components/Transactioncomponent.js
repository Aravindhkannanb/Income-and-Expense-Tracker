import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:10px 22px;
font-size:18px;
width:100%;
gap:10px;
font-weight:bold;
& input{
    padding:10px 12px;
    border-radius:12px;
    background:#e6e8e9;
    border:1px solid #e6e8e9;
    outline:none;
    width:100%;
}
`;
const AddTransaction=styled.button`
background:black;
color:white;
padding:5px 10px;
border-radius:4px;
cursor:pointer;
font-weight:bold;
font-size:15px;
`;
const Cell=styled.div`
display:flex;
flex-direction:row;
padding:10px 15px;
font-size:14px;
border-radius:2px;
align-items:center;
width:100%;
font-weight:normal;
justify-content:space-between;
border:1px solid #e6e8e9;
border-right:4px solid ${props=>(props.isExpense?"red":"green")};
`;
const TransactionCell=(props)=>{
    return(
        <Cell isExpense={props.payload.type==="Expense"}>
            <span>
                {props.payload.des}
            </span>
            <span>
           ${props.payload.amount}
            </span>
            <span>
                {props.payload.id}
            </span>
        </Cell>
    )
}
const Transactioncomponent=(props)=>{
    const[filteredTransaction,updateTxn]=useState('');
    const[searchText,updateSearchText]=useState(props.transactions);
const filterData=()=>{
    if(!searchText || !searchText.length){
        updateTxn(props.transactions);
        return;
    }
    let txn=[...props.transactions];
    txn=txn.filter((payload)=>payload.des.toLowerCase().includes(searchText.toLowerCase().trim()));
    updateTxn(txn);
};
console.log(filteredTransaction);
useEffect(()=>filterData(searchText),[props.transactions]);
    return (
        <Container>Transaction
            <input placeholder="Search" value={searchText} onChange={(e)=>{updateSearchText(e.target.value);
                filterData(e.target.value)}}/>
            {filteredTransaction.length?filteredTransaction.map((payload)=>(
                <TransactionCell payload={payload} />
            )):""};
                            <Link to="/Remainder"><AddTransaction >Remainder</AddTransaction></Link>
                            <Link to="/currency"><AddTransaction >Currency</AddTransaction></Link>

        </Container>
        
    )
}
export default Transactioncomponent;