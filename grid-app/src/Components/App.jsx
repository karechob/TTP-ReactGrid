//App.jsx could maintain the state of the grid as well as the state of the selected color (stateful, class component)
import React, {Component} from 'react'

import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 1,
      column: 1,
      gridData: [],
      color: '',
    };
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
    