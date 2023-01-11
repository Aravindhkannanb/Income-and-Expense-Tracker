import styled from "styled-components";
import Overviewcomponent from "./Overcomponent.js";
import Transactioncomponent from "./Transactioncomponent.js";
import React, { useEffect, useState } from "react";
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px 0 10px;
width:360px;
`;
const Homecomponent=()=>{
    const [transactions,updateTransaction]=useState([]);
    const [exp,setExp]=useState(0);
    const [inc,setInc]=useState(0);


    const addTransaction=(payload)=>{
        const transactionArray=[...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    }
    const calculateBalance=()=>{
        let income=0;
        let expense=0;
        transactions.map((payload)=>{
            payload.type=="Expense"?expense=expense+payload.amount:income=income+payload.amount;
        })
        setExp(expense);
        setInc(income);
    }
    useEffect(()=>calculateBalance(),[transactions])
    return (
        <Container>
<Overviewcomponent addTransaction={addTransaction} exp={exp} inc={inc}/>
<Transactioncomponent transactions={transactions}/>
        </Container>
    )
}
export default Homecomponent;