import React, { useState} from 'react';
import SignUpForm from './SignUpForm.jsx'
import SignInForm from './SIgnInForm.jsx'
import $ from 'jquery';

export default function Forms({isFormOpen, setIsFormOpen}){
  const [signUpForm, setSignUpForm] = useState(false);
  $(function(){
    $('.signin-btn, #sign-up-instead').on('click', ()=>{
      setIsFormOpen(true);
      
    })
    $('.signup-btn, #sign-in-instead').on('click', ()=>{
      setIsFormOpen(true);
      setSignUpForm(true);
      
    })
  })


  return (


    <>

           {(isFormOpen) ? 
           (signUpForm ? <SignUpForm/> : <SignInForm/> ):
           null}
     

    </>
  )
}
