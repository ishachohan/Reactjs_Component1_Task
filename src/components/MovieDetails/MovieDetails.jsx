import React,  { useState } from "react";
import "./MovieDetails.css"
import styled from "styled-components";
import Movietile from "../Movietile";
import SearchMovie from "../SearchMovie";



const CoverImage = styled.img`
  object-fit: cover;
  width: 320px;
  height: 400px;
  left: 5px;
  top: 100px;
`;

const DetailText = styled.label`
width: 698px;
height: 292px;
left: 400px;
top: 200px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;;
`
;

const SearchIcon = styled.img`
object-fit: cover;
width: 32px;
height: 32px;
left: 900px;
top: 5px;
cursor: pointer;
`;

const MovieText = styled.label`
width: 300px;
height: 49px;
left: 494px;
top: 100px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 49px;

text-align: center;
letter-spacing: 1px;
text-transform: uppercase;

color: #FFFFFF;
`;

const Ratingstext = styled.label`
height: 24px;
left: 200px;
height: 24px;
top:100px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 1100px;
  height: 396px;
  left: 5px;
  top: 1px;
`;

const MovieTypetext = styled.label`
    width: 323px;
    height: 17px;
    left: 494px;
    top: 186px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
`;

const MovieYear = styled.label`
width: 54px;
height: 29px;
left: 500px;
top: 233px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 29px;

color: #F65261;
`;

const MovieRunTime = styled.label`
width: 113px;
height: 29px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 29px;

color: #F65261;
`;

function MovieDetails(props){
    const textdetails = "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra";
    const [flag, setflag] = useState(false);

    const flagHandler = () => {
        setflag(true);
      };
      
      if(flag)
               return<SearchMovie/>
      else
            {
                return(
                <MovieContainer>

                 <div className="column" style={{textAlign:"right"}}>
                 <SearchIcon src="/search-2-32.png" alt="search button" onClick={flagHandler} />
                </div>
                <div className="row">
                    <CoverImage  src={"/Pulp Fiction.png"} alt="plup Fiction" />
                    <div className="col-5">
                        <MovieText>PULP FICTION</MovieText>
                        <Ratingstext>8.9</Ratingstext>
                        <div className="col-9">
                            <MovieTypetext>Action & Adventure</MovieTypetext>
                        </div>
                        
                        <div className="col-9">
                            <MovieYear>1994</MovieYear>
                            <MovieRunTime>2h 32min</MovieRunTime>
                        </div>
                        <div className="col-9">
                            <DetailText>{textdetails}</DetailText>
                        </div> 
                    </div>
                </div>
                </MovieContainer>
                )
                
            }
}

export default MovieDetails