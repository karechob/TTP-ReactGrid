//App.jsx could maintain the state of the grid as well as the state of the selected color (stateful, class component)
import React, {Component} from 'react'

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
  this.setState.apply((prevState)=>{ //with prevState u can access the state before updates and make changes based on that
    //this below adds an empty cell to each row. ...row makes a copy of the array, and the '' adds an empty string
    const updateGrid = prevState.gridData.map((row) => [...row, '']);
      return {
        rows: prevState.rows+1, //increment the number of rows by 1
        //the ...prevState refers to the array from the original array, before it was edited
        gridData: [...prevState,gridData, newRow] //adds the new row to the gridData
      }
  })
}

  maintenance = () => {
    const { rows, column } = this.state;
    const gridData = Array(rows).fill().map(() => Array(column).fill(""));
    this.setState({ gridData });
    //created two different arrawys ( rows, column)
  };
}

// App.jsx could have methods (bound event handler functions) on the class which will be passed down to children components via props (the children components, presentational components, will have event listeners that will fire off the bound event handler functions

//     App.jsx could render the dropdown menu as well as the Table Component (presentational component)
    