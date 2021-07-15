import React, { useState} from 'react';
import Axios from 'axios';
import ShowDeck from './ShowDecks.jsx';

export default function DashBoard({loggedInUser}) {


  const [showDecks, setShowDecks]= useState(false)
  function handleClick (){
    setShowDecks(true)
    // getDeck().then((data => {
    //   let unique = new Set(data.map(item => item.deck_name));
    //   let numberOfDecks= unique.length;
    //   console.log(unique, unique.size)
      
    // }))
  }

  function getDeck(){
    return Axios.post('http://localhost:3000/api/getAllCards', {
      user_id : loggedInUser.data.user_id,
    }).then((res) => {
      return res.data;
     
    }).catch((err)=>{
      console.log('Axios Err signin form:',err)
    });
  }
  return (
    <div className = 'dashboard'>
      {/* {console.log(loggedInUser)} */}
       {/* <button className = 'get-started' onClick={handleClick} >View Decks</button>
       <button className = 'get-started' >Create Deck</button> */}
       {/* {showDecks ? <ShowDeck loggedInUser = {loggedInUser}/>: null} */}
       <ShowDeck loggedInUser = {loggedInUser}/>
    </div>
  )
}