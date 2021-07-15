import React, { useEffect, useState} from 'react';
import Deck from './Deck.jsx'
import Axios from 'axios';

export default function ShowDeck({loggedInUser}) {
const [deckNames,setDeckNames] =useState([])
  // function lol (){
  //   return getUniqueDecks();
  // }
  // function  getUniqueDecks (){
  //   return getDeck().then((response => {
  //     return [...new Set(response.map(item => item.deck_name))]
  //     }))
  // }

  useEffect(()=>{
    getDeck();
  },[])

   function getDeck(){
     Axios.post('http://localhost:3000/api/getAllCards', {
      user_id : loggedInUser.data.user_id,
    }).then((res) => {
       setDeckNames( [...new Set(res.data.map(item => item.deck_name))] );
      // return res.data;
    
    }).catch((err)=>{
      console.log('Axios Err signin form:',err)
    });
  }

return (
  <>
  
   {deckNames.map((deck_name, index)=>{
     console.log(deck_name);
      return <Deck key = {index} deck_name = {deck_name}/>
   })}
   {/* {<Deck deck_names = {'vocw'}/>} */}
   
  </>
)
}