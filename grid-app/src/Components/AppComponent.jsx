import React, { Component } from 'react';
import Table from './table';
import TableRow from './tableRow'
import TableCell from './tableCell';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows:1, column:1,
      gridData: [['']], // array representing the grid
      selectedColor: '#788BE8', // the selected color
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
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.clearAllCells = this.clearAllCells.bind(this);
    this.colorAllCells = this.colorAllCells.bind(this);
    this.colorUncolorCells =  this.colorUncolorCells.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
 
  }

  
  //adding a row to the grid
  //this.addRow is refered to a hander aka anything that modifies the state
  addRow = () => {
    //prevState is before the state is altered. u can update as you go along the code with this
    this.setState(prevState => {
      //here, gridData means before the grid is altered
      const { gridData } = prevState;
      const newRow = Array(gridData[0].length).fill(''); // Create a new row with empty cells
      const updatedGridData = [...gridData, newRow]; // Add the new row to the gridData array
      console.log(newRow);
      return {
        rows: updatedGridData.length,
        // another way of doing ^ rows: prevState.rows+1, //this will add 1 to the array
        gridData: updatedGridData, //since the before array has been changed, this will update the grid
      };
    });
  };

  //adding new column to the grid
  addColumn = () => {
    this.setState(prevState => {
      const { gridData } = prevState;
      const updatedGridData = gridData.map(row => [...row, '']); // Add an empty cell to each row
      console.log(updatedGridData);
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
      const updatedGridData = gridData.map(row => [...row]); //this clones gridData
      //this below will update the grid and the color of the row and cell with the users selected color
      console.log(updatedGridData, rowIndex, cellIndex, selectedColor)
      updatedGridData[rowIndex][cellIndex] = selectedColor;
      return {
        gridData: updatedGridData, //returns the updated gridData
      };
    });
  };

  onMouseDown(rowNumber, columnNumber) {
    this.setState({
      isDragging: true, //isDragging would be true since we are pressing down the mouse
      startCell: [rowNumber, columnNumber] //startCell would have the value of the current cell that is being pressed down
    })
  }
  onMouseUp() {
    this.setState({
      isDragging: false, //isDragging would be false since we are pressing down the mouse
    })
  }

  //
  onClick(rowNumber, columnNumber) {
    //selectedColor

    this.changeCellColor(rowNumber, columnNumber) 

  }
  
  onMouseOver(rowNumber, columnNumber) {
    
    if(this.state.isDragging===true){
      //call the method because everything about moving arouond mouse is already there
      this.changeCellColor(rowNumber, columnNumber);
    }
  }
  
  colorUncolorCells() {
    const grid = this.state.gridData;
    const color = this.state.selectedColor;

    const updatedGrid = grid.map((row) =>
      row.map((cell) => {
        if (cell === "" || cell === "transparent") return color;
        return cell;
      })
    );
    
    this.setState({ gridData: updatedGrid });
  }

  // Method to color all cells with the selected color
  colorAllCells() {
    const grid = this.state.gridData;
    const color = this.state.selectedColor;

    const updatedGrid = grid.map(function (row) {
      const updatedRow = row.map(function () {
        return color;
      });

      return updatedRow;
    });

    this.setState({
      gridData: updatedGrid,
    });
  }

  // Method to clear the color of all cells
  clearAllCells() {
    const grid = this.state.gridData;
    const color = "transparent";
    const updatedGrid = grid.map((row) =>
      row.map((cell) => {
        if (cell !== "transparent") return color;
        return cell;
      })
    );
    this.setState({
      gridData: updatedGrid,
    });
  }


  render() {
    const { gridData, selectedColor } = this.state;

    return (
      <div className="app-container">
        <h1 className='title'>Grid</h1>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeColumn}>Remove Column</button>
        <button onClick={this.colorAllCells}>Color All Cells</button>
        <button onClick={this.clearAllCells}>Clear All Cells</button>
        <button onClick={this.colorUncolorCells}>Color Rest of Cells</button>
        <p className="color-picker">
        ☆ Pick a Color<input type="color" value={selectedColor} onChange={this.selectColor}/>☆
        </p>
        
        <div className='grid'>
        <Table
            tableData={gridData} 
            onClick={this.onClick} 
            onMouseDown={this.onMouseDown} 
            onMouseOver={this.onMouseOver} 
            changeCellColor={this.changeCellColor}
            onMouseUp={this.onMouseUp} 
            />
         </div>
      </div>
    );
  }
}

export default AppComponent;