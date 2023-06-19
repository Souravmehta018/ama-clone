import React from 'react';
import './CSS/App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    //BEM naming convention
    
    <BrowserRouter>
      <>
        <>
          <Header/>
        </>
      </>
      <main>
        <Routes>
          <Route path='/checkout' element= {<Checkout />} />
          <Route path="/" element= {<Home/>} />
        </Routes>
      </main>
    </BrowserRouter>
      
  );
}

export default App;
