import React, {useState} from "react";
import {ResultCard} from "./ResultCard.js";


export const Add = () => {

    const [query, setQuery] = useState("");
    const [results, setResutls] = useState([]);

    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((response) => response.json())
        .then((data) => {
            if(!data.errors){
                setResutls(data.results);
            } else {
                setResutls([]);
            }
        })
    }



  return (
    <div className="add-page">
        <div className="container">
            <div className="add-content">
                <div className="input-wrapper">
                    <input 
                        type='text'
                        placeholder="Search for a movie"
                        value={query}
                        onChange={onChange}
                    />

                </div>

                {results.length > 0 && (
                    <ul className="results">
                        {results.map((movie) => (
                            <li>
                                <ResultCard movie= {movie} />
                            </li>
                        ))}    
                    </ul>
                )}

            </div>
        </div>
    </div>
  )
}
