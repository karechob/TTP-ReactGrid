
import React, { Component } from 'react'

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 1, //number of rows in starting point of grid
      column: 1,//number of columns in starting point of grid
      gridData: [], //array / data representing the grid
      color: '', //the color that is selected
    };
  }

  addRow = () => {
    this.setState((prevState) => {
      // Create a new row with the same number of columns as the existing rows
      const newRow = Array(prevState.column).fill('');

      // Add the new row to the existing grid data
      const updatedGridData = [...prevState.gridData, newRow];

      return {
        rows: prevState.rows + 1, // increment the number of rows by 1
        gridData: updatedGridData, // update the grid data with the new row
      };
    });
  };

  removeRow = () => {
    this.setState((prevState) => {
      const updatedGridData = [...prevState.gridData];
      if(prevState.rows>1){
        return {
          rows: prevState.rows-1,
          gridData: updatedGridData
        }
      } else {
        return null;
      }
    })
  }

  addColumn = () => {
    this.setState((prevState) => {
      const newColumn = Array(prevState.column).fill('')
      const updatedGridData = [...prevState.gridData, newColumn]
      
        return{
          column: prevState.column +1,
          gridData: updatedGridData
        }
    })
  }

  removeColumn = () =>{
    this.setState((prevState) => {
      const updatedGridData = [...prevState.gridData]

        if(prevState.column>1){ 
        return {
            column: prevState.column-1,
            gridData: updatedGridData
          }
        } else{
          return null;
      }
    })
  }

  maintenance = () => {
    const { rows, column } = this.state;
    const gridData = Array(rows).fill().map(() => Array(column).fill(""));
    this.setState({ gridData });
    //created two different arrays ( rows, column)
  };

  render() {
    return (
      <div>
        {/* Render your component's content here */}
        <p>Number of rows: {this.state.rows}</p>
        <p>Number of columns: {this.state.column}</p>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.removeRow}>Delete Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeColumn}>Delete Column</button>
      </div>
    );
  }
}

export default Grid;
