import React, { useEffect, useLayoutEffect, useRef, useState} from 'react';
import Axios from 'axios';

// Axios.defaults.withCredentials = true;

export default function Logout ({setIsLogoutOpen, setLoggedInUser}) {
  function handleclose (){
    setIsLogoutOpen(false)

  }

  function handleLogout() {

    Axios.get('http://localhost:3000/logout', {
    }).then((res) => {
      console.log('logout success');
      setLoggedInUser(false);
      setIsLogoutOpen(false);
    }).catch((err)=>{
      console.log('Axios Err navbar: ',err)
    });

  
    
  }
  return (
    <div className='modal-box' >
      <div className='popup-inner'> 
        <div className= 'form-wrapper'>
          <div className= 'close-btn' onClick={handleclose}>X</div>
          <div className = 'form logout'>
            Are You Sure you want to Logout?
            <div className ='logout-modal-btn'>
              <input className = 'submit-btn-logout' value="Logout" type="submit" onClick={handleLogout}/>
              <input className = 'submit-btn-close' value="Close" type="submit"   onClick={handleclose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}