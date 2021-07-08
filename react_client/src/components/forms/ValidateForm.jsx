const ValidateForm = (values)=>{
  let errors = {valid: false};



  if(!values.username) { // if name is empty
    
    errors.username = '*Username is required';
  }
  if (!values.email) { // if name is empty
    errors.email = '*Email is required';
  }else if (!/\S+@\S+\.\S+/.test(values.email)) { // using regex to validate email with @ folowed by .
    errors.email = '*Please enter a valid email';
  }
  if(!values.password) {
    errors.password = '*Password is required';
  }else if (values.password.length < 8) {
    errors.password = '*Password must be longer than 8 characters';
  }
  if(values.password !== values.confirmPassword) {
    errors.confirmPassword = '*Passwords do not match'
  } 
// console.log('this is error in valid form : ',errors)
  console.log()
  if(Object.keys(errors).length === 1) { // length of 1 being that there is only the 'valid' key and no errors
    errors.valid = true;
  }
  return errors;
}
export default ValidateForm;

// need to validate full anem with a space 
// need to set up logout rout
// set up login username 