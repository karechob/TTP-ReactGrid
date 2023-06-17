import React, { Component } from 'react';
import TableCell from './TableCell';

// Defining a class component named TableRow
class TableRow extends Component {
    render() {
        const { rowData } = this.props; // referencing the rowData prop

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
