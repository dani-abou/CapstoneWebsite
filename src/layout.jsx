import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import './layout.css';

export default function Layout({ children }) {
  return <div className="background">
    <div className="frame">
      <div className="banner">
        <img src={logo} alt='logo' className="logo" />
      </div>
      <Navbar />
      {children}
    </div>
  </div>
}

function Navbar() {
  return <div className="navbar">
    <NavLink to="/">
      <button className="nav-button">Home</button>
    </NavLink>
    <NavLink to="/projects">
      <button className="nav-button">Projects</button>
    </NavLink>
    <NavLink to="/people">
      <button className="nav-button">Students</button>
    </NavLink>
  </div>
}