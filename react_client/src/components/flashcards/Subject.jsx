import React, { useState} from 'react';
// import Cards from './Cards.jsx';
import Axios from 'axios';

export default function subject({deleteSubject, subject, clickSubject}){


function handleClick(e){

  clickSubject(subject.subject_id );
  
}

  return (
    <>
      <div className ='subject-container'>
        <div className='subject' onClick={handleClick} >
          {subject.subject}
          <button className='material-icons' 
          id= 'delete_forever' 
          onClick={(e)=>{deleteSubject(e, subject.subject_id)}}
          >delete_forever</button>
        </div>
      </div> 
    </>
  )
}