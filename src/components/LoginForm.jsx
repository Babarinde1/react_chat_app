import React, { useState } from "react";
import axios from "axios";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = { "Project-ID": "fa4fba5c-31cc-4522-8fa5-8d0ba9cd8cc9",
    'User-Name': userName,
     'User-Secret':password };

     try {
      await axios.get('https://api.chatengine.io/chats',{
            headers:authObject
        });
         localStorage.setItem('username', userName);
         localStorage.setItem("password", password);

         window.location.reload();
     } catch (error) {
        setError('Oops, Incorrect Password or Email!😪')
     }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Enter Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Enter Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
                <span>Login</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
