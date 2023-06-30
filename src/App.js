import React, { useEffect } from 'react';
import './CSS/App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import SignIn from './SignIn';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const prms = loadStripe('pk_test_51NORFASANFwudfXiYu6BSmlyilDuCJfkwzVf6jP3Db4hVdc0yVu4teTJgNgqtmMnAbAi8dwdxsg9HqJHEKsukz1l00dkqdgd6E');

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
          <Route path="/payment" element={ <>
                                        <Header/>
                                        <Elements stripe={prms}><Payment /></Elements>
                                          
                                         </>
                                     }/>
          <Route path="/" element= {<> <Header/> <Home/> </>} />
        </Routes>
      </main>
    </BrowserRouter>
      
  );
}

export default App;
