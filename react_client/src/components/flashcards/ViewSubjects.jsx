import React, { useEffect, useState} from 'react';
import Subject from './Subject.jsx'
import ViewCards from './ViewCards.jsx';

import SearchBar from './SearchBar.jsx';
import Counter from './Counter.jsx'



export default function ViewSubjects({subjects, setShowSubject, getFlashcardsBySubject}) {

  
  
return (
  <>
   

  
   <SearchBar name = {'subject'}/>
   <Counter setShowSubject={setShowSubject} subjects = {subjects.length}/>

    <div className='subject-card-container'>

      {subjects.map((subject, index)=>{
          return <Subject clickSubject = {getFlashcardsBySubject} key = {index} subject = {subject} />
      })}
   
    </div> 


  </>
)
}