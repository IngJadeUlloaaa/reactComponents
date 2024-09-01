import React, { useEffect, useState } from 'react';

function AvengersApi() {
    const [avengersList, setAvengersList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Avengers');

    const fetchMovies = (query) => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${query}`)
            .then((response) => response.json())
            .then((data) => {
                setAvengersList(data.Search || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error(`Hubo un error al hacer fetch: ${error}`);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchMovies(searchTerm);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault(); 
        fetchMovies(searchTerm);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <header>
                <h1>Avengers Api</h1>
            </header>
            <main>
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder='write your movie...' 
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
                {loading ? (
                    <p>Loading Movies...</p>
                ) : (
                    <ul>
                        {avengersList.length > 0 ? (
                            avengersList.map((movie) => (
                                <li key={movie.imdbID}>
                                    <h2>{movie.Title}</h2>
                                    <p>{movie.Year}</p>
                                    <img src={movie.Poster} alt={movie.Title} />
                                </li>
                            ))
                        ) : (
                            <p>No movies found</p>
                        )}
                    </ul>
                )}
            </main>
        </div>
    );
}

export default AvengersApi;