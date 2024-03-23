import React, { useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import './Movies.css';

const Movies = () => {
    // using the states
    const [movies, setMovies] = useState([]);
    const [ query, setQuery] = useState('');

    const  searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "c1011e0b";
        const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data);


            // setState
            setMovies(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="shoppies">
            {/* the header component */}
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}

export default Movies;