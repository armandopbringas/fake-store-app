import React from 'react';

const Home = ({ token }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome {token.user.user_metadata.full_name}</p>
    </div>
  );
}

export default Home;
