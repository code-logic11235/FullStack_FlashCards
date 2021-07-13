import React, { useState} from 'react';
import SignUpForm from './SignUpForm.jsx'
import SignInForm from './SIgnInForm.jsx'
import $ from 'jquery';

export default function Forms({isFormOpen, setIsFormOpen, loggedInUser, setLoggedInUser}){
  const [signUpForm, setSignUpForm] = useState(false);
  $(function(){
    $('.signin-btn, #sign-in-instead').on('click', ()=>{
      setIsFormOpen(true);
      setSignUpForm(false);
      
    })
    $('.signup-btn, #sign-up-instead').on('click', ()=>{
      setIsFormOpen(true);
      setSignUpForm(true);
      
    })
    $('.modal-box').on('click', (e)=>{
      if(e.target.closest('.form-wrapper')) return 
      setIsFormOpen(false);
      
      
    })
  })



  return (


    <>

           {(isFormOpen) ? 
           (signUpForm ? 
           <SignUpForm 
            setIsFormOpen = {setIsFormOpen}/> : 
           <SignInForm 
              loggedInUser ={loggedInUser} 
              setLoggedInUser = {setLoggedInUser}
              setIsFormOpen = {setIsFormOpen}/> ):
              
           null}
     

    </>
  )
}
