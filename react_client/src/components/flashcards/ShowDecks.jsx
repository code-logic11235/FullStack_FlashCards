import React, { useEffect, useState} from 'react';
import Deck from './Deck.jsx'
import Cards from './Cards.jsx';
import Axios from 'axios';

export default function ShowDeck({loggedInUser, setShowDecks}) {
const [deckNames,setDeckNames] =useState([]);
const [flashcardsData, setFlashcardsData] = useState();

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
      
      let unique = [...new Set(res.data.map(item => item.subject))];
   
      setFlashcardsData(res.data);
      setDeckNames( unique );
    
    }).catch((err)=>{
      console.log('Axios Err signin form:',err)
    });
  }

return (
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
            < span> Find subject</span>
          </div>
      </div>
    </div>

    <div id = 'number-of-decks'>
      <div className = 'back-btn-container'>
        <button id = 'back-btn' onClick={handleClick}> <span className="material-icons" id ='arrow_back'>arrow_back</span>Back</button>
      </div>
      <div className = 'number-of-decks'>
        Showing {deckNames.length} Decks 
      </div>
    </div>
      
    <div className='show-deck'>
      {deckNames.map((subject, index)=>{
          return <Deck key = {index} subject = {subject} loggedInUser = {loggedInUser} />
      })}
    </div> 


  </>
)
}