import React, { useState} from 'react';

export default function createFlashCards({setCreateFlashCards}){
  const [values, setValues]= useState({
    question: '',
    answer: ''
  })
  function handleChange(e){
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  function handleClose (){
    setCreateFlashCards(false);
  }

return (
  
    <div className='modal-box' >
      <div className='popup-inner'> 
        <div className= 'form-wrapper'>
          <div className= 'close-btn' onClick={handleClose}>X</div>
          <form className = 'form' onSubmit={handleNewSubject}>
            <h2> Create New FlashCards</h2>
            <div className='input-group'>
              <input type="text" className='txt-input'
              name = 'question'
              value={value}  
              onChange={handleChange} 
              autoComplete="off" 
              placeholder='.'
              />       
              <label htmlFor= 'question'>question</label>
            </div>

         
            <input className = 'submit-btn' type="submit" value="Create!"/>
            {/* <a id='sign-up-instead'>Dont have an account? Sign up</a> */}
          </form>
        </div>
      </div>
    </div>
  
)
}