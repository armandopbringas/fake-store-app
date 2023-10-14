import { Footer } from "../Footer/Footer";
import Nav from "../Nav/Nav";
import NavLoged from "../NavLoged/NavLoged";
import module from "../../styles/Layout.module.css"

const Layout = ({ children, token, setToken }) => {
  return (
    <>
      {!token ? <Nav /> : <NavLoged setToken={setToken} />}
      <div className={module.Box}>
      {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
