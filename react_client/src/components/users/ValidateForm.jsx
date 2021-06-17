const ValidateForm = (values)=>{
  let errors = {valid: false};

  if(!values.fullname) { // if name is empty
    
    errors.fullname = 'Name is required';
  } else if (!/\b \b/.test(values.fullname)) {
    errors.fullname = 'Your full name is required';
  }
  if (!values.email) { // if name is empty
    errors.email = 'Email is required';
  }else if (!/\S+@\S+\.\S+/.test(values.email)) { // using regex to validate email with @ folowed by .
    errors.email = 'Email is Invalid. Please enter a valid email';
  }
  if(!values.password) {
    errors.password = 'Password is required';
  }else if (values.password.length < 8) {
    errors.password = 'Password must be longer than 8 characters';
  }
// console.log('this is error in valid form : ',errors)
  console.log()
  if(Object.keys(errors).length === 1) { // length of 1 being that there is only the 'valid' key and no errors
    errors.valid = true;
  }
  return errors;
}
export default ValidateForm;