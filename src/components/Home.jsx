import React, { useEffect } from "react";
import "./Home.css"
import ErrorBoundary from "../ErrorBoundary";
import Header1 from "./Header1";
import { useDispatch, useSelector } from "react-redux";
import {loadMovies} from '../store/movies'

function Homepage () {
    const dispatch = useDispatch();
    const moviesList = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch]);

        return(
            <div className="Header">
                <ErrorBoundary>
                    <Header1 movies={moviesList.data}/>
                </ErrorBoundary>
            </div>
        );
}
export default Homepage
