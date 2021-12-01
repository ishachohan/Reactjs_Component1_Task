import React from "react";
import AddMovie from "./AddMovie/AddMovie";
import DeleteMovie from "./DeleteMovie/DeleteMovie"
import EditMovie from "./EditMovie/EditMovie"
import MovieDetails from "./MovieDetails/MovieDetails";

const SearchMovie = (props) =>
{
        return(
            <div className="rectangle1">
                <input type="image" className="bitmapimageback" alt="Image"/> 
                <AddMovie/>
                <EditMovie/>
                <DeleteMovie/>
                <div>
                    <h1 className= "labelFindText">FIND YOUR MOVIE </h1>
                    <input type="text" placeholder="What do you want to watch?" className="SearchInput" />
                    <input type="button" className="SearchBtn" value="Search" />
                </div> 
        </div> 

        )

}
export default SearchMovie;