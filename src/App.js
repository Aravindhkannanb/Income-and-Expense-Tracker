import logo from './logo.svg';
import First from './components/firstpage.js';
import Second from './components/second.js';
import Third from './components/thirdpage.js';
import Four from './components/fourpage.js';
import FileUpload from './firebase/upload.js';
import Currency from './components/currency.js';
import Pay from './components/googlepay.js';
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';
import Remainder from './components/remainder.js';
import './App.css';
import Chart from './components/charts.js';
import { UserTransactionDetails } from './components/data';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<First></First>}   />
        <Route path="/second" element={<Second></Second>}   />
        <Route path="/second/third" element={<Third></Third>}   />
        <Route path="/currency" element={<Currency></Currency>} />
        <Route path="/upload" element={<FileUpload></FileUpload>} />
        <Route path="/pay" element={<Pay></Pay>} />
        <Route path="/remainder" element={<Remainder></Remainder>}  />
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
