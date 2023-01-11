import React from "react";
import styled from 'styled-components';
import Homecomponent from "./index.js";
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px 0 10px;
`;
const Header=styled.span`
color:black;
font-size:25px;
font-weight:bold;
`;
const Third=()=>{
    return(
        <Container>
            <Header>Expense Tracker</Header>
            <Homecomponent />
        </Container>
    )
}
export default Third;