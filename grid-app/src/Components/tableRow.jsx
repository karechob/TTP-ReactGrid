import React, { Component } from 'react';
import TableCell from './tableCell';

// Defining a class component named TableRow
class TableRow extends Component {
    constructor(props){
        super(props);
        this.state={
            rows:[],
        }
    }

     addRow = () => {
        const {rows} = this.state;
         for(let i=0; i <rows; i++){
            rows.push(1); 
        }
    }


render() {
    const { rowData } = this.props; // referencing the rowData prop
    //add row function
    
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

export default TableRow;
