import React, { useState} from 'react';
import CreateFlashCards from './CreateFlashCards.jsx';

export default function Cards({flashcard}){
  const [createFlashCards, setCreateFlashCards]=useState(false)
function handleClick(){

}
  return (
    
      <div className='cards' >

        {createFlashCards?
         <CreateFlashCards setCreateFlashCards={setCreateFlashCards}/>: null
      }
      {flashcard.question}
      {flashcard.answer}
        {/* <br />
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
        <hr /> */}
      </div>
    
  )
}