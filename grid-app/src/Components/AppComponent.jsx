import React, { Component } from 'react';
import Table from './table';
import TableRow from './tableRow';
import TableCell from './tableCell';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 1,
      columns: 1,
      gridData: [['']],
      selectedColor: '',
    };
  }

  addRow = () => {
    this.setState(prevState => {
      const { gridData, columns } = prevState;
      const newRow = Array(columns).fill('');
      const updatedGridData = [...gridData, newRow];
      return {
        gridData: updatedGridData,
      };
    });
  };

  addColumn = () => {
    this.setState(prevState => {
      const { gridData, rows } = prevState;
      const updatedGridData = gridData.map(row => [...row, '']);
      return {
        gridData: updatedGridData,
      };
    });
  };

  removeRow = () => {
    this.setState(prevState => {
      const { gridData } = prevState;
      if (gridData.length > 1) {
        const updatedGridData = gridData.slice(0, -1);
        return {
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
        const updatedGridData = gridData.map(row => row.slice(0, -1));
        return {
          gridData: updatedGridData,
        };
      }
      return null;
    });
  };

  render() {
    const {gridData} = this.state;

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeColumn}>Remove Column</button>
        <Table tableData={this.state.gridData} />
      </div>
    );
  }
}

export default AppComponent;
