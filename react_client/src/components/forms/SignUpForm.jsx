import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import ValidateForm from './ValidateForm.jsx';
// const path = require('path');
// const check = require('../../../dist/image/check-mark.png');
var debounce = require('lodash.debounce');

export default function SignUpForm () {
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
    debounce(checkDuplicateUsers(values.username), 2000)
    
  }

  function checkDuplicateUsers (){
    Axios.post('http://localhost:3000/checkDuplicateUser', {
      username: values.username
    }).then(()=>{
      console.log('ayeadasdad')
    })
  }

    useEffect(()=>{

        setErrors(ValidateForm(values));
        // console.log(errors.valid)
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
              {(!errors.username ) && <div className="material-icons " id= 'done'>done</div>}
            </div>

            <div className='fullname-input-container'>
              <div className='input-group'> 
                <input type="firstname" className='txt-input' 
                name = 'firstname'  
                value={values.firstname}
                onChange={handleChange} 
                autocomplete="off" 
                placeholder='.'
                /> 
                <label for= 'firstname'>Firstname</label>
                {(errors.firstname && firstClickRef) && <p className='validate-error'>{errors.firstname}</p>}
                {(!errors.firstname ) && <div className="material-icons " id= 'done'>done</div>}
              </div>
              <div className='input-group'> 
                <input type="lastname" className='txt-input' 
                name = 'lastname'  
                value={values.lastname}
                onChange={handleChange} 
                autocomplete="off" 
                placeholder='.'
                /> 
                <label for= 'lastname'>Lastname</label>
                {(errors.lastname && firstClickRef) && <p className='validate-error'>{errors.lastname}</p>}
                {(!errors.lastname ) && <div className="material-icons " id= 'done'>done</div>}
              </div>

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
              {(!errors.password ) && <div className="material-icons " id= 'done'>done</div>}
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