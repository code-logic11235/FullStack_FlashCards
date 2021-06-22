import React, { useEffect, useLayoutEffect, useRef, useState} from 'react';
import Axios from 'axios';
import ValidateForm from './ValidateForm.jsx'


export default function SignUpForm () {
  // const [nameReg, setNameReg] = useState('');
  // const [emailReg, setEmailReg] = useState('');
  // const [passwordReg, setPasswordReg] = useState('');
  const [errors, setErrors] = useState({});
  const [firstClickRef, setFirstClickRef] = useState(false);
  const [values, setValues] = useState({
    username: null,
    email: null,
    password: null,
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
      if(firstClickRef ) {
        console.log('ayo')
        setErrors(ValidateForm(values));


      }
      // else {
      //   ref.current = true;
      // }
    }, [values])
    


  function handleRegister (cb){
      console.log(errors)
    if(errors.valid) {
    
      Axios.post('http://localhost:3000/register', {
        name: values.username,
        email: values.email,
        password: values.password,
  
      }).then((res) => {
        console.log('THIS IS RESSPONSE', res);
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
          {/* <img src = '../dist/image/Avatar.png'> </img> */}
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


          <div className='input-group'> 
            <input type="password" className='txt-input'
            name = 'confirmPassword' 
            value={values.confirmPassword}
            autocomplete="off" 
            onChange={handleChange} 
            
            placeholder='.'
            />
            <label for= 'confirmPassword'> Confirm Password</label>
          </div>

          <input className = 'submit-btn' type="submit" value="signup"   />
          {/* <hr /> */}
          <a href='.log-in' id='log-in-instead'>Already have an account?</a>
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