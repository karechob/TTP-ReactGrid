import React, { Component } from 'react';
import TableCell from './TableCell';

// Defining a class component named TableRow
class tableRow extends Component {
    constructor(props){
        super(props);
    }

render() {
    const { rowData } = this.props; // referencing the rowData prop

    //add row function
    addRow = () =>{
        for(let i=0; i <this.state.rows; i++){
            rows.push(1); 
            }
    }

    //update the grid


    return (
        // Rendered content is wrapped in a <tr> element representing a table row
        <tr>
            {rowData.map((cellData, cellIndex) => (
                // For each cellData, render a <td> element
                // Set the key attribute to cellIndex
                <td key={cellIndex}>{cellData}</td>
            ))}
        </tr>
    );
    }
}

export default tableRow;
