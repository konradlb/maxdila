import React, { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";

import { Table, Jumbotron } from "react-bootstrap";

function ItemsTable({ items, activeItem, showTools, isMarket }) {
  const appState = useContext(AppStateContext);

  const rows = items.map(
    (item) =>
      item.amount > 0 && (
        <tr
          className={activeItem === item.id ? "table-primary" : ""}
          key={item.id}
          onClick={() =>
            appState.items.setActiveItem(
              item.id,
              isMarket || false,
              showTools || false
            )
          }
        >
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
    <Jumbotron>
      <Table striped bordered hover>
        <caption>List of users</caption>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Ilość</th>
            <th>{showTools ? "Legalny" : "Koszt jednostkowy"}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Jumbotron>
  );
}

export default ItemsTable;
