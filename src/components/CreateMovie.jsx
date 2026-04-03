import axios  from "axios";
import  { useState } from 'react';

const MovieForm = () => {


    const [movie , setmovie]= useState({
        title : '',
        duration :0,
        release_year : 0

    });

    const handleChange = (e) => {
        const {name , value} = e.target;

        setmovie({
            ...movie,
            [name]: value
        });
    }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/movies',
        movie,{
        headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: 'application/json'
      }
    });
     setmovie(res.data.movies);

    }
    
    return (
        <>
        <div>
            <form onSubmit={handleSubmit} style={{display:'grid', marginTop:'100px', gap:'20px', justifyContent:'center'}}>
                <input type="text" name="title" onChange={handleChange} value={movie.title} placeholder="Movie Title"/>
                <input type="number" name="release_year"  onChange={handleChange} placeholder="Release year" value={movie.release_year} min={1900} max={2026} />
                <input type="number" name="duration" onChange={handleChange} min={0} max={50} value={movie.duration} />  
                <button type="submit" >Submit</button>
            </form>
        </div>
        
        
        </>
    );
}


export default MovieForm;
