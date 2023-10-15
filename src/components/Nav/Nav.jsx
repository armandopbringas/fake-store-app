import { Link } from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";

const Nav = () => {
  return (
    <>
      <nav
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link to="/" className="flex items-center gap-2">
            <MdLocalGroceryStore size={24} />
            <h3 className="text-xl font-medium leading-tight">The Fake Store</h3>
          </Link>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </>
  );
};

export default Nav;
