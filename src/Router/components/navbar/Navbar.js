// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav style={{ padding: '1rem', background: '#eee' }}>
//       <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
//       <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
//       {/* <Link to="/about/profile">Profile</Link> */}
//     </nav>
//   );
// }

// export default Navbar;


import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useTheme } from '../../Context/ThemeContext';
import './Navbar.css'; // Make sure this path matches your file structure

function Navbar() {
  const { isAuthenticated, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about/profile">Profile</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-actions">
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
        </button>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


