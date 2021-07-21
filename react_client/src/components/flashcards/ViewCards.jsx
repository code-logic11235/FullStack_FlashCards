import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import CreateFlashCards from './CreateFlashCards.jsx';
import CardCarousel from './CardCarousel.jsx'
import $ from 'jquery'
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