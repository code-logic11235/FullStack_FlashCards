import React, { useState} from 'react';
import CreateFlashCards from './CreateFlashCards.jsx';
import Card from './Card.jsx'

export default function ViewCards({flashcardsData}){
  const [createFlashCards, setCreateFlashCards]=useState(false)
function handleClick(){

}
  return (
    
      <>

        {createFlashCards?
         <CreateFlashCards setCreateFlashCards={setCreateFlashCards}/>: null
      }

      
      {flashcardsData.map((element, index)=>{
       return <Card element = {element} key = {index}/>
       
       })}
        {/* <br />
        <hr className='hr-decor'/>
        <br />
        <hr />
        <br />
        <hr />
        <h1>
        {subject}
        </h1>
        <br />
        <hr />
        <br />
        <hr />
        <br />
        <hr /> */}
      
    </>
  )
}