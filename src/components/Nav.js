import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css'; // Note the change to .css

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbarBrand">
        <Link to={'/'}>FNAXIOM</Link>
      </div>
      <div className={`navLinks ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="navLink">Home</Link>
        <Link to="#" className="navLink">About</Link>
        <Link to="#" className="navLink">Assessment Tasks</Link>
        <Link to="#" className="navLink">Contact</Link>
      </div>
      <div className="navLogin">
        <Link to={'/login'}>
          <button className="loginButton">
            Login
          </button>
        </Link>
      </div>
      <div className="navToggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
