import React from 'react';
import './CSS/App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    //BEM naming convention
    
    <BrowserRouter>
      <header>
        <nav>
          <Header/>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path='/checkout' element= {<Checkout />} />
        </Routes>
      </main>
    </BrowserRouter>
      
  );
}

export default App;
