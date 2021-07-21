import React, { useState} from 'react';
// import Cards from './Cards.jsx';
import Axios from 'axios';

export default function Deck({subject, loggedInUser}){
const [flashCards, setFlashCards]=useState();
const [showFlashCards, setShowFlashCards]=useState(false);
const [showDeck, setShowDeck]=useState(true)

function handleClick(e){
  var text = e.target.textContent;
  Axios.post('http://localhost:3000/getflashcards', {
    subject: text,
    user_id : loggedInUser.data.user_id,
  }).then((res) => {
    
    setFlashCards(res.data)
    setShowFlashCards(true)

    setShowDeck(false);

  }).catch((err)=>{

  });
}
  return (
    <>
      <div className ='deck-container'>
        <div className='deck' onClick={handleClick}>
          {subject}
        </div>
      </div> 
    {/* <div className = 'flashcards-container'>
    {showFlashCards ? 
    flashCards.map((flashcard, index)=>{
      return <Cards key = {index} flashcard = {flashcard}  />
   }): 
   null 
    }
  
    </div> */}
    </>
  )
}