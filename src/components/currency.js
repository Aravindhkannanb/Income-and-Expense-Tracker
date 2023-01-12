import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './currency.css';

function Price() {
 const [data,setData]=useState([]);
 useEffect(()=>{
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(
    res=>{
      setData(res.data)
    }
  ).catch((err)=>console.log(err));
  var n=0;
 })
 return (
    <div>
      <table>
      <tr>
                <th>Currency Name</th>
                <th>Currency Rate</th>
            </tr>
            {data.map((ele)=>(
              <tr>
              <td>{ele.id}</td>
              <td>{ele.current_price}</td>
          </tr>
            ))}
      </table>
    </div>
  );
}

export default Price;
