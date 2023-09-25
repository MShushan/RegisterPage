/*import { Component } from "react";
import './registerPage.css';

class RegisterPage extends Component {
    state = {
      username: '',
      email: '',
      password: '',
      validationErrors: {}
    }
    validateEmail = (email) => {
      return false
    }
    validatePassword = (password) => {
      return false
    }
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
    }
    handleRegister = () => {
      const { username, email, password } = this.state;
      const validationErrors = {}
      if (!email.trim() && !this.validateEmail(email)) {
        validationErrors.email = 'Please enter a valid email.'
      }
      if (!password.trim() && !this.validatePassword(password)) {
        validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
      }
      if (username.trim().length < 3) {
        validationErrors.username = 'Username is required.'
      }
      if (Object.keys(validationErrors).length === 0) {
        this.props.handleRegistration({ username, email, password })
        this.setState({
          username: '',
          email: '',
          password: '',
          validationErrors: {}
        })
      } else {
        this.setState({ validationErrors })
      }
    }
    render() {
      const { username, email, password, validationErrors } = this.state;
      return (
        <div className="register-page-wrapper">
          <h1>Register page</h1>
          <div className="register-form">
            <div className="register-input">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="register-input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="register-input">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            {
              Object.keys(validationErrors).length ? (
                <div className="error-alert">
                  <span>{ validationErrors.email }</span>
                  <span>{ validationErrors.password }</span>
                  <span>{ validationErrors.username }</span>
                </div>
              ) : null
            }
            <button
              className="register-btn"
              onClick={ this.handleRegister }
            >
              Register
            </button>
          </div>
        </div>
      )
    }
  }
export default RegisterPage;*/
import  { useState } from 'react';
import './registerPage.css';

const RegisterPage = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validateEmail = (email) => {
    return false; 
  };

  const validatePassword = (password) => {
    return false; 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    const { username, email, password } = formData;
    const newValidationErrors = {};

    if (!email.trim() && !validateEmail(email)) {
      newValidationErrors.email = 'Please enter a valid email.';
    }

    if (!password.trim() && !validatePassword(password)) {
      newValidationErrors.password =
        'Password must contain letters, numbers, and be at least 6 characters long.';
    }

    if (username.trim().length < 3) {
      newValidationErrors.username = 'Username is required.';
    }

    if (Object.keys(newValidationErrors).length === 0) {
      props.handleRegistration({ username, email, password });
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      setValidationErrors({});
    } else {
      setValidationErrors(newValidationErrors);
    }
  };

  return (
    <div className="register-page-wrapper">
      <h1>Register page</h1>
      <div className="register-form">
        <div className="register-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="register-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="register-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {Object.keys(validationErrors).length > 0 && (
          <div className="error-alert">
            {validationErrors.email && <span>{validationErrors.email}</span>}
            {validationErrors.password && (
              <span>{validationErrors.password}</span>
            )}
            {validationErrors.username && (
              <span>{validationErrors.username}</span>
            )}
          </div>
        )}
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;