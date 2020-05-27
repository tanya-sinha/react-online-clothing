import React, {useState} from 'react';
import './sign-in.style.scss';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

const SignIn = ({emailSignInStart,googleSignInStart}) => {
  const [userCredentials, setCredentials] = useState({email:'', password:''})
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     password: ''
  //   };
  // }
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };

  
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
          <form onSubmit={ handleSubmit}> 
            <FormInput 
              name="email" 
              type="text" 
              value={email} 
              handleChange={handleChange}
              label="Email"
              required
              />
            <FormInput 
              name="password" 
              type="password" 
              value={password} 
              handleChange={handleChange}    
              label="Password"
              required
              />
            <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
            </div>                
          </form>
      </div>
    );
  }
  

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null,mapDispatchToProps)(SignIn);