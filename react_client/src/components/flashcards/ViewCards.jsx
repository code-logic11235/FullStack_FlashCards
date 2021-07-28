import React, { useEffect, useState} from 'react';
import Card from './Card.jsx';
export default function ViewCards({flashcardsData, deleteFlashcard}){
  const [index, setIndex]=useState(0);

  function nextCard(){
    setIndex(index + 1)

  }
  
  function previousCard(){
    setIndex(index - 1)

  }
 return (  
   <> 
    {
      flashcardsData[0].length === 0 || flashcardsData[0][0].question === null? 
      <h2 className = 'empty-flashcards'> 
      You have no flashcards to study 
      </h2>

      :
      <div className = 'flashcards-container'>
        <button className="material-icons" onClick={previousCard} disabled = {index === 0} >arrow_back_ios</button>
          <Card flashcard={flashcardsData[0][index]} 
          setIndex = {setIndex}
          index = {index} 
          totalNumberofCards={flashcardsData[0].length} 
          deleteFlashcard={deleteFlashcard}
          subject_id = {flashcardsData[1]}/>
        <button className="material-icons" onClick={nextCard} disabled = {index === flashcardsData[0].length - 1}>arrow_forward_ios</button>
      </div>
    }

   </>
  )
}

