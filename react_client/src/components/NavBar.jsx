import React from 'react';
import $ from 'jquery';

export default function NavBar({setIsFormOpen,loggedInUser, setLoggedInUser}) {
  if (loggedInUser.signedIn) {
    $('.signin-btn, .sign-in-instead').off('click');

  }



  return (
  <div className='navbar'>  
      
    <div className='header-container'>
      <div className='logo'>
        <i className="material-icons " id= 'logo'>style</i> 
      
      </div>
      <span className='underline-name'>Opti-Cards</span>
    </div>
    
    
    {loggedInUser.loggedIn ? 
    <>
     <div className = 'navbar-desktop-signed-in' >
       <div className="material-icons " id= 'logout'>logout</div>
       <div className='logged-in-users' >{loggedInUser.data.firstname + ' ' +loggedInUser.data.lastname  } </div>
     </div>

     </>
   : 
   <div className = 'navbar-desktop'>

     <div className = 'navbar-desktop-links'>
       <ul>
         <li>
           <div className='navbar-signin'>
             <div className="material-icons " id= 'person'>person</div> 
             <div className='signin-btn' >Sign In</div>
           </div>
         </li>
         <li>
           <div className='navbar-register'>
             <div className="material-icons " id= 'how-to-reg'>how_to_reg</div> 
             <div className='signup-btn' >Register</div>
           </div>
         </li>
       </ul>
     </div>
   </div>
    }
  </div>
  )
}