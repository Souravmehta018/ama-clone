/* To make things faster we added extension es7 
wrote "rfce" and basic format automatially popped up*/
import React from 'react';
import "./CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search'; /*copied from material ui website to download search icon */
import { ShoppingCartCheckout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {

  const[{basket, user}] = useStateValue();

  const handleAuth = () => {
    if (user) {   // if there was a user
      auth.signOut();   //then pull signout module from firebase
    }
  }

  return (
    <div className='header'>
      <Link to="/">
      <img className='header__logo'
        src='https://nickiekrommingahill.com/wp-content/uploads/2020/05/white-amazon-logo-png-6.png'
            alt=''
        />
      </Link>
      
      <div className='header__search'>
        <input className='header__searchInput' type='text' />      
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
          <Link to= {!user && "/SignIn"}>   {/*If there was no user then redirect to login page */}
        <div className='header__options' onClick={handleAuth}>
          <span className='header__optionLineOne'>
            Hello {user ? user.email : 'Guest'}
          </span>
          <span className='header__optionLineTwo'>
            {user ? 'Sign Out' : 'Sign In'} {/* if user exist then display sign out else sign in*/  }
          </span>
        </div>
          </Link>
        <div className='header__options'>
        <span className='header__optionLineOne'>
          Returns
          </span>
          <span className='header__optionLineTwo'>& Orders </span>
        </div>
        <div className='header__options'>
        <span className='header__optionLineOne'>
          Your
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartCheckout />
          <span className='header__optionBasket header__basketCount'>
            {basket?.length}   {/* Question mark is just to handle errors and not freak out if something goes wrong */}
          </span>
        </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header
