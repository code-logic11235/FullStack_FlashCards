import React, { useCallback, useEffect, useState} from 'react';
import Axios from 'axios';
import ValidateForm from './ValidateForm.jsx';
// const path = require('path');
// const check = require('../../../dist/image/check-mark.png');
// var debounce = require('lodash.debounce');
import { debounce } from 'lodash';

export default function SignUpForm ({setIsFormOpen}) {
  const [errors, setErrors] = useState({});
  const [firstClickRef, setFirstClickRef] = useState(false);
  const [values, setValues] = useState({
    username: '',
    firstname: '',
    lastname: '',
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
        firstname: values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1),
        lastname: values.lastname.charAt(0).toUpperCase() + values.lastname.slice(1),
        password: values.password,
  
      }).then((res) => {
        let form = document.getElementsByClassName('form')[0];
        form.innerHTML= 'You Have been registered!'
        form.style.textAlign='center';

        console.log('registered! ', res);
        // if(res.data)
      }).catch((err)=>{
        setErrors({username: '*Username taken'})
        // console.log('username taken')
      });
    }
  }

  function handleClick(e){
    e.preventDefault();
    
    setErrors(ValidateForm(values));
    setFirstClickRef(true)
    handleRegister();
  };

  function handleclose(){
    setIsFormOpen(false);
  }


  return (
    <div className='modal-box' >
      <div className='popup-inner'> 
        <div className= 'form-wrapper'>
          <div className= 'close-btn' onClick={handleclose}>X</div>
          <form className = 'form' onSubmit={handleClick}>
            <h2> Register New Account</h2>

            <div className='input-group'>
              <input type="text" className='txt-input'
              name = 'username'
              value={values.username}  
              onChange={handleChange} 
              autoComplete="off" 
              placeholder='.'
              
              />
              <label htmlFor= 'username'> Username</label>
              {(errors.username && firstClickRef) && <p className='validate-error'>{errors.username}</p>}
              {(!errors.username ) && <div className="material-icons " id= 'done'>done</div>}
            </div>

            <div className='fullname-input-container'>
              <div className='input-group'> 
                <input type="firstname" className='txt-input' 
                name = 'firstname'  
                value={values.firstname}
                onChange={handleChange} 
                autoComplete="off" 
                placeholder='.'
                /> 
                <label htmlFor= 'firstname'>Firstname</label>
                {(errors.firstname && firstClickRef) && <p className='validate-error'>{errors.firstname}</p>}
                {(!errors.firstname ) && <div className="material-icons " id= 'done'>done</div>}
              </div>
              <div className='input-group'> 
                <input type="lastname" className='txt-input' 
                name = 'lastname'  
                value={values.lastname}
                onChange={handleChange} 
                autoComplete="off" 
                placeholder='.'
                /> 
                <label htmlFor= 'lastname'>Lastname</label>
                {(errors.lastname && firstClickRef) && <p className='validate-error'>{errors.lastname}</p>}
                {(!errors.lastname ) && <div className="material-icons " id= 'done'>done</div>}
              </div>

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
              {(errors.password && firstClickRef) && <p className='validate-error'>{errors.password}</p>}
              {(!errors.password ) && <div className="material-icons " id= 'done'>done</div>}
            </div>


            <div className='input-group'> 
              <input type="password" className='txt-input'
              name = 'confirmPassword' 
              value={values.confirmPassword}
              autoComplete="off" 
              onChange={handleChange} 
              placeholder='.'
              />
              <label htmlFor= 'confirmPassword'> Confirm Password</label>
              {(errors.confirmPassword && firstClickRef) && <p className='validate-error'>{errors.confirmPassword}</p>}
              {(!errors.confirmPassword ) && <div className="material-icons " id= 'done'>done</div>}
            </div>
            {errors.valid ?  
              <input className = 'submit-btn' type="submit" value="signup" /> :
              <input className = 'submit-btn' type="submit" value="signup" style = {{background: 'gray', cursor: 'initial'}}/> 
            }

            <a id='sign-in-instead'>Already have an account? Sign in</a>
          </form>
        </div>
      </div>
    </div>
    
  )
}