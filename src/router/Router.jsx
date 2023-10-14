import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import Layout from "../components/Layout/Layout";

const AppRouter = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  const PrivateRoute = ({ element, token }) => {
    return token ? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Layout token={token} setToken={setToken}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn setToken={setToken} />} />
          <Route
            path="/home"
            element={
              <PrivateRoute element={<Home token={token} />} token={token} />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
