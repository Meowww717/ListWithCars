import React, {Component} from 'react';
import TableRow from '../tableRow';
import Modal from '../modal';
import './tablBbody.css';
import data from '../../data/data.json';

export default class TableBody extends Component {

    state = {
        items: data
    }

    clearInputs = () => {
        document.querySelectorAll('input').forEach((input) => {
            input.value = '';
        });
    };

    saveChanges = () => {
        const id = document.getElementById('id').value;
        const model = document.getElementById('model').value;
        const brand = document.getElementById('brand').value;
        const type = document.getElementById('type').value;

        const newItem = {
            id,
            model,
            brand,
            type
        }
        
        this.setState(({ items }) => {  
            const newArray = [
              ...items,
              newItem
            ];
      
            return {
                items: newArray
            };
        });

        const newEl = <TableRow 
            deleteItem =  {this.deleteItem}
            key={newItem.id} 
            data={newItem}/>
       
        document.getElementById('modal').classList.remove('show');
        this.clearInputs(); 
    };

   
    deleteItem = (id) => {
        
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);
      
            const newArray = [
              ...items.slice(0, idx),
              ...items.slice(idx + 1)
            ];
      
            return {
                items: newArray
            };

        });
    };

    createElements = () => {
        const elements = this.state.items.map((item) => {
            return (
                <TableRow 
                    deleteItem =  {this.deleteItem}
                    key={item.id} 
                    data={item}/>    
            );
        });

        return elements;
    };

    render() {

        return (
            <React.Fragment>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th id="sortBrand" scope="col">Brand</th>
                            <th id="sortModel" scope="col">Model</th>
                            <th id="sortType" scope="col">Type</th>
                            <th id="sortId" scope="col">Id</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                        { this.createElements() }
                    </tbody>
                </table>
                <button onClick={() => document.getElementById('modal').classList.add('show')} 
                    className="addButton btn btn-success">Add a car</button>
                <Modal data = {this.state} saveChanges = {this.saveChanges} />
            </React.Fragment>
        );
    }
};
