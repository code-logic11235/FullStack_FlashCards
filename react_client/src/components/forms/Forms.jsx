import React, { useState} from 'react';
import SignUpForm from './SignUpForm.jsx'
import SignInForm from './SIgnInForm.jsx'
import $ from 'jquery';

export default function Forms(){
  const [signUpForm, setSignUpForm] = useState(false);
  $(function(){
    $('.nav.btn.signin, #sign-in-instead').on('click', ()=>{
      setSignUpForm(false);
    })
    $('.nav.btn.signup, #sign-up-instead').on('click', ()=>{
      setSignUpForm(true);
    })
  })


  return (


    <>

           {(signUpForm) ? <SignUpForm/> : <SignInForm/> }
     

    </>
  )
}
