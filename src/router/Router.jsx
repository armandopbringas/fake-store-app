import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import NavLoged from '../components/NavLoged/NavLoged';
import Nav from '../components/Nav/Nav';

const AppRouter = () => {
  const [token, setToken] = useState(false);
  
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        {!token ? (<Nav />) : (<NavLoged setToken={setToken} />)}
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={<LogIn setToken={setToken} />}
        />
        {token && (<Route path="/home" element={<Home token={token} />} />)}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
