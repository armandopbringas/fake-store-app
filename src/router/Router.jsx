import React, {useState} from 'react';
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

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => setIsAuthenticated(false);

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
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : null}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={<LogIn onLogin={handleLogin} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/home" element={<PrivateRoute isAuthenticated={isAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Home />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AppRouter;
