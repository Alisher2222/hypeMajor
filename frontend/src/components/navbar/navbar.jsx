import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth.slice";
import styles from "./navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap(); // дожидаемся завершения logout
      navigate("/"); // редирект на главную после выхода
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>HypeMajor</h1>
      <div className={styles.links}>
        <Link to="/" className="link">
          Home
        </Link>
        <a href="#howitWorks" className="link">
          How it works
        </a>

        {!token ? (
          <>
            <Link to="/signIn" className="link">
              Sign in
            </Link>
            <Link to="/register" className="mainButton">
              Register
            </Link>
          </>
        ) : (
          <Link onClick={handleLogout} className="link">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}
