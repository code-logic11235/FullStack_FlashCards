import React, { useState} from 'react';
// import CreateFlashCards from './CreateFlashCards.jsx';

export default function Counter({subjects, setShowDecks}){
  function handleClick (){
    setShowDecks(false);
    document.getElementById('dashboard-btn').style.display='flex';

  }
  return (

    <div id = 'number-of-decks'>
      <div className = 'back-btn-container'>
        <button id = 'back-btn' onClick={handleClick}> <span className="material-icons" id ='arrow_back'>arrow_back</span>Back</button>
      </div>
      <div className = 'number-of-decks'>
        Showing {subjects} subjects 
      </div>
    </div>
    )
}