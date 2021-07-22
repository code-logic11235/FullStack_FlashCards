import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import CreateFlashCards from './CreateFlashCards.jsx';

export default function ViewCards({flashcardsData}){
  const [createFlashCards, setCreateFlashCards]=useState(false)

useEffect(()=>{
 
},[])

 return ReactDOM.createPortal(  
   <>
      <div>
        hello
      </div>

   </>, document.getElementsByClassName('view-flashcards')[0]



      
  )
}