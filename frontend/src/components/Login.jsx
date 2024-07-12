import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [data, setData] = useState({ username: '', password: '' });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleData = (e) => {
    e.preventDefault();
    const user = data;
    axios.post("http://localhost:4000/login/", user)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate('/');
        }    
        else{
          console.log("error");
          setError("Login failed, Please check username and password");
        }    
      })
      .catch((err) => {
        console.error("error: ", err.message);
        setError("Login failed, Please check username and password");
      });
  }

  return (
    <div className="container border" style={{ marginTop: 50, padding: 50, width: 500, }}>
      <div
        className="row"
      >
        <h1>Login</h1>
        <form onSubmit={handleData}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>

    </div>
  )
}

export default Login
