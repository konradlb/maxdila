import React from "react";
import { Table } from "react-bootstrap";

function ItemsTable({ items, showTools }) {
  const rows = items.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{showTools ? (item.legal ? "tak" : "nie") : item.price}</td>
    </tr>
  ));

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
