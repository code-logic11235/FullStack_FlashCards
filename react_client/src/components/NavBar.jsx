import React from 'react';
import $ from 'jquery';
import Axios from 'axios';
export default function NavBar({isSignIn, setIsSignIn}) {
  if (isSignIn.signedIn) {
    $('.signin-btn, .sign-in-instead').off('click');

  }
  function handleLogOut() {
    Axios.post('http://localhost:3000/logout', {
    }).then((res) => {
      console.log( 'logout success');
      setIsSignIn(false)
    }).catch((err)=>{
      console.log('Axios Err:',err)
    });

  
    
  }

  return (

  <div id='navbar'>

  {isSignIn.signedIn ? 
  <>
      <div className="material-icons " id= 'logout'>logout</div>
      <div className='logged-in-users' >{isSignIn.data.user} </div>
      <div className='user-menu-arrow'></div>
      {/* <span className='logout-btn' onClick={handleLogOut}><i class="material-icons " id= 'logout'>logout</i>Logout</span>  */}
  </>
  : 
  <>
    <i class="material-icons " id= 'person'>person</i> 
    <span className='signin-btn' >Sign In</span>
    <i class="material-icons " id= 'how-to-reg'>how_to_reg</i> 
    <a className='signup-btn' >Register</a>
  </>
  
  }


  
</div>
  )
}