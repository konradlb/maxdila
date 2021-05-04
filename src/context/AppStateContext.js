import React, { createContext, useState } from "react";

export const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [showTools, setShowTools] = useState(false);

  const value = {
    stats: {
      money: 1000,
      deposit: 0,
      prestige: 0,
      debt: 1000,
      condition: 100,
      storage: 0,
      storageMax: 1000,
      currentTown: "Katowice",
      day: 1,
    },

    showTools: {
      value: showTools,
      onClick: () => setShowTools(!showTools),
    },

    marketItems: [
      {
        id: 1,
        name: "grzybki",
        amount: 555,
        price: 47,
      },
      {
        id: 2,
        name: "gras",
        amount: 68,
        price: 36,
      },
      {
        id: 3,
        name: "grzybki",
        amount: 13,
        price: 25,
      },
      {
        id: 4,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
    ],

    inventoryItems: [
      {
        id: 1,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 2,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 3,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 4,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 5,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
      {
        id: 6,
        name: "grzybki",
        amount: 89,
        price: 14,
      },
    ],

    inventoryTools: [
      {
        id: 1,
        name: "Kurtka",
        amount: 1,
        legal: true,
      },
      {
        id: 2,
        name: "Torba",
        amount: 1,
        legal: true,
      },
      {
        id: 3,
        name: "Aktówka",
        amount: 1,
        legal: true,
      },
      {
        id: 4,
        name: "Fiat 126p",
        amount: 1,
        legal: true,
      },
      {
        id: 5,
        name: "Gnat",
        amount: 1,
        legal: false,
      },
      {
        id: 6,
        name: "Pestki do gnata",
        amount: 1,
        legal: false,
      },
      {
        id: 7,
        name: "Kałach",
        amount: 1,
        legal: false,
      },
      {
        id: 8,
        name: "Magazynek",
        amount: 1,
        legal: false,
      },
      {
        id: 9,
        name: "Granat",
        amount: 1,
        legal: false,
      },
      {
        id: 10,
        name: "Shunikan?",
        amount: 1,
        legal: false,
      },
    ],
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
