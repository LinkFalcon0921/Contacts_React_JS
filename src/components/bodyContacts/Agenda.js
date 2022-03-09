import React from "react";
import TableContacts from "./table/TableContacts";

function Agenda(props) {
  return (
    <div className="content">
      <input value={"Haz clic Aqui"} type="button"/>
      <TableContacts />
    </div>
  );
}

export default Agenda;
