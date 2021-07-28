import React, { useState} from 'react';


export default function Card({flashcard, setIndex, index, totalNumberofCards, deleteFlashcard, subject_id }){
  const [showAnswer, setShowAnswer]=useState(false)

  function handleIndex(){
    if(index === totalNumberofCards-1){ 
      if(totalNumberofCards === 1) {
        setEmptyFlashcards(true)
      //   setIndex(0)
      } else {

        setIndex(index -1);
      }
    }
    else {
      setIndex(index);
    }
  }
return (
  <>
  {/* {console.log(flashcard)} */}
    <div className='flashcard-entry' onClick = {()=>{setShowAnswer(!showAnswer)}}>
      <br />
      <hr className='hr-decor'/>
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <h1>
        {showAnswer ? flashcard.answer: flashcard.question}
      </h1>
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      
    <button className='material-icons' 
    id= 'delete_forever' 
    onClick={(e)=>{e.stopPropagation(); handleIndex(); deleteFlashcard(flashcard, index, subject_id); }}>delete_forever</button>
    </div>
    <div className='flashcard-counter'> {`${index+1} / ${totalNumberofCards}`}</div>
  </>

)
}