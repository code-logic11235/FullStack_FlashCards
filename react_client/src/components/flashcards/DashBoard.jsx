import React, { useState} from 'react';
import ViewSubjects from './ViewSubjects.jsx';
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
      <ViewSubjects loggedInUser = {loggedInUser} setShowDecks = {setShowDecks} />
      :
      null
      }
      {showCreateDeck?
      <CreateDeck setShowCreateDeck={setShowCreateDeck} loggedInUser = {loggedInUser} />
      :
      null

      }
    
    </div>
  )
}