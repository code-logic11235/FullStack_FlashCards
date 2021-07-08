import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/forms/Forms.jsx';
import NavBar from './components/NavBar.jsx';
import CTA from './components/cta/cta.jsx';
import Axios from 'axios';
// import {FormContext} from './components/forms/Forms.jsx'



function App(props){
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] =useState(false);

  useEffect(()=>{
    Axios.get('http://localhost:3000/signin').then((res)=>{
      if(res.data.loggedIn) {
        // console.log(res.data)
        setLoggedInUser({signedIn: true,
                     data: res.data})
      }
    })
  },[isFormOpen])





  return (
    <>
    {/* <NavBar/> */}
    {/* {isSignin.loggedIn ? `signed in as ${isSignin.user}` : <Forms/>} */}
    <div className='landing-page'>

      <div className = 'landing-page-container'>
        <header>
          <div className='header-container'>
            <div className='logo'>
              <i class="material-icons " id= 'logo'>style</i> 
            </div>
            <span class='underline-name'>Opti-Cards</span>
            <NavBar isSignIn ={loggedInUser} setIsSignIn = {setLoggedInUser}/> 
          </div>
        </header >

        <Forms isFormOpen = {isFormOpen} setIsFormOpen = {setIsFormOpen}/>
        
        {loggedInUser.signedIn ? 
        '':
        <CTA isFormOpen = {isFormOpen} setIsFormOpen = {setIsFormOpen}/>
      }
        
        
        

        

        {/* <div className = 'landing-page-intro-box'>
        </div> */}
        {/* <Forms/> */}
      </div>    


    </div>
    </>

  )
}


ReactDOM.render(<App/>, document.getElementById('root'));