import React from "react";

const TableHead = props => {
  // console.log(props.columns);

  const { columns } = props;
  return (
    <>
      <thead className="table-primary text-center">
        <tr>
          {columns.map(it => {
            return <td key={it.label || it.key}>{(it.label)?it.label:null}</td>;
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
