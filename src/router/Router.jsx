import React, { useState, useEffect} from 'react';
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

function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(false);

  if(token) {
    sessionStorage.setItem('token',JSON.stringify(token));
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  // function handleLogout(){
  //   sessionStorage.removeItem('token')
  //   navigate('/')
  // }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* {sessionStorage.getItem('token') ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : null} */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={<LogIn setToken={setToken} />}
        />
        {token ? <Route path="/home" element={<Home token={token} />} /> : ""}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
