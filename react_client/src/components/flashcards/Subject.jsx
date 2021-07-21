import React, { useState} from 'react';
// import Cards from './Cards.jsx';
import Axios from 'axios';

export default function subject({subject, clickSubject}){
// const [flashCards, setFlashCards]=useState();

// const [showsubject, setShowsubject]=useState(true)

function handleClick(e){
  var text = e.target.textContent;
  console.log("subject text; ",text)
  clickSubject(text);
  
}
  return (
    <>
    
      <div className ='subject-container'>
        <div className='subject' onClick={handleClick}>
          {subject}
        </div>
      </div> 
 
    </>
  )
}