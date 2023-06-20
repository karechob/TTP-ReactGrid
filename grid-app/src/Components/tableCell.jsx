import React, { Component } from "react";

class TableCell extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    const {
      cellColor,
      rowNumber,
      columnNumber,
      onClick,
      onMouseDown,
      onMouseOver,
      onMouseUp
    } = this.props;

    console.log(this.props)
    return (
      <td
        className="table-cell"
        style={{ backgroundColor: cellColor }}
        //cellClick is from a parent component which is triggered when the td element is clicked(because of onClick)
        onClick={() => onClick(rowNumber, columnNumber)}
        //when the mouse is held down/pressed down on the td elem, 
        onMouseDown={() => onMouseDown(rowNumber, columnNumber)}
        //this below happens when the mouse is moving over the element
        onMouseOver={() => onMouseOver(rowNumber, columnNumber)}
        onMouseUp={() => onMouseUp()}
      >table cell</td>
    );
  }
}

export default TableCell;


