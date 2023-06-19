import React from 'react';
import TableRow from './tableRow';

const Table = ({ tableData, changeCellColor }) => {
  return (
    <table>
      <tbody>
        {tableData.map((rowData, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={rowData}
            changeCellColor={changeCellColor}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
