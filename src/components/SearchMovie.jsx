import React,{useState} from "react";
import AddMovie from "./AddMovie/AddMovie";
import DeleteMovie from "./DeleteMovie/DeleteMovie"
import EditMovie from "./EditMovie/EditMovie"
import { useDispatch, useSelector } from "react-redux";
import {searchMovies} from '../store/movies'
import Header1 from "./Header1";

function SearchMovie(props) 
{

    const [value,setValue]=useState('');
    const dispatch = useDispatch();
    const moviesList = useSelector((state) => state.list);

    const [flag, setflag] = useState(false);
    const flagHandler = () => {
        setflag(true);
        dispatch(searchMovies(value));
    };

    if(flag)
    {
        return(
            <Header1 movies={moviesList.data}/>
        );
    }
    else{
        return(
            <div className="rectangle1">
                    <input type="image" className="bitmapimageback" alt="Image"/> 
                    <AddMovie/>
                    <EditMovie/>
                    <DeleteMovie/>
                    <div>
                        <h1 className= "labelFindText">FIND YOUR MOVIE </h1>
                        <input type="text" placeholder="What do you want to watch?" 
                               className="SearchInput" value = {value} onChange={e => setValue(e.target.value)}  />
                        <input type="button" className="SearchBtn" value="Search" onClick={flagHandler} />
                    </div> 
            </div> 
    
        )
    }
}
export default SearchMovie;