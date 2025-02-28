import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src='/Food_Network_New_Logo.png' alt="logo" />
        </Link>
      </div>   
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quote">Quote</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/foods">Foods</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/get-started">
        <button className="nav-btn">Get Started</button>
      </Link>
    </nav>
  );
}
