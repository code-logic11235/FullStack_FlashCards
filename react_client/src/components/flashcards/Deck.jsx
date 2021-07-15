import React, { useState} from 'react';

export default function Deck({deck_name}){

  return (
    <div className ='deck-container'>
      <div className='deck'>
      {/* {console.log(deck_name)} */}
      {/* bru */}
      
        <h1>
        {deck_name}
        </h1>

      
        {/* {console.log(deck_name)} */}
      </div>
    </div>
  )
}