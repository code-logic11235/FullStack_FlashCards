import React, { useState} from 'react';
import Cards from './Cards.jsx';
import Axios from 'axios';

export default function Deck({subject, loggedInUser, setShowDeck}){
const [flashCards, setFlashCards]=useState();
const [showFlashCards, setShowFlashCards]=useState(false);
function handleClick(e){
  var text = e.target.textContent;
  Axios.post('http://localhost:3000/getflashcards', {
    subject: text,
    user_id : loggedInUser.data.user_id,
  }).then((res) => {
    
    setFlashCards(res.data)
    setShowFlashCards(true)
    
    setShowDeck(false);
    // let decks = document.getElementsByClassName('deck-container')
    // for(let i =0; i < decks.length; i++ ) {
    //   console.log(i);
    //   decks.style.display='none';
    // }
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
    <div className = 'flashcards-container'>
    {showFlashCards ? 
    flashCards.map((flashcard, index)=>{
      return <Cards key = {index} flashcard = {flashcard}  />
   }): null 
    }
    {/* {flashCards.map((flashcard, index)=>{
      return <Deck key = {index} flashcard = {flashcard}  />
   })} */}
    </div>
    </>
  )
}