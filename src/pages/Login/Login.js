// src/App.js
import React, { useState } from "react";
import './login.scss';
import { Navigate } from "react-router-dom";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // يمكنك قام بفحص اسم المستخدم وكلمة المرور هنا
    // عند النجاح، قم بتعيين القيمة isLoggedIn إلى true
    setLoggedIn(true);
  };

  if (isLoggedIn) {
    // إذا كنت قد سجلت دخولك بنجاح، سيتم توجيهك إلى صفحة أخرى
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="Login">
      <div className="container">
        <h1>Login Admin</h1>
        <form className="login-form">
          <input type="text" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
          
          <button
            className="button-28"
            role="button"
            type="submit"
            onClick={handleLogin}>
            <span className="text">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
