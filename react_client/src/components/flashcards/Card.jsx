import React, { useState} from 'react';


export default function Card({element}){
  // const [createFlashCards, setCreateFlashCards]=useState(false)
  // console.log(element)
  return (
    
    <div className='cards'  >
      <br />
      <hr className='hr-decor'/>
      <br />
      <hr />
      <br />
      <hr />
      <h1>
        {element.question}
      </h1>
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
    </div>
  
  )


  
}