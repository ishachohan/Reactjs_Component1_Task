import React, { useState } from "react";
import "./Home.css"
import Movietile from "./Movietile";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails/MovieDetails";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { filterbygenres } from "../store/movies";
import { useDispatch } from "react-redux";

const Header1 = (props) => {

    const [MovieSelect, SetMovieSelect] = useState({});
    const [flag, setflag] = useState(false);
    var movieList = props.movies;

    const [value,setValue]=useState('Release Date');
    const handleSelect=(e)=>{
        setValue(e)
      }

    const dispatch = useDispatch();

    const handleChange = (event, movie) => {
        
        let newMovies = { ...MovieSelect };
        newMovies = movie;

        SetMovieSelect(newMovies);
        
      };

    const flagHandler = () => {
        setflag(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        };

        
    return(
        <div>
            {flag === false && <SearchMovie/>}
            {flag === true && <MovieDetails movie={MovieSelect}/> }
           
            <div className="rectangle9"></div> 

            <a className="all" href="#" onClick={() => dispatch(filterbygenres("",value))}>ALL</a>
            <a className="Documentary" href="#" onClick={() => dispatch(filterbygenres("documentary",value))}>DOCUMENTARY</a>
            <a className="Comedy" href="#" onClick={() => dispatch(filterbygenres("comedy",value))}>COMEDY</a>
            <a className="Horror" href="#" onClick={() => dispatch(filterbygenres("horror",value))}>HORROR</a>
            <a className="Crime" href="#" onClick={() => dispatch(filterbygenres("crime",value))}>CRIME</a>
            <label className="moviesfound">39 movies found</label>  
            <label className="Sortby">Sort by</label>

            <DropdownButton id="Iddropdown" title={value} variant="secondary"
                            className="Releasedate"  onSelect={handleSelect}>
                <Dropdown.Item eventKey="Release Date">Release Date</Dropdown.Item>
                <Dropdown.Item eventKey="Ratings">Ratings</Dropdown.Item>
            </DropdownButton>
                      
                
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