import { Link, useNavigate } from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";

const NavLoged = ({ setToken }) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(false);
    navigate("/");
  };

  return (
    <>
      <nav
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/home" className="flex items-center gap-2">
          <MdLocalGroceryStore size={24} />
          <h3 className="text-xl font-medium leading-tight">The Fake Store</h3>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </>
  );
};

export default NavLoged;
