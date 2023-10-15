import React from "react";
import module from "../styles/Layout.module.css"

const Home = ({ token }) => {
  return (
    <div className={module.BoxCentered}>
      <p>Welcome to  The Fake Store {token.user.user_metadata.full_name}</p>
    </div>
  );
};

export default Home;
