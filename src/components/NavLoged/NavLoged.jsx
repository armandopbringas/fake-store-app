import { Link, useNavigate } from 'react-router-dom';

const NavLoged = ({ setToken }) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken(false);
    navigate("/");
  };

  return (
    <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/home">Logo</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
 
export default NavLoged;
