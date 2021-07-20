import React, { useEffect, useState} from 'react';
import Deck from './Deck.jsx'
import Axios from 'axios';

export default function ShowDeck({loggedInUser, setShowDecks}) {
const [deckNames,setDeckNames] =useState([])
// const [uniqueDecks, setUniqueDecks] = useState('');
  // function lol (){
  //   return getUniqueDecks();
  // }
  // function  getUniqueDecks (){
  //   return getDeck().then((response => {
  //     return [...new Set(response.map(item => item.deck_name))]
  //     }))
  // }
  function handleClick (){
    setShowDecks(false);
    document.getElementById('dashboard-btn').style.display='flex';

  }
  useEffect(()=>{
    getDeck();

  

  },[])

   function getDeck(){
     Axios.post('http://localhost:3000/api/getAllCards', {
      user_id : loggedInUser.data.user_id,
    }).then((res) => {
      let unique = [...new Set(res.data.map(item => item.deck_name))];

      

       setDeckNames( unique );
      // return res.data;
    
    }).catch((err)=>{
      console.log('Axios Err signin form:',err)
    });
  }

return (
  <>
      <div id = 'number-of-decks'>
      <div className = 'back-btn-container'>
        <button id = 'back-btn' onClick={handleClick}> <span className="material-icons" id ='arrow_back'>arrow_back</span>Back</button>
      </div>
      <div className = 'number-of-decks'>
        Showing {deckNames.length} Decks 
      </div>
    </div>
    <div className='show-deck'>
   {deckNames.map((deck_name, index)=>{
      return <Deck key = {index} deck_name = {deck_name}/>
   })}
    </div> 

   
  </>
)
}