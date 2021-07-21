import React, { useState} from 'react';
// import Cards from './Cards.jsx';
import Axios from 'axios';

export default function Deck({subject, clickSubject}){
// const [flashCards, setFlashCards]=useState();

// const [showDeck, setShowDeck]=useState(true)

function handleClick(e){
  var text = e.target.textContent;
  clickSubject(text);
  
}
  return (
    <>
    
      <div className ='deck-container'>
        <div className='deck' onClick={handleClick}>
          {subject}
        </div>
      </div> 
 
    </>
  )
}