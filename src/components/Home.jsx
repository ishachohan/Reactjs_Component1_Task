import React, { Component } from "react";
import "./Home.css"
import HeaderPage from "./Header";
import ErrorBoundary from "../ErrorBoundary";

class Homepage extends Component{

    render(){
        return(
            <div className="Header">
                <ErrorBoundary>
                    <HeaderPage/>
                </ErrorBoundary>
            </div>
        );
    }

}
export default Homepage




