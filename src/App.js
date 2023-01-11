import logo from './logo.svg';
import First from './components/firstpage.js';
import Second from './components/second.js';
import Third from './components/thirdpage.js';
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<First></First>}   />
        <Route path="/second" element={<Second></Second>}   />
        <Route path="/second/third" element={<Third></Third>}   />
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
