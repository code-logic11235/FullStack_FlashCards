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
    <>
      <div className = 'signup-wrapper' >

        <form className='form-wrapper' onSubmit={handleClick}>
          <div className='name'>
            <label for='username'>Username</label>
            <input type="text" className='txt-input'
            name = 'username'
            value={values.username}  
            onChange={handleChange} 
            autocomplete="off" 
            placeholder = 'Enter your username'
            />
          </div>

          {(errors.username && firstClickRef) && <p className='validate-error'>{errors.username}</p>}

          <div className = 'email'>
             <label for='email'>Email</label>
            <input type="email" className='txt-input' 
            name = 'email'  
            value={values.email}
            onChange={handleChange} 
            autocomplete="off" 

            placeholder = 'Enter your email'
            /> 
          </div>

          {(errors.email && firstClickRef) && <p className='validate-error'>{errors.email}</p>}

          <div className='password'>
           <label for='password'>Password</label>
          <input type="password" className='txt-input'
          name = 'password' 
          value={values.password}
          autocomplete="off" 
          onChange={handleChange} 
          placeholder = 'Enter your password'
          />
          </div>

          {(errors.password && firstClickRef) && <p className='validate-error'>{errors.password}</p>}

          <div className='confirm-password'>
           <label for='confirmPassword'>Confirm Password</label>
          <input type="password" className='txt-input'
          name = 'confirmPassword' 
          value={values.confirmPassword}
          autocomplete="off" 
          onChange={handleChange} 
          placeholder = 'Enter your password2'
          />
          {/* {(errors.password && ref) && <p className='validate-error'>{errors.password}</p>} */}
          </div>
          {(errors.confirmPassword && firstClickRef) && <p className='validate-error'>{errors.confirmPassword}</p>}
          <div>
          <input type="submit" value="Next"   />  
          </div>
        </form>
      </div>
    </>
  )
}