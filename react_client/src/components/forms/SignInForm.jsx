import React, { useEffect, useLayoutEffect, useRef, useState} from 'react';
import Axios from 'axios';

Axios.defaults.withCredentials = true;

export default function SignInForm ({isFormOpen, setIsFormOpen, loggedInUser, setLoggedInUser}) {
  const [values, setValues] = useState({
    username: '',
    password: '',
  })
  
  const handleChange = (e)=>{
    
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    
  }

  function handleSignIn (e){
    e.preventDefault();
    Axios.post('http://localhost:3000/signin', {
      username: values.username,
      password: values.password,
    }).then((res) => {
      setLoggedInUser(res.data)
      let form = document.getElementsByClassName('form')[0];
      form.innerHTML= 'You Have been Logged in!'
      form.style.textAlign='center';

    }).catch((err)=>{
      console.log('Axios Err signin form:',err)
    });
  }
  function handleclose(){

    setIsFormOpen(false);
  }

  return (
    <div className='modal-box' >
      <div className='popup-inner'> 
        <div className= 'form-wrapper'>
          <div className= 'close-btn' onClick={handleclose}>X</div>
          <form className = 'form' onSubmit={handleSignIn}>
            <h2> Sign In</h2>
            <div className='input-group'>
              <input type="text" className='txt-input'
              name = 'username'
              value={values.username}  
              onChange={handleChange} 
              autoComplete="off" 
              placeholder='.'
              />       
              <label htmlFor= 'username'> Username</label>
            </div>

            <div className='input-group'> 
              <input type="password" className='txt-input'
              name = 'password' 
              value={values.password}
              autoComplete="off" 
              onChange={handleChange}
              placeholder='.'
              />
              <label htmlFor= 'password'> Password</label>
            </div>
            <input className = 'submit-btn' type="submit" value="signin"/>
            <a id='sign-up-instead'>Dont have an account? Sign up</a>
          </form>
        </div>
      </div>
    </div>
  )
}