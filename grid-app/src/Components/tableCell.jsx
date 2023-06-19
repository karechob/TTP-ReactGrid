import React from 'react';

const TableCell = ({ rowIndex, cellIndex, cellData, changeCellColor }) => {
  return (
    <td
      style={{ backgroundColor: cellData }}
      onClick={() => changeCellColor(rowIndex, cellIndex)}
    >
      {cellData}
    </td>
  );
};

export default TableCell;
