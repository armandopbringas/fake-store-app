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

  return (
    <BrowserRouter>
      <Layout token={token} setToken={setToken}>
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/home" /> : <Landing />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate to="/home" /> : <SignUp />}
          />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/home" /> : <LogIn setToken={setToken} />
            }
          />
          <Route
            path="/home"
            element={
              token ? <Home token={token} /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
