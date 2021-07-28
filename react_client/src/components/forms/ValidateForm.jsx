const ValidateForm = (values)=>{
  let errors = {valid: false};



  if(!values.username) { // if name is empty
    
    errors.username = '*Username is required';
  }else if (values.username.length < 5) {
    errors.username = '*Username must be longer than 5 characters';
  }
  if (!values.firstname) { // if name is empty
    errors.firstname = '*Firstname is required';
  }else if (/\d/.test(values.firstname)) {
    errors.firstname = '*Cannot have numbers';
  }
  if (!values.lastname) { 
    errors.lastname = '*Lastname is required)';
  }else if (/\d/.test(values.lastname)) {
    errors.lastname = '*Cannot have numbers';
  }
  if(!values.password) {
    errors.password = '*Password is required';
  }else if (values.password.length < 8) {
    errors.password = '*Password must be longer than 8 characters';
  }
  if(values.password !== values.confirmPassword) {
    errors.confirmPassword = '*Passwords do not match'
  } 

  if(Object.keys(errors).length === 1) { // length of 1 being that there is only the 'valid' key and no errors
    errors.valid = true;
  }
  return errors;
}
export default ValidateForm;
