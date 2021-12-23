import React, { useState } from "react";
import "./Home.css"
import Movietile from "./Movietile";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails/MovieDetails";
import { Dropdown } from "react-bootstrap";
import { filterbygenres } from "../store/movies";
import { useDispatch, useSelector } from "react-redux";

const Header1 = (props) => {

    const [MovieSelect, SetMovieSelect] = useState({});
    const [flag, setflag] = useState(false);
    var movieList = props.movies;

    var moviesbyGenres = useSelector((state) => state.list);


    const handleChange = (event, movie) => {
        
        let newMovies = { ...MovieSelect };
        newMovies = movie;

        SetMovieSelect(newMovies);
      };

    const flagHandler = () => {
        setflag(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        };

    const sortMoviesbyGenre = (genretype)=> { 
            filterbygenres(genretype)
            movieList = moviesbyGenres.data                    
    };
        
    return(
        <div>
            {flag === false && <SearchMovie/>}
            {flag === true && <MovieDetails movie={MovieSelect}/> }
           
            <div className="rectangle9"></div> 

            <label className="all">All</label>
            <a className="Documentary" href="#" onClick={() =>sortMoviesbyGenre("documentary")}>DOCUMENTARY</a>
            <a className="Comedy" href="#" onClick={() =>sortMoviesbyGenre("comedy")}>COMEDY</a>
            <a className="Horror" href="#" onClick={() =>sortMoviesbyGenre("horror")}>HORROR</a>
            <a className="Crime" href="#" onClick={() =>sortMoviesbyGenre("crime")}>CRIME</a>
            <label className="moviesfound">39 movies found</label>  
            <label className="Sortby">Sort by</label>

            <Dropdown className="Releasedate">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Release Date
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Release Date</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Ratings</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
                
            <div className="row moviediv" onClick={flagHandler}>
                    {movieList?.length ? (
                        movieList.map((movie) => (
                        <Movietile
                        key={movie.id}
                        movie={movie} 
                        handleChange={handleChange}       
                        />
                        ))
                        ) : (
                            <span/>
                    )}
            </div>
        </div>

    )   
}
export default Header1