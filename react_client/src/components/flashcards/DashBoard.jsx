import React, { useState, useEffect} from 'react';
import ViewSubjects from './ViewSubjects.jsx';
import CreateDeck from './CreateDeck.jsx';
import ViewCards from './ViewCards.jsx'
import AddFlashCard from './AddFlashCard.jsx'
import Axios from 'axios';
import $ from 'jquery'
export default function DashBoard({loggedInUser}) {


  const [showSubject, setShowSubject]= useState(true);
  const [showCreateDeck, setShowCreateDeck]=useState(false);
  const [showFlashCards, setShowFlashCards]=useState(false);
  const [showAddFlashCard, setShowAddFlashCard]= useState(false);

  $(function(){

    $('.modal-box').on('click', (e)=>{
      if(e.target.closest('.form-wrapper')) return 
      setShowAddFlashCard(false);
      setShowCreateDeck(false);

    })
  })

  function handleShowSubject(){
    setShowSubject(true);
    getSubject();
    document.getElementById('dashboard-btn').style.display='none';
  }

  function deleteFlashcard(flashcard, index, subject_id){
    Axios.post('http://localhost:3000/deleteFlashcard', {
      question: flashcard.question,
      user_id : loggedInUser.data.user_id,
    }).then((res) => {
      let cards = flashcardsData[0].filter((obj, i)=>{
        if(i === index) {
            //do nothing
        }else {
          return obj
        }
      } )
      setFlashcardsData([cards, subject_id])

    
    }).catch((err)=>{
      console.log('Axios Err deleteflashcard:',err)
    });

  }
  const [subjects,setSubjects] =useState([]);

useEffect(()=>{
  getSubject();
},[])

function createSubject (subject){
  Axios.post('http://localhost:3000/createSubject', {
    subject: subject,
    user_id: loggedInUser.data.user_id
  }).then((res) => {
    // console.log(res)
    let form = document.getElementsByClassName('form')[0];
    form.innerHTML= 'You Have created a new subject!'
    form.style.textAlign='center';
    getSubject();

  }).catch((err)=>{
    if(err) {
      
    }
  });
}
  function getSubject(){
    Axios.post('http://localhost:3000/api/getAllSubject', {
    user_id : loggedInUser.data.user_id,
    }).then((res) => {
      let unique = [...new Set(res.data.map(item => {
        return item 
      }
        ))];

      setSubjects( unique );
    
    }).catch((err)=>{
      console.log('Axios Err fashboard getsubject:',err)
    });
  }
  function deleteSubject(e, subject_id){
    e.stopPropagation()
    Axios.post('http://localhost:3000/deleteSubject', {
      subject_id : subject_id,
    }).then((res) => {

      getSubject();

    
    }).catch((err)=>{
      console.log('Delete Error: ', err)
    });
  }

  const [flashcardsData, setFlashcardsData] = useState([]);
  function getAllCardsBySubject( subject_id) {
    Axios.post('http://localhost:3000/getAllCardsBySubject', {
    
    subject_id : subject_id,
  }).then((res) => {
    setFlashcardsData([res.data, subject_id]) 
    setShowSubject(false); 
    setShowFlashCards(true)
  }).catch((err)=>{

  });
  }

  return (
    <div className = 'dashboard'>

       {
         showSubject ? 
         <>
         <div id='dashboard-btn'>
         <button className = 'get-started' onClick={()=>{setShowCreateDeck(true)}}>Create New Subject</button>
       </div>
         <ViewSubjects deleteSubject = {deleteSubject} subjects = {subjects} 
         setShowSubject = {setShowSubject} getFlashcardsBySubject = {getAllCardsBySubject}
         /> 
         </>
         :
         null
       }
      {
        showCreateDeck?
        <CreateDeck createSubject = {createSubject} setShowCreateDeck={setShowCreateDeck} />
        :
        null
      }
       {
          showFlashCards ? 
          <>
            <div id = 'back-create-btn-container'>
              <button id = 'back-btn' onClick={()=>{setShowSubject(true); setShowFlashCards(false);}}> <span className="material-icons" id ='arrow_back'>arrow_back</span>Back</button>
              <button id = 'create-flashcard' onClick={()=>{setShowAddFlashCard(true)}}> <span className="material-icons" id ='add'>add</span>New Flashcard</button>
            </div> 
            <div>
              {showAddFlashCard?
              <AddFlashCard subject_id = {flashcardsData[1]} 
              setShowAddFlashCard= {setShowAddFlashCard} 
              getAllCardsBySubject = {getAllCardsBySubject}/> : 
              null
              }
              <ViewCards deleteFlashcard = {deleteFlashcard} flashcardsData = {flashcardsData}/>

            </div>
          </> 
          : null
        }
    </div>
  )
}