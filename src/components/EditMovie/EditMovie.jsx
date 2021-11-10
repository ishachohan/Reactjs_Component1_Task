import React,  { useState , useEffect} from "react";
import { Button, Modal} from 'react-bootstrap';
import "../AddMovie/AddMovie.css"
import ReactDOM from 'react-dom';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import TextField from '@material-ui/core/TextField';



function AddMovie(){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    var MockData={
        Movie : "Moana",
        Date : "14-11-2016",
        Url:"https://www.moana.com",
        Rating: 7.8,
        running:"1h 47min",
        overview: "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."
    }


    var data = [
        {value: 'Crime', label: 'Crime',isSelected: true},
        {value: 'Documentary', label: 'Documentary'},
        {value: 'Horror', label: 'Horror'},
        {value: 'Comedy', label: 'Comedy', isSelected: true}
    ];
    
   
    return ReactDOM.createPortal (
            <React.Fragment>
                  
                    <input type="button" onClick={handleShow} className="editmoviesbtn" value="+EDIT MOVIES" />              
                    <Modal 
                        show={show} 
                        onHide={handleClose}     
                        dialogClassName="modal-content"              
                        >
                            
                        <Modal.Header className="headerbackstyle" closeButton>

                        <Modal.Title>EDIT MOVIE</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="addmovieModalbox">
                        <div className="container">
                            <div className="left">
                                <label className="fontstyles">TITLE</label>
                                <input type="text" className="backstlyes" name="txtMovie" value={MockData.Movie} placeholder="TITLE" ></input>
                                
                                <label className="fontstyles">MOVIE URL</label>
                                <input type="text" className="backstlyes" placeholder="https://" value={MockData.Url}></input>

                                <label className="fontstyles">GENRE</label>
                                <ReactMultiSelectCheckboxes options = {data} className="MultiSelectstyle"/>
                               
                            </div>
                            <div className="right">
                                <label className="fontstyles">RELEASE DATE</label>
                                <TextField id="date" type="date" defaultValue={MockData.Date} className="backstlyes2"
                                         InputProps={{color: "white"}}
                                         InputLabelProps={{ shrink: true}}/>
                            
                                <label className="fontstyles">RATING</label>
                                <input type="number" className="backstlyes2" value={MockData.Rating}></input>

                                <label className="fontstyles">RUNTIME</label>
                                <input type="text" placeholder="minutes" className="backstlyes2" value={MockData.running}></input>
                            </div>
                           
                        </div>
                        <div>
                                <label className="fontstyles2">OVERVIEW</label>
                                <textarea className="backstlyes3" 
                                       placeholder="Movie description"
                                       rows={40} cols={100} 
                                       onChange = {(event) => this.handleOnChange(event)}
                                       value={MockData.overview}
                                       >
                                           
                                </textarea>
                               
                        </div>
                           
                        </Modal.Body>
                        
                        <Modal.Footer className="headerbackstyle">
                        <Button variant="custom" onClick={handleClose} >
                            RESET
                        </Button>
                        <Button   variant="customsubmit" onClick={handleClose}>
                            SUBMIT
                        </Button>
                        </Modal.Footer>
                    </Modal>              
            </React.Fragment>,
            document.getElementById('portal')
           
        );
}
export default AddMovie