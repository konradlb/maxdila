import React, { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";

import { Table } from "react-bootstrap";

function ItemsTable({ items, showTools }) {
  const appState = useContext(AppStateContext);

  const rows = items.map(
    (item) =>
      item.amount > 0 && (
        <tr key={item.id}>
          <td>
            {showTools
              ? appState.namesTools[item.id]
              : appState.namesItems[item.id]}
          </td>
          <td>{item.amount}</td>
          <td>{showTools ? (item.legal ? "tak" : "nie") : item.price}</td>
        </tr>
      )
  );

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>{showTools ? "Legalny" : "Koszt jednostkowy"}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default ItemsTable;
