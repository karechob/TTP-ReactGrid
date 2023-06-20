import React from "react";
import TableRow from "./tableRow";

// The Table component receives two props: tableData and changeCellColor
const Table = ({
  tableData,
  changeCellColor,
  onClick,
  onMouseDown,
  onMouseOver,
  onMouseUp,
}) => {
  return (
    <>
      <table>
        <tbody>
          {/* Iterate over the tableData array */}
          {tableData.map((rowData, rowIndex) => (
            <TableRow
              // Assign a unique key to each TableRow component
              key={rowIndex}
              // Pass the rowIndex as a prop to the TableRow component
              rowNumber={rowIndex}
              // Pass the rowData as a prop to the TableRow component
              rowData={rowData}
              // Pass the changeCellColor function as a prop to the TableRow component
              changeCellColor={changeCellColor}
              onClick={onClick}
              onMouseDown={onMouseDown}
              onMouseOver={onMouseOver}
              onMouseUp={onMouseUp}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
//props allow a function from the parent 'Table' component to its child TablowRow components,
//allowing them to communicate and trigger actions in the parent component
export default Table;
