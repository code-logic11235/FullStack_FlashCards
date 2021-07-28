import React, { useState} from 'react';
import Axios from 'axios';

export default function AddFlashCard({subject_id, setShowAddFlashCard, getAllCardsBySubject}){
  const [values, setValues]= useState([{
    Question: '', 
    Answer: ''
  }])
  function handleChange(e,index){

    const {name, value} = e.target;
    const list = [...values];
    list[index][name] = value;
    setValues(list)

  
  }
  const handleAddClick = (e) => {
    console.log('addclick')
    e.preventDefault()
    setValues([...values, { Question: '', Answer: '' }]);
  };
function handleSubmit (e){
  console.log('submit subject_id: ', subject_id)
  e.preventDefault()
  Axios.post('http://localhost:3000/addFlashcard', {
    values: values,
    subject_id : subject_id
  }).then((res) => {
    getAllCardsBySubject(subject_id);

    let form = document.getElementsByClassName('form')[0];
    form.innerHTML= 'You have created new cards!'
    form.style.textAlign='center';

  }).catch((err)=>{

  });

}
return (
  
    <div className='modal-box' >
      <div className='popup-inner'> 
        <div className= 'form-wrapper'>
          <div className= 'close-btn' onClick={()=>{setShowAddFlashCard(false)}}>X</div>
          <form className = 'form' onSubmit={handleSubmit}>
            <h2> Create New FlashCard</h2>
            {values.map((element, index)=>
            <div key = {index} className='fullname-input-container'>
              <div className='input-group'> 
                <input type="Question" className='txt-input' 
                name = 'Question'  
                value={element.Question}
                onChange={(e)=>{handleChange(e, index)}}
                autoComplete="off" 
                placeholder='.'
                /> 
                <label htmlFor= 'Answer'>Question</label>
              </div>
              <div className='input-group'> 
                <input type="Answer" className='txt-input' 
                name = 'Answer'  
                value={element.Answer}
                onChange={(e)=>{handleChange(e, index)}} 
                autoComplete="off" 
                placeholder='.'
                /> 
                <label htmlFor= 'Answer'>Answer</label>
              </div>
            </div>
            
            )}
            <div className = 'create-card-btn-container'>
              <input className = 'submit-btn more-cards' onClick={handleAddClick} type="submit" value="Add more cards"/>
              <input className = 'submit-btn' type="submit" value="Create!"/>
            </div>
          </form>
        </div>
      </div>
    </div>
)
}