import React, { useState} from 'react';

export default function Deck({subject}){

  return (
    <div className ='deck-container'>
      <div className='deck'>
      {/* {console.log(deck_name)} */}
      {/* bru */}
        {/* <hr /> */}
        <br />
        <hr className='hr-decor'/>
        <br />
        <hr />
        <br />
        <hr />
        <h1>
        {subject}
        </h1>
        <br />
        <hr />
        <br />
        <hr />
        <br />
        <hr />
     
       
      

      </div>
    </div>
  )
}