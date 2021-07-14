import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/forms/Forms.jsx';
import NavBar from './components/NavBar.jsx';
import CTA from './components/cta/cta.jsx';
import DashBoard from './components/flashcards/DashBoard.jsx'
import Axios from 'axios';




function App(props){
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] =useState(false);

  useEffect(()=>{
    Axios.get('http://localhost:3000/signin').then((res)=>{
      if(res.data.loggedIn) {

        setLoggedInUser(res.data)
      }
    })
  },[])





  return (
    <>

    <div className='landing-page'>

      <div className = 'landing-page-container'>

        <NavBar setIsFormOpen={setIsFormOpen} loggedInUser ={loggedInUser} setLoggedInUser = {setLoggedInUser}/> 

        <Forms 
          isFormOpen = {isFormOpen} 
          setIsFormOpen = {setIsFormOpen}
          loggedInUser ={loggedInUser} 
          setLoggedInUser = {setLoggedInUser}/>
        
        {loggedInUser.loggedIn ? 
        <DashBoard/>:
        <CTA isFormOpen = {isFormOpen} setIsFormOpen = {setIsFormOpen}/>
      }
        
      </div>    


    </div>
    </>

  )
}


ReactDOM.render(<App/>, document.getElementById('root'));