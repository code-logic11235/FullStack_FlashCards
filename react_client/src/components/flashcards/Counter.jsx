import React, { useState} from 'react';
// import CreateFlashCards from './CreateFlashCards.jsx';

export default function Counter({subjects, setShowSubject}){
  function handleClick (){
    setShowSubject(false);
    document.getElementById('dashboard-btn').style.display='flex';

  }
  return (

    <div id = 'number-of-decks'>
      <div className = 'number-of-decks'>
        Showing {subjects} subjects 
      </div>
    </div>
    )
}