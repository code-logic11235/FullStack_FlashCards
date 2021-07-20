import React, { useState} from 'react';
import Axios from 'axios';
import ShowDeck from './ShowDecks.jsx';
import CreateDeck from './CreateDeck.jsx';
export default function DashBoard({loggedInUser}) {


  const [showDecks, setShowDecks]= useState(false);
  const [showCreateDeck, setShowCreateDeck]=useState(false);
  function handleShowSubject(){
    setShowDecks(true);
    document.getElementById('dashboard-btn').style.display='none';

  }
  function handleCreateDeck(){
    setShowCreateDeck(true);
    document.getElementById('dashboard-btn').style.display='none';
  }

  return (
    
    <div className = 'dashboard'>
      <div id='dashboard-btn'>
        <button className = 'get-started' onClick={handleShowSubject}>View Avialiable Subjects</button>
        <button className = 'get-started' onClick={handleCreateDeck}>Create New Subject</button>
      </div>
      
    


      {showDecks ? 
      <ShowDeck loggedInUser = {loggedInUser} setShowDecks = {setShowDecks} />
      :
      null
      }
      {showCreateDeck?
      <CreateDeck loggedInUser = {loggedInUser} setShowCreateDeck = {setShowCreateDeck}/>
      :
      null

      }
    
    </div>
  )
}