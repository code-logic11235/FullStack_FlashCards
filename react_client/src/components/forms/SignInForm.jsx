import React, { useEffect, useLayoutEffect, useRef, useState} from 'react';
import Axios from 'axios';

Axios.defaults.withCredentials = true;

export default function SignInForm () {
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
  useEffect(()=>{
    Axios.get('http://localhost:3000/signin').then((res)=>{
      console.log(res)
    })
  },[])

  function handleSignIn (e){
    e.preventDefault();
    Axios.post('http://localhost:3000/signin', {
      username: values.username,
      password: values.password,
    }).then((res) => {
      console.log( res.data);
    }).catch((err)=>{
      console.log('what-------',err)
    });
    
  }



  return (
    <div className= 'form-wrapper'>
    <form className = 'form' onSubmit={handleSignIn}>
      {/* <img className='checkmark' src = {'./image/check-mark.png'}></img> */}
      
       {/* <div id='checkmark'></div> */}
      <h2> Sign In</h2>

      <div className='input-group'>
        <input type="text" className='txt-input'
        name = 'username'
        value={values.username}  
        onChange={handleChange} 
        autocomplete="off" 
        placeholder='.'
        
        />
        {/* <img className='checkmark' src = '../../dist/image/check-mark.png'> </img> */}
        <label for= 'username'> Username</label>
      </div>

      <div className='input-group'> 
        <input type="password" className='txt-input'
        name = 'password' 
        value={values.password}
        autocomplete="off" 
        onChange={handleChange}
        placeholder='.'
        />
        <label for= 'password'> Password</label>
      </div>

      <input className = 'submit-btn' type="submit" value="signin"   />
      {/* <hr /> */}
      <a id='sign-up-instead'>Dont have an account? sign up</a>
    </form>
  </div>
  )
}