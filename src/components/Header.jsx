import React, { Component } from "react";
import "./Home.css"
import myData from "../data.json"
import Movietile from "./Movietile";
import AddMovie from "./AddMovie/AddMovie";
import DeleteMovie from "./DeleteMovie/DeleteMovie"
import EditMovie from "./EditMovie/EditMovie"


class HeaderPage extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state ={
           data : myData
        };
    }

    render(){
        
        const movieComponents = myData.map(data => <Movietile key ={data.id} datas={data}/>)
        return(
            <div>
                <div className="rectangle1">
                    <input type="image" className="bitmapimageback" alt="Image"/>
                </div>    
                
              <AddMovie/>
              <EditMovie/>
              <DeleteMovie/>
                <div>
                    <h1 className= "labelFindText">FIND YOUR MOVIE </h1>
                    <input type="text" placeholder="What do you want to watch?" className="SearchInput" />
                    <input type="button" className="SearchBtn" value="Search" />
                </div> 
               
                <div className="rectangle9"></div> 

                <label className="all">All</label>
                <label className="Documentary">DOCUMENTARY</label>
                <label className="Comedy">COMEDY</label>
                <label className="Horror">HORROR</label>
                <label className="Crime">CRIME</label>
                <label className="moviesfound">39 movies found</label>  
                <label className="Sortby">Sort by</label>
                <label className="Releasedate">RELEASE DATE</label>
                    
                <div className="row moviediv">
                    {movieComponents}
                </div>

                     
            </div>
        );
    }

}
export default HeaderPage
