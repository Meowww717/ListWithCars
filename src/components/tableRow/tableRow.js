import React, {Component} from 'react';
import './tableRow.css';


export default class TableRow extends Component {

    render() {
        
        const { brand, model, type, id }  = this.props.data;

        const deleteItem = (id) => { 
            return () => {this.props.deleteItem(id);}
        }

        return (
            <tr className="table-light">
                <th scope="row">{brand}</th>
                <td>{model}</td>
                <td>{type}</td>
                <td>{id}</td>
                <td>
                    <div className="deleteIcon">
                        <button className="btn btn-link" id={`${id}`} onClick={deleteItem(id)}><img src="delete.svg"/></button>
                    </div>
                </td>
            </tr>
        );
    }

};
