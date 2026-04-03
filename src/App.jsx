import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import MovieForm from "./components/CreateMovie";
function App() {
  return (
    <Router>
      <Navbar /> {/* This stays visible on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create/movie" element={<MovieForm />} />
       
        <Route path="/movies" element={<Movies />} />
        
      </Routes>
    </Router>
  );
}

export default App;
