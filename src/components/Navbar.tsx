import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <nav className="links">
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link >
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar

