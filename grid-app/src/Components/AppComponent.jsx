import React, { Component } from 'react';
import Table from './table';
import TableRow from './tableRow'
import TableCell from './tableCell';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row:1, column:1,
      gridData: [['']], // array representing the grid
      selectedColor: '', // the selected color
      isDragging: false, // Flag to indicate if dragging is in progress
      startCell: null, // Starting cell for dragging
    };
  
    // Binding event handlers
    this.addRow = this.addRow.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
    this.changeCellColor = this.changeCellColor.bind(this);
  }

  
  //adding a row to the grid
  addRow = () => {
    //prevState is before the state is altered. u can update as you go along the code with this
    this.setState(prevState => {
      //here, gridData means before the grid is altered
      const { gridData } = prevState;
      const newRow = Array(gridData[0].length).fill(''); // Create a new row with empty cells
      const updatedGridData = [...gridData, newRow]; // Add the new row to the gridData array
      return {
        rows: prevState.rows+1, //this will add 1 to the array
        gridData: updatedGridData, //since the before array has been changed, this will update the grid
      };
    });
  };

  //adding new column to the grid
  addColumn = () => {
    this.setState(prevState => {
      const { gridData } = prevState;
      const updatedGridData = gridData.map(row => [...row, '']); // Add an empty cell to each row
      return {
        gridData: updatedGridData,
      };
    });
  };

  //remove the last row from the grid
  removeRow = () => {
    this.setState(prevState => {
      const { gridData } = prevState;
      if (gridData.length > 1 || prevState.rows>1) { //check if grid has more than one row or if the prevState has more than 1
        const updatedGridData = gridData.slice(0, -1); // Remove the last row from gridData
        return {
          rows: prevState.rows-1, //This decreases the number of rows by 1
          gridData: updatedGridData,
        };
      }
      return null; //if there's one row or the number of rows is already one
    });
  };

  //remove last column from grid
  removeColumn = () => {
    this.setState(prevState => { //this makes state into prevState
      const { gridData } = prevState; 
      if (gridData[0].length > 1) {  //checks if the grid has more than one column
        const updatedGridData = gridData.map(row => row.slice(0, -1)); // Remove the last column from each row
        return {
          gridData: updatedGridData,
        };
      } else{
      return null; //if there's only one column
      }
    });
  };

  //when the user picks a new color, change the selected color to the one the user wants
  selectColor = event => {
    const selectedColor = event.target.value;
    this.setState({ selectedColor });
  };


  changeCellColor = (rowIndex, cellIndex) => {
    this.setState(prevState => { //updates state using prevState
      const { gridData, selectedColor } = prevState; //
      const updatedGridData = [...gridData]; //this creates a copy of the gridData
      //this below will update the grid and the color of the row and cell with the users selected color
      updatedGridData[rowIndex][cellIndex] = selectedColor;
      return {
        gridData: updatedGridData, //returns the updated gridData
      };
    });
  };

  render() {
    const { gridData, selectedColor } = this.state;

    return (
      <div className="app-container">
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeColumn}>Remove Column</button>
        <input type="color" value={selectedColor} onChange={this.selectColor} />
        <Table tableData={gridData} changeCellColor={this.changeCellColor} />
      </div>
    );
  }
}

export default AppComponent;