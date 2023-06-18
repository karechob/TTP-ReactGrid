import React, { Component } from 'react';
import tableRow from './tableRow';

class Table extends Component {
  constructor(props) {
    super(props);
    // Initialize state if needed
    this.state = {};
  }

  render() {
    const { tableData } = this.props;
     // Access the tableData prop

    return (
     //everything below is still being rendered
      <table> 
        <tbody> 
          {tableData.map((row, rowUpdate) => ( // Iterate over tableData to generate TableRow components
            <tableRow key={rowUpdate} rowMemory={row} /> // Render a TableRow component for each row with rowMemory as a prop
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
