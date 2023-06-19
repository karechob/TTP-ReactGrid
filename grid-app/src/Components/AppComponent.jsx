import React, { Component } from 'react';
import Table from './table';
import tableRow from './tableRow'
import TableCell from './tableCell';
// import './App.css';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row:1, column:1,
      gridData: [['']], // array representing the grid
      selectedColor: '', // the selected color
    };
  }

  addRow = () => {
    //prevState is before the state is altered
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

  addColumn = () => {
    this.setState(prevState => {
      const { gridData } = prevState;
      const updatedGridData = gridData.map(row => [...row, '']); // Add an empty cell to each row
      return {
        gridData: updatedGridData,
      };
    });
  };

  removeRow = () => {
    this.setState(prevState => {
      const { gridData } = prevState;
      if (gridData.length > 1 || prevState.rows>1) {
        const updatedGridData = gridData.slice(0, -1); // Remove the last row from gridData
        return {
          rows: prevState.rows-1, //This decreases the number of rows by 1
          gridData: updatedGridData,
        };
      }
      return null;
    });
  };

  removeColumn = () => {
    this.setState(prevState => {
      const { gridData } = prevState;
      if (gridData[0].length > 1) {
        const updatedGridData = gridData.map(row => row.slice(0, -1)); // Remove the last column from each row
        return {
          gridData: updatedGridData,
        };
      }
      return null;
    });
  };

  selectColor = event => {
    const selectedColor = event.target.value;
    this.setState({ selectedColor });
  };

  changeCellColor = (rowIndex, cellIndex) => {
    this.setState(prevState => {
      const { gridData, selectedColor } = prevState;
      const updatedGridData = [...gridData];
      updatedGridData[rowIndex][cellIndex] = selectedColor;
      return {
        gridData: updatedGridData,
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