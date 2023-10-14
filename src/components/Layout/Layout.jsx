import Nav from "../Nav/Nav";
import NavLoged from "../NavLoged/NavLoged";

const Layout = ({ children, token, setToken }) => {
  return (
    <div>
      {!token ? <Nav /> : <NavLoged setToken={setToken} />}
      {children}
    </div>
  );
};

export default Layout;
