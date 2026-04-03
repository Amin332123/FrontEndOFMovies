import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Missing token");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:8000/api/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        setMovies(Array.isArray(res.data) ? res.data.movies : []);
      } catch (err) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Link to="/create/movie">Create Movie</Link>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <h3>{movie.description}</h3>
          <h3>{movie.release_year}</h3>
          <h3>{movie.duration}</h3>
        </div>
      ))}
    </>
  );
};

export default Movies;
