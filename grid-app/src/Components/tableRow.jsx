import React, { Component } from "react";
import TableCell from "./tableCell";

// Defining a class component named TableRow
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  //  addRow = () => {
  //     const {rows} = this.state;
  //     const newRows = [...rows, ''];
  //      for(let i=0; i <rows; i++){
  //         newRows.push('');
  //     }
  //     this.setState({
  //         rows: newRows
  //       })
  // }

  render() {
    const { rowNumber, rowData } = this.props; // Referencing the rowData prop
    console.log(rowData, "this is row data");

    return (
      <>
        <tr>
          {rowData.map((cellColor, cellIndex) => (
            <TableCell
              key={cellIndex}
              onClick={this.props.onClick}
              rowNumber={rowNumber}
              columnNumber={cellIndex}
              onMouseOver={this.props.onMouseOver}
              onMouseDown={this.props.onMouseDown}
              onMouseUp={this.props.onMouseUp}
              cellColor={cellColor}
            ></TableCell>
          ))}
        </tr>
      </>
    );
  }
}

export default TableRow;
