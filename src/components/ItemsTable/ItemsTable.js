import React from "react";
import { Table } from "react-bootstrap";

function ItemsTable({ items }) {
  const rows = items.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{item.price}</td>
    </tr>
  ));

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Koszt jednostkowy</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default ItemsTable;
