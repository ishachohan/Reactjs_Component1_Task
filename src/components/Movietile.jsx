import React from "react";
import "./Home.css"
import PropTypes from 'prop-types';

function Movietile(props) {

    return (
        <div className="movietiles" onClick={props.onMovieSelect(props.movie.id)}>            
           <React.Fragment key={props.movie.id}>
                <div className="movietilestyle" >
                    <img src={props.movie.image} alt="movie info" />
                    <div className="row">
                        <h3 className="col-md-auto">{props.movie.movie}</h3>
                        <div className="col align-">
                            <div className="rectangle8 float-right">
                                <p>{props.movie.year}</p>
                            </div>
                        </div>
                        
                    </div>
               
                    <p>{props.movie.type}</p>
                    
                </div>
            </React.Fragment>
                
        </div>
    )
}
export default Movietile

Movietile.propTypes = {
    datas: PropTypes.shape({
      movie: PropTypes.string,
      id: PropTypes.number,
      type: PropTypes.string,
      year: PropTypes.string
    })
  }