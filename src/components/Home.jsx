import React, { Component } from "react";
import "./Home.css"
import HeaderPage from "./Header";
import ErrorBoundary from "../ErrorBoundary";
import Header1 from "./Header1";

class Homepage extends Component{

    render(){
        return(
            <div className="Header">
                <ErrorBoundary>
                    <Header1/>
                </ErrorBoundary>
            </div>
        );
    }

}
export default Homepage




