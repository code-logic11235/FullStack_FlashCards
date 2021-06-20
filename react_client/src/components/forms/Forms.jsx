import React, { useState} from 'react';
import SignUpForm from './SignUpForm.jsx'

export default function Forms(){

  return (
    <>

      <div className='hero'>
        
        <div className='form-content-left'>
          <img className='form-img' src = 'https://picsum.photos/500/600' alt='form-img'/>
        </div>

        <div className='form-content-right'>
    
          <div className='form-box'>
            <div className='button-box'>

              <div id='btn'></div>

              <button type = 'button' className= 'toggle-btn'> Sign In </button>
              <button type = 'button' className= 'toggle-btn'> Register </button>
              
            </div>
            <SignUpForm/>
          </div>
        </div>
      </div>
    </>
  )
}
