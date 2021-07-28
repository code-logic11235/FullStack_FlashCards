import React, { useEffect, useState} from 'react';
import Subject from './Subject.jsx'
import Counter from './Counter.jsx'



export default function ViewSubjects({subjects, setShowSubject, getFlashcardsBySubject}) {

  
  
return (
  <>
   

  

   <Counter setShowSubject={setShowSubject} subjects = {subjects.length}/>

    <div className='subject-card-container'>

      {subjects.map((subject, index)=>{
        // console.log('lolololololol: ',subject)
          return <Subject clickSubject = {getFlashcardsBySubject} key = {index} subject = {subject} />
      })}
   
    </div> 


  </>
)
}