import { Navigate } from 'react-router-dom';

const Home = ({ token }) => {
  const handleLogout = () => {
    console.log('clicked');
    sessionStorage.removeItem('token');
    // Utiliza Navigate para redirigir a la página principal después de cerrar sesión
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
 
export default Home;