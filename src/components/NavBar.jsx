import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <span className="logo-mark">Q</span>
        QUESTLOG
      </NavLink>

      <nav className="navigation">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/games" className="nav-link">Games</NavLink>
        <NavLink to="/library" className="nav-link">Library</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
      </nav>
    </header>
  );
}
