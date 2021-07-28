import React, { useState} from 'react';
// import Cards from './Cards.jsx';
import Axios from 'axios';

export default function subject({subject, clickSubject}){


function handleClick(e){

  clickSubject(subject.subject_id );
  
}
  return (
    <>
      <div className ='subject-container'>
        <div className='subject' onClick={handleClick}>
          {subject.subject}
        </div>
      </div> 
    </>
  )
}