import React, { Component, useEffect, useState, useCallback } from "react";
import "./Home.css"
import Movietile from "./Movietile";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails/MovieDetails";
import myData from "../data.json"

const Header1 = (props)=>{

    const [selectedMovie, onMovieSelect] = useState(0);
    const [flag, setflag] = useState(false);
    const [movieList, updateMovieList] = useState(myData);

    const flagHandler = () => {
        setflag(true);
        onMovieSelect(selectedMovie + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
   
      useEffect(()=>{
        return () => {
           console.log('component did unmount');
          };
      },([]))
       
    return(
        <div>
            {flag == false && <SearchMovie/>}
            {flag == true && <MovieDetails/> }
           
            <div className="rectangle9"></div> 

            <label className="all">All</label>
            <label className="Documentary">DOCUMENTARY</label>
            <label className="Comedy">COMEDY</label>
            <label className="Horror">HORROR</label>
            <label className="Crime">CRIME</label>
            <label className="moviesfound">39 movies found</label>  
            <label className="Sortby">Sort by</label>
            <label className="Releasedate">RELEASE DATE</label>
                
            <div className="row moviediv" onClick={flagHandler}>
                    {movieList?.length ? (
                        movieList.map((movie, index) => (
                        <Movietile
                        key={movie.id}
                        movie={movie} 
                        onMovieSelect={onMovieSelect}             
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