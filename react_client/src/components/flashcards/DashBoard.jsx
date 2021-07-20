import React, { useState} from 'react';
import Axios from 'axios';
import ShowDeck from './ShowDecks.jsx';

export default function DashBoard({loggedInUser}) {


  const [showDecks, setShowDecks]= useState(false)
  function handleClick (){
    setShowDecks(true)
    document.getElementById('dashboard-btn').style.display='none'

  }

  // function getDeck(){
  //   return Axios.post('http://localhost:3000/api/getAllCards', {
  //     user_id : loggedInUser.data.user_id,
  //   }).then((res) => {
  //     return res.data;
     
  //   }).catch((err)=>{
  //     console.log('Axios Err signin form:',err)
  //   });
  // }
  return (
    
    <div className = 'dashboard'>
      <div id='dashboard-btn'>
        <button className = 'get-started' onClick={handleClick}>View Decks</button>
        <button className = 'get-started' >Create Deck</button>
      </div>
      
    {showDecks ? 
    <>
    <div className='search'>
        <div className = 'search-container'>
          <div className='input-container'>
            <span className="material-icons">search</span>
              <input type = 'text' id = 'filter-deck'
                name = 'filter-deck'
                placeholder="Seach for Deck"/>
          </div>
          <div className = 'search-deck-btn-container'>
            < span> Find Job</span>
          </div>
        </div>
      </div>



      <ShowDeck loggedInUser = {loggedInUser} setShowDecks = {setShowDecks} />
      </>:
    null
    }
    </div>
  )
}