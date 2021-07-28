import React, { useState} from 'react';
import Axios from 'axios';


export default function CreateDeck({createSubject, setShowCreateDeck}) {
const [value, setValue]= useState('');

function handleChange (e){
setValue(e.target.value);
}

function handleNewSubject (e){
  e.preventDefault();
  createSubject(value);

}

function handleClose(){
  setShowCreateDeck(false);
  document.getElementById('dashboard-btn').style.display='flex';
}

  return (
  <div className='modal-box' >
      <div className='popup-inner'> 
        <div className= 'form-wrapper'>
          <div className= 'close-btn' onClick={handleClose}>X</div>
          <form className = 'form' onSubmit={handleNewSubject}>
            <h2> Create New Subject</h2>
            <div className='input-group'>
              <input type="text" className='txt-input'
              name = 'subject'
              value={value}  
              onChange={handleChange} 
              autoComplete="off" 
              placeholder='.'
              />       
              <label htmlFor= 'subject'> New Subject</label>
            </div>

         
            <input className = 'submit-btn' type="submit" value="Create!"/>
            {/* <a id='sign-up-instead'>Dont have an account? Sign up</a> */}
          </form>
        </div>
      </div>
    </div>
  )
}