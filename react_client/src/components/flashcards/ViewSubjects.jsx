import React, { useEffect, useState} from 'react';
import Subject from './Subject.jsx'
import Counter from './Counter.jsx'



export default function ViewSubjects({deleteSubject, subjects, setShowSubject, getFlashcardsBySubject}) {

  
  
return (
  <>
   

  

   <Counter setShowSubject={setShowSubject} subjects = {subjects.length}/>

    <div className='subject-card-container'>

      {subjects.map((subject, index)=>{

          return <Subject deleteSubject={deleteSubject} clickSubject = {getFlashcardsBySubject} key = {index} subject = {subject} />
      })}
   
    </div> 


  </>
)
}