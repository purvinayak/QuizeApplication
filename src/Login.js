
import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    if (this.state.username === '' || this.state.password === '') {
      alert('Please enter both username and password');
    } else {
      localStorage.setItem('username', this.state.username);
      localStorage.setItem('password', this.state.password);
      alert('Successfully Logged In');
    }
  };

  handleNavLink = () => {
    
    if (this.state.username === '' || this.state.password === '') {
      alert('You must first login before starting the Quiz');
    } else {
      this.props.nav(); 
    }
  };

  render() {
    return (
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleClick}>Login</button>
        <br />
        <br />
        <button onClick={this.handleNavLink}>
          Switch to QuizApp
        </button>
      </div>
    );
  }
}

export default Login;
