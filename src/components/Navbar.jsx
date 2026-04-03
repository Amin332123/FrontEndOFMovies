import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    const res = axios.post("http://localhost:8000/api/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    localStorage.removeItem('token'); 
    window.location.href = '/'
  };
  return (
    <nav className="navbar" style={{display:'flex' , justifyContent:'space-around'}}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      {localStorage.getItem('token') && <Link to="/movies">Movies</Link>}
      {localStorage.getItem('token') && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
