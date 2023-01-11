import React,{ useState } from "react";
import styled from "styled-components";
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
width:100%;
`;
const BalanceBox=styled.div`
font-size:18px;
width:100%;
font-weight:bold;
align-items:center;
display:flex;
flex-direction:row;
justify-content:space-between;
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
const AddTransactionContainer=styled.div`
display:flex;
flex-direction:column;
padding:15px 20px;
border:1px solid #e6e8e9;
text-align:center;
width:100%;
margin: 20px;
background-color:white;
gap:10px;
&input{
    outline:none;
    padding:10px 12px;
    border-radius:4px;
    border:1 px solid #e6e8e9;
}
`;
const RadioBox=styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
&input{
    width:unset;
    margin:0 10px;
}
`;
const ExpenseContainer=styled.div`
display:flex;
flex-direction:row;
gap:12px;
margin:20px;
`;
const ExpenseBox=styled.div`
display:flex;
flex-direction:column;
border-radius:4px;
border:1px  solid #e6e8e9;
padding:15px 20px;
width:135px;
font-size:14px;
& span{
    font-weight:bold;
    font-size:20px;
    color:${props=>props.isIncome?"green":"red"};
}
`;
const AddTransactionView=(props)=>{
    const [amount,setAmount]=useState();
    const [des,setDes]=useState();
    const [date,setDate]=useState();
    const [type,setType]=useState("Expense");
const addTransaction=()=>{
    props.addTransaction({amount:Number(amount),des,type,id:date})
    props.toggleAddTxn();
}
return(
    <AddTransactionContainer>
        <input placeholder="Amount" type="number" value={amount} onChange={e=>setAmount(e.target.value)}></input>
        <input placeholder="Description" value={des} onChange={e=>setDes(e.target.value)}></input>
        <input placeholder="Date" value={date} onChange={e=>setDate(e.target.value) } type="date"></input>
        <RadioBox>
        <input type="radio" id="expense" name="type" value="Expense"
        checked={type=="Expense"
        }
        onChange={(e)=>setType(e.target.value)}
        ></input>
        <label for="expense">Expense</label>
        <input type="radio" id="income" name="type" value="Income"
        checked={type=="Income"}
        onChange={(e)=>setType(e.target.value)}
        ></input>
        <label for="income">Income</label>
        </RadioBox>
        <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
)
}
const Overviewcomponent=(props)=>{
    const[isAddTxnVisible,toggleAddTxn]=useState(false);
    return (
        <Container>
            <BalanceBox>Balance:${props.inc-props.exp}
                <AddTransaction onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible?"Cancel":"Add"}</AddTransaction>
            </BalanceBox>
            {isAddTxnVisible &&<AddTransactionView  toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}
            <ExpenseContainer>
                <ExpenseBox isIncome={false}>
                    Expense<span>${props.exp}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                    Income<span>${props.inc}</span>
                </ExpenseBox>
            </ExpenseContainer>
            </Container>
    )
}
export default Overviewcomponent;
