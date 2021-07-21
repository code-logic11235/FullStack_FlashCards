import React, { useEffect, useState} from 'react';
import Deck from './Deck.jsx'
import ViewCards from './ViewCards.jsx';
import Axios from 'axios';
import SearchBar from './SearchBar.jsx';
import Counter from './Counter.jsx'



export default function ViewSubjects({loggedInUser, setShowDecks}) {
const [subjects,setSubjects] =useState([]);
const [flashcardsData, setFlashcardsData] = useState();
const [showFlashCards, setShowFlashCards]=useState(false);

  useEffect(()=>{
    getDeck();
  },[])

   function getDeck(){
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
  function getFlashcardsBySubject(subject) {

    Axios.post('http://localhost:3000/getflashcards', {
    subject: subject,
    user_id : loggedInUser.data.user_id,
  }).then((res) => {
    
    setFlashcardsData(res.data)
    setShowFlashCards(true)

    // setShowDecks(false); look at this when you wake up this makes the 
    // whole div disapear taking all it childen e.g cards.jsx with it

  }).catch((err)=>{

  });
  }

return (
  <>
   

  
   <SearchBar name = {'subject'}/>
   <Counter setShowDecks={setShowDecks} subjects = {subjects.length}/>

    <div className='subject-card-container'>

      {subjects.map((subject, index)=>{
          return <Deck clickSubject = {getFlashcardsBySubject} key = {index} subject = {subject} />
      })}
      {showFlashCards ? 
      <ViewCards flashcardsData={flashcardsData}/>
      :
      null
      }

    </div> 


  </>
)
}