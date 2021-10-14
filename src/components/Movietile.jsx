import React from "react";
import "./Home.css"
import PropTypes from 'prop-types';

function Movietile(props) {
    return (
        <div className="movietiles">            
           <React.Fragment key={props.datas.id}>
                <div className="movietilestyle" >
                    <img src={props.datas.image} alt="movie info" />
                    <div className="row">
                        <h3 className="col-md-auto">{props.datas.movie}</h3>
                        <div className="col align-">
                            <div className="rectangle8 float-right">
                                <p>{props.datas.year}</p>
                            </div>
                        </div>
                        
                    </div>
               
                    <p>{props.datas.type}</p>
                    
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