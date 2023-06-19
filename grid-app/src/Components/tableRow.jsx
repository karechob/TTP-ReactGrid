import React from 'react';
import TableCell from './tableCell';

const TableRow = ({ rowIndex, rowData, changeCellColor }) => {
  return (
    <tr>
      {rowData.map((cellData, cellIndex) => (
        <TableCell
          key={cellIndex}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          cellData={cellData}
          changeCellColor={changeCellColor}
        />
      ))}
    </tr>
  );
};

export default TableRow;
