import { Component } from "react";
import './registerPage.css';

class RegisterPage extends Component {
    state = {
      username: '',
      email: '',
      password: ''
    }
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
    }
    handleRegister = () => {
      const { username, email, password } = this.state;
      console.log(username, email, password, ' --- data');
      this.setState({
        username: '',
        email: '',
        password: ''
      })
    }
    render() {
      const { username, email, password } = this.state;
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

export default RegisterPage;