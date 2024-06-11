import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const [credentials, setCredentials] = useState({name: "", email:"", password: "", cpassword: ""});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // createuser API call
    const {name, email, password} = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // set the auth token redirect to home page
      localStorage.setItem('token', json.authToken);
      navigate('/');
      props.showAlert('Account created Succesfuly.', 'success');
    }
    else {
      props.showAlert('Invalid credentials.', 'danger')
    }
  }
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-2">
      <h2 className="my-3">Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={onChange}
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control"
          id="password" name="password" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control"
           id="cpassword" name="cpassowrd" onChange={onChange} minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
