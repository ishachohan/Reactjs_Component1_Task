import React,  { useState, useEffect } from "react";
import { Button, Modal, ModalTitle} from 'react-bootstrap';
import "./AddMovie.css"
import ReactDOM from 'react-dom';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


function AddMovie(){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const initialTitle = 'ADD MOVIE'      
    const [title, setTitle] = useState(initialTitle);      
    useEffect(() => {      
        document.title = `New ${title}`      
    }); 

    var data = [
        {value: 'Crime', label: 'Crime',isSelected: true},
        {value: 'Documentary', label: 'Documentary'},
        {value: 'Horror', label: 'Horror'},
        {value: 'Comedy', label: 'Comedy', isSelected: true}
    ];
    

    return ReactDOM.createPortal (
            <React.Fragment>            
                    <input type="button" onClick={handleShow} className="addmoviesbtn" value="+ ADD MOVIES" />              
                    
                    <Modal show={show} onHide={handleClose} dialogClassName="modal-content">
                            
                        <Modal.Header className="headerbackstyle" closeButton>

                        <Modal.Title>{initialTitle}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="addmovieModalbox">
                        <div className="container">
                            <div className="left">
                                <label className="fontstyles">TITLE</label>
                                <input type="text" className="backstlyes fontstyles2" 
                                   placeholder="TITLE" value={title} 
                                   onChange={(e) => setTitle(e.target.value)}/>
                                
                                <label className="fontstyles">MOVIE URL</label>
                                <input type="text" className="backstlyes fontstyles2" placeholder="https://"></input>

                                <label className="fontstyles">GENRE</label>
                                <ReactMultiSelectCheckboxes options = {data} className="MultiSelectstyle"/>
                               
                            </div>
                            <div className="right">
                                <label className="fontstyles">RELEASE DATE</label>
                                <input type="date" className="backstlyes2 fontstyles2" placeholder="SELECT DATE"></input>

                                <label className="fontstyles">RATING</label>
                                <input type="text" className="backstlyes2 fontstyles2"></input>

                                <label className="fontstyles">RUNTIME</label>
                                <input type="text" placeholder="minutes" className="backstlyes2 fontstyles2"></input>
                            </div>
                        </div>
                        <div>
                                <label className="fontstyles">OVERVIEW</label>
                                <textarea className="backstlyes3 fontstyles2" 
                                       placeholder="Movie description"
                                       rows={10} cols={100} />
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