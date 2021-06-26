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
    email: '',
    password: '',
  })
  const handleChange = (e)=>{
    
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    
  }

    // use ref to skip applying effect upon initial render
    // const ref = useRef(false);
    useEffect(()=>{

        setErrors(ValidateForm(values));


      
      // else {
      //   ref.current = true;
      // }
    }, [values])
    


  function handleRegister (){
      console.log(errors)
    if(errors.valid) {
    
      Axios.post('http://localhost:3000/register', {
        name: values.username,
        email: values.email,
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
    // setErrors(ValidateForm(values));
    
    setErrors(ValidateForm(values));
    setFirstClickRef(true)
    handleRegister();
    // console.log('keys in error', Object.keys(errors))
  };

  return (
    
      <div className= 'form-wrapper'>
        <form className = 'form' onSubmit={handleClick}>
          {/* <img className='checkmark' src = {'./image/check-mark.png'}></img> */}
          
           {/* <div id='checkmark'></div> */}
          <h2> Register New Account</h2>

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
            {(errors.username && firstClickRef) && <p className='validate-error'>{errors.username}</p>}
            {(!errors.username ) && <img className='checkmark' src = {'./image/check-mark.png'}></img>}
          </div>

          <div className='input-group'> 
            <input type="email" className='txt-input' 
            name = 'email'  
            value={values.email}
            onChange={handleChange} 
            autocomplete="off" 
            placeholder='.'
            
            /> 
            
            <label for= 'email'> Email</label>
            {(errors.email && firstClickRef) && <p className='validate-error'>{errors.email}</p>}
            {(!errors.email ) && <img className='checkmark' src = {'./image/check-mark.png'}></img>}
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

    
  )
}

        // <form className='form-wrapper' onSubmit={handleClick}>
        //   <div className='name'>

        //     <input type="text" className='txt-input'
        //     name = 'username'
        //     value={values.username}  
        //     onChange={handleChange} 
        //     autocomplete="off" 
        //     placeholder = 'Enter your username'
        //     />
        //   </div>

        //   {(errors.username && firstClickRef) && <p className='validate-error'>{errors.username}</p>}

        //   <div className = 'email'>

            // <input type="email" className='txt-input' 
            // name = 'email'  
            // value={values.email}
            // onChange={handleChange} 
            // autocomplete="off" 

            // placeholder = 'Enter your email'
            // /> 
        //   </div>

        //   {(errors.email && firstClickRef) && <p className='validate-error'>{errors.email}</p>}

        //   <div className='password'>

        //   <input type="password" className='txt-input'
        //   name = 'password' 
        //   value={values.password}
        //   autocomplete="off" 
        //   onChange={handleChange} 
        //   placeholder = 'Enter your password'
        //   />
        //   </div>

        //   {(errors.password && firstClickRef) && <p className='validate-error'>{errors.password}</p>}

        //   <div className='confirm-password'>

        //   <input type="password" className='txt-input'
        //   name = 'confirmPassword' 
        //   value={values.confirmPassword}
        //   autocomplete="off" 
        //   onChange={handleChange} 
        //   placeholder = 'Enter your password2'
        //   />
         
        //   </div>
        //   {(errors.confirmPassword && firstClickRef) && <p className='validate-error'>{errors.confirmPassword}</p>}
        //   <div>
         
        //   <input type="submit" value="Next"   />  
        //   </div>
        // </form>