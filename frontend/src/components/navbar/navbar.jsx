import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
export default function Navbar() {
  const navigate = useNavigate();
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
        <Link to="/signIn" className="link">
          Sign in
        </Link>
        <Link to="/register" className="mainButton">
          Register
        </Link>
      </div>
    </nav>
  );
}
