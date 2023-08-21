import React, { useState } from 'react';
import './LoginBoxModule.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(false); // Reset error state on input change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false); // Reset error state on input change
  };

  const validateUsername = () => {
    const containsLetters = /[a-zA-Z]/.test(username);
    const containsNumbers = /[0-9]/.test(username);
    const isValid = containsLetters && containsNumbers;
    if (!isValid) {
      setUsernameError(true);
    }
    return isValid;
  };

  const validatePassword = () => {
    const containsUppercase = /[A-Z]/.test(password);
    const containsSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    const isValid = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password);
    if (!isValid) {
      setPasswordError(true);
    }
    return isValid && containsUppercase && containsSpecialChar;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateUsername() || !validatePassword()) {
      toast.error("Invalid username or password.");
      return;
    }

    toast.success("Form submitted successfully!");
  };

  return (
    <div className="login-box">
      <div className="logo">
        <img src="download1.png" alt="" />
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={`user-box ${usernameError ? 'has-error' : ''}`}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label>Username</label>
        </div>
        <div className={`user-box ${passwordError ? 'has-error' : ''}`}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Submit
        </button>
      </form>
      <div className="forgot-password">
        <a href="">Forgot Password?</a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginBox;
