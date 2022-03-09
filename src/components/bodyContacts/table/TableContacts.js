import React from "react";
import RowHead from "./typeRows/RowHead";
import RowBody from "./typeRows/RowBody";

function TableContacts(props) {
  // List of heads to the contact list
  const headsTable = ["Name", "Last Name", "Phone Number"];

  return (
    <table id="table-data">
      <thead className="table-header">
        <RowHead heads={headsTable} />
      </thead>
      <tbody>
        <RowBody name="a" l_name="a" tel="a"></RowBody>
        <RowBody name="a" l_name="a" tel="a"></RowBody>
        <RowBody name="a" l_name="a" tel="a"></RowBody>
        <RowBody name="a" l_name="a" tel="a"></RowBody>
      </tbody>
    </table>
  );
}

export default TableContacts;
