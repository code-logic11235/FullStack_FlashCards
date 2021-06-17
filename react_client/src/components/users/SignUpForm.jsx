import React, { useEffect, useLayoutEffect, useRef, useState} from 'react';
import Axios from 'axios';
import ValidateForm from './ValidateForm.jsx'

export default function SignUpForm () {
  // const [nameReg, setNameReg] = useState('');
  // const [emailReg, setEmailReg] = useState('');
  // const [passwordReg, setPasswordReg] = useState('');
  const [errors, setErrors] = useState({});
  // const [isValidForm, setIsValidForm] = useState(false);
  const [values, setValues] = useState({
    fullname: '',
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
    const ref = useRef(false);
    useEffect(()=>{
      if(ref.current) {
        console.log('ayo')
        setErrors(ValidateForm(values));


      }
      else {
        ref.current = true;
      }
    }, [values])
    


  function handleRegister (cb){
      console.log(errors)
    if(errors.valid) {
      let capFirstName = values.fullname.split(' ')[0][0].toUpperCase() + values.fullname.split(' ')[0].slice(1)
      // let capLastName = values.fullname.split(' ')[1][0].toUpperCase() + values.fullname.split(' ')[1].slice(1)
      Axios.post('http://localhost:3000/register', {
        name: capFirstName ,
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
    handleRegister();
    // console.log('keys in error', Object.keys(errors))
  };

  return (
    <>
      <div className = 'signup-wrapper' >
        <div>
          <h2 className='tittle'>  Create Account</h2>
        </div>

        <form className='form-wrapper' onSubmit={handleClick}>
          <div className='name'>
            <label> Full Name: </label>
            <input type="text"
            name = 'fullname'
            value={values.fullname}  
            onChange={handleChange} 
            />
            {(errors.fullname && ref) && <p className='validate-error'>{errors.fullname}</p>}
          </div>
          <div className = 'email'>
            <label> Email: </label>
            <input type="email" 
            name = 'email'  
            value={values.email}
            onChange={handleChange} 
            />
            {(errors.email && ref) && <p className='validate-error'>{errors.email}</p>}
          </div>
          <div className='password'>
          <label> Password: </label>
          <input type="password" 
          name = 'password' 
          value={values.password}
          autocomplete="off" 
          onChange={handleChange} 
          />
          {(errors.password && ref) && <p className='validate-error'>{errors.password}</p>}
          </div>
          <div>
          <input type="submit" value="Next"   />  
          </div>
        </form>
      </div>
    </>
  )
}