import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import ValidateForm from './ValidateForm.jsx';
// const path = require('path');
// const check = require('../../../dist/image/check-mark.png');


export default function SignUpForm () {
  const [errors, setErrors] = useState({});
  const [firstClickRef, setFirstClickRef] = useState(false);
  const [values, setValues] = useState({
    username: '',
    fullname: '',
    password: '',
  })
  const handleChange = (e)=>{
    
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    
  }

    useEffect(()=>{

        setErrors(ValidateForm(values));

    }, [values])
    


  function handleRegister (){
      console.log(errors)
    if(errors.valid) {
    
      Axios.post('http://localhost:3000/register', {
        username: values.username,
        fullname: values.fullname,
        password: values.password,
  
      }).then((res) => {
        console.log('registered! ', res);
      }).catch((err)=>{
        console.log('we got an err',err)
      });
    }
  }

  function handleClick(e){
    e.preventDefault();
    
    setErrors(ValidateForm(values));
    setFirstClickRef(true)
    handleRegister();
  };

  return (
    <div className='modal-box' >
      <div className='popup-inner'> 
        <div className= 'form-wrapper'>
          <form className = 'form' onSubmit={handleClick}>
            <h2> Register New Account</h2>

            <div className='input-group'>
              <input type="text" className='txt-input'
              name = 'username'
              value={values.username}  
              onChange={handleChange} 
              autocomplete="off" 
              placeholder='.'
              
              />
              <label for= 'username'> Username</label>
              {(errors.username && firstClickRef) && <p className='validate-error'>{errors.username}</p>}
              {(!errors.username ) && <img className='checkmark' src = {'./image/check-mark.png'}></img>}
            </div>

            <div className='input-group'> 
              <input type="fullname" className='fullname' 
              name = 'fullname'  
              value={values.fullname}
              onChange={handleChange} 
              autocomplete="off" 
              placeholder='.'
              
              /> 
              
              <label for= 'fullname'>Fullname</label>
              {/* {(errors.fullname && firstClickRef) && <p className='validate-error'>{errors.fullname}</p>}
              {(!errors.fullname ) && <img className='checkmark' src = {'./image/check-mark.png'}></img>} */}
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
              {(errors.password && firstClickRef) && <p className='validate-error'>{errors.password}</p>}
              {(!errors.password ) && <img className='checkmark' src = {'./image/check-mark.png'}></img>}
            </div>


            <div className='input-group'> 
              <input type="password" className='txt-input'
              name = 'confirmPassword' 
              value={values.confirmPassword}
              autocomplete="off" 
              onChange={handleChange} 
              placeholder='.'
              />
              <label for= 'confirmPassword'> Confirm Password</label>
              {(errors.confirmPassword && firstClickRef) && <p className='validate-error'>{errors.confirmPassword}</p>}
              {(!errors.confirmPassword ) && <img className='checkmark' src = {'./image/check-mark.png'}></img>}
            </div>

            <input className = 'submit-btn' type="submit" value="signup"   />
            {/* <hr /> */}
            <a id='sign-in-instead'>Already have an account?</a>
          </form>
        </div>
      </div>
    </div>
    
  )
}