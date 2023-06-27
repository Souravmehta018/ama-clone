import React, { useEffect } from 'react';
import './CSS/App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import SignIn from './SignIn';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();
    useEffect(() => {
      // will only run once when app component loads or reloads
      auth.onAuthStateChanged(authUser =>{
        console.log("user is>>>", authUser);

        if (authUser){
          //user is logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }
        else {
          //user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
    }, [])

  return (
    //BEM naming convention
    
    <BrowserRouter>
          
      <main>
        <Routes>
          <Route path="/SignIn" element= {<><SignIn /></>} />
          <Route path='/checkout' element= {<> <Header/> <Checkout /> </>} />
          <Route path="/" element= {<> <Header/> <Home/> </>} />
        </Routes>
      </main>
    </BrowserRouter>
      
  );
}

export default App;
