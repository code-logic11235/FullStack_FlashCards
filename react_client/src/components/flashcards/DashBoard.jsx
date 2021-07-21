import React, { useState, useEffect} from 'react';
import ViewSubjects from './ViewSubjects.jsx';
import CreateDeck from './CreateDeck.jsx';
import Card from './Card.jsx'
import Axios from 'axios';
export default function DashBoard({loggedInUser}) {


  const [showSubject, setShowSubject]= useState(false);
  const [showCreateDeck, setShowCreateDeck]=useState(false);
  const [showFlashCards, setShowFlashCards]=useState(false)
  
  function handleShowSubject(){
    setShowSubject(true);
    document.getElementById('dashboard-btn').style.display='none';

  }
  function handleCreateDeck(){
    setShowCreateDeck(true);
    document.getElementById('dashboard-btn').style.display='none';
  }



  const [subjects,setSubjects] =useState([]);
  useEffect(()=>{
    getSubject();
  },[showSubject])

   function getSubject(){
     Axios.post('http://localhost:3000/api/getAllCards', {
      user_id : loggedInUser.data.user_id,
    }).then((res) => {
      
      let unique = [...new Set(res.data.map(item => item.subject))];
   
      // setFlashcardsData(res.data);
      setSubjects( unique );
    
    }).catch((err)=>{
      console.log('Axios Err signin form:',err)
    });
  }

  const [flashcardsData, setFlashcardsData] = useState([]);
  function getFlashcardsBySubject(subject) {

    Axios.post('http://localhost:3000/getflashcards', {
    subject: subject,
    user_id : loggedInUser.data.user_id,
  }).then((res) => {
    console.log('dahsboard resdata: ',res.data)
    setFlashcardsData(res.data) 
    
    // console.log('dahsboard flashcardsdata: ',flashcardsData)
    

    setShowFlashCards(true)
    // setShowFlashCards(true);
    setShowSubject(false); 

  }).catch((err)=>{

  });
  }


  return (
    
    <div className = 'dashboard'>
      <div id='dashboard-btn'>
        <button className = 'get-started' onClick={handleShowSubject}>View Avialiable Subjects</button>
        <button className = 'get-started' onClick={handleCreateDeck}>Create New Subject</button>
      </div>
     
      {showCreateDeck?
      <CreateDeck setShowCreateDeck={setShowCreateDeck} loggedInUser = {loggedInUser} />
      :
      null

      }
      <div className='view-subjects'>
        {showSubject ? 
        <ViewSubjects subjects = {subjects} setShowSubject = {setShowSubject} getFlashcardsBySubject = {getFlashcardsBySubject}/>
        :
        null}
      </div>
      <div className = 'view-flashcards'>
          {
          showFlashCards ? 
          flashcardsData.map((flashcard,index) => <Card flashcard={flashcard} key={index}/>
          )
          : null
        }
      </div>

    </div>
  )
}