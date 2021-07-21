import React, { useState} from 'react';
import Axios from 'axios';


export default function CreateDeck({setShowCreateDeck, loggedInUser}) {
const [value, setValue]= useState('');

function handleChange (e){
  console.log(e.target.value);
setValue(e.target.value);
}

function handleNewSubject (e){
  console.log(loggedInUser)
  e.preventDefault();

  Axios.post('http://localhost:3000/createSubject', {
    subject: value,
    user_id: loggedInUser.data.user_id
  }).then((res) => {
    console.log(res)
    let form = document.getElementsByClassName('form')[0];
      form.innerHTML= 'You Have created a new subject! to create flashcards, select your subject and create new flashcards'
      form.style.textAlign='center';
  }).catch((err)=>{
    if(err) {
      
    }
  });
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