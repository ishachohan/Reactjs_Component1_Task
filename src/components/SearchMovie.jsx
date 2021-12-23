import React from "react";
import AddMovie from "./AddMovie/AddMovie";
import DeleteMovie from "./DeleteMovie/DeleteMovie"
import EditMovie from "./EditMovie/EditMovie"
//import { useDispatch, useSelector } from "react-redux";
//import {searchMovies} from '../store/movies'

function SearchMovie(props) 
{
    /*const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.list);   
    useEffect(() => {
        dispatch(searchMovies());
    }, [dispatch]); 
*/
    return(
        <div className="rectangle1">
                <input type="image" className="bitmapimageback" alt="Image"/> 
                <AddMovie/>
                <EditMovie/>
                <DeleteMovie/>
                <div>
                    <h1 className= "labelFindText">FIND YOUR MOVIE </h1>
                    <input type="text" placeholder="What do you want to watch?" className="SearchInput"  />
                    <input type="button" className="SearchBtn" value="Search" onClick={SearchMovie} />
                </div> 
        </div> 

        )

}
export default SearchMovie;