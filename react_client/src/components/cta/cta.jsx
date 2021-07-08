import React, { useState } from 'react';

export default function cta({isFormOpen, setIsFormOpen}) {

  return ( 
    <div className= 'band'>
      <div className='band-container'>
        <div className='band-message'>
          <h1>ARE YOU  </h1>
          <h1>READY TO LEARN?</h1>
          <h3>Rise to the challege.</h3>
          <h4> Flash cards for real learners.</h4>
          <div className='cta-buttons'>
            <button className = 'get-started' onClick={setIsFormOpen}> Get Started Now! </button>
            {/* <input type="button" /> */}
          </div>
        </div>
      </div>

    </div>

  )
}