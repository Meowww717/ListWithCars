import React from 'react';
import './modal.css';

const Modal = (props) => {

    const clearInputs = () => {
        document.querySelectorAll('input').forEach((input) => {
            input.value = '';
        });
    };

    const closeModal = () => {
        document.getElementById('modal').classList.remove('show');
        clearInputs(); 
    };

    const checkId = () => {
        const item = document.getElementById('id');
    
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
        
    };

    const saveChanges = () => { 
        return () => {props.saveChanges();}
    }

    return (
        <div id="modal" className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Enter Car data</h5>
                </div>
                <div className="modal-body">
                    <p>Enter Id<input onChange={checkId} id="id" type="text"></input></p>
                    <p>Enter model<input id="model" type="text"></input></p>
                    <p>Enter brand<input id="brand" type="text"></input></p>
                    <p>Choose type
                        <select id="type">
                            <option>Car</option>
                            <option>Motorcycle</option>
                        </select>
                    </p>
                </div>
                <div className="modal-footer">
                    <button onClick={saveChanges()} type="button" className="btn btn-primary">Save changes</button>
                    <button onClick={closeModal} id="modalClose" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
