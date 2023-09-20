import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';

const AppRouter = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  const handleLogout = () => {
    console.log('clicked');
    sessionStorage.removeItem('token');
    return <Navigate to="/" replace />;
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          {token && (
            <li>
              <Link to="/home">Home</Link>
            </li>
          )}
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {token && (
            <li>
              <button onClick={() => handleLogout()}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={<LogIn setToken={setToken} />}
        />
        {token && (
          <Route path="/home" element={<Home token={token} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
