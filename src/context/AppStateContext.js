import React, { createContext, useState } from "react";

export const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [showTools, setShowTools] = useState(false);
  const [day, setDay] = useState(1);
  const [money, setMoney] = useState(1000);
  const [eventsMessages, setEventsMessages] = useState([]);
  const [currentTown, setCurrentTown] = useState("Katowice");
  const [storage, setStorage] = useState(0);
  const [selectedMarketItem, setSelectedMarketItem] = useState(null);
  const [selectedInventoryItem, setSelectedInventoryItem] = useState(null);
  const [selectedInventoryTool, setSelectedInventoryTool] = useState(null);

  const calculateStorage = () => {
    let sum = 0;
    value.inventoryItems.forEach((item, i) => (sum += item.amount));
    setStorage(sum);
  };

  const value = {
    stats: {
      money: money,
      deposit: 0,
      prestige: 0,
      debt: 1000,
      condition: 100,
      storage: storage,
      storageMax: 1000,
      currentTown: currentTown,
      day: day,
    },

    showTools: {
      value: showTools,
      onClick: () => setShowTools(!showTools),
    },

    travel: {
      onClick: (event) => {
        setCurrentTown(event.nativeEvent.srcElement.childNodes[0].data);
        setDay(day + 1);
        calculateStorage();

        setEventsMessages(
          eventsMessages.concat(
            `Nastał nowy ${
              day + 1
            } dzień Twojej nędznej egzystencji w ${currentTown}`
          )
        );
      },
    },

    events: {
      eventsMessages: eventsMessages,
    },

    items: {
      setActiveItem: (id, isMarket, showTools) => {
        isMarket && setSelectedMarketItem(id);
        !isMarket & !showTools && setSelectedInventoryItem(id);
        !isMarket & showTools && setSelectedInventoryTool(id);
      },
      buyItems: (id, quantity) => {
        setMoney(money - quantity * 55);
        console.log("id:" + id + "quantity: " + quantity);
        // this.marketItems[id].amount -= quantity;
        // console.log("amount: " + this.marketItems[id].amount);
      },

      selectedMarketItem: selectedMarketItem,
      selectedInventoryItem: selectedInventoryItem,
      selectedInventoryTool: selectedInventoryTool,
    },

    namesItems: [
      "grass",
      "scun",
      "hash",
      "acid",
      "extasy",
      "speed",
      "heroine",
      "coca",
      "sugar",
      "mush",
    ],

    namesTools: [
      "Kurtka",
      "Torba",
      "Aktówka",
      "Fiat 126p",
      "Gnat",
      "Pestki do gnata",
      "Kałach",
      "Magazynek",
      "Granat",
      "Shunikan?",
    ],

    marketItems: [
      {
        id: 0,
        amount: 555,
        price: 47,
      },
      {
        id: 1,
        amount: 68,
        price: 36,
      },
      {
        id: 2,
        amount: 13,
        price: 25,
      },
      {
        id: 3,
        amount: 89,
        price: 14,
      },
      {
        id: 4,
        amount: 89,
        price: 14,
      },
      {
        id: 5,
        amount: 89,
        price: 14,
      },
      {
        id: 6,
        amount: 0,
        price: 14,
      },
      {
        id: 7,
        amount: 89,
        price: 14,
      },
      {
        id: 8,
        amount: 1,
        price: 14,
      },
      {
        id: 9,
        amount: 0,
        price: 14,
      },
    ],

    inventoryItems: [
      {
        id: 0,
        amount: 555,
        price: 47,
      },
      {
        id: 1,
        amount: 68,
        price: 36,
      },
      {
        id: 2,
        amount: 13,
        price: 25,
      },
      {
        id: 3,
        amount: 89,
        price: 14,
      },
      {
        id: 4,
        amount: 89,
        price: 14,
      },
      {
        id: 5,
        amount: 89,
        price: 14,
      },
      {
        id: 6,
        amount: 2,
        price: 14,
      },
      {
        id: 7,

        amount: 89,
        price: 14,
      },
      {
        id: 8,
        amount: 1,
        price: 14,
      },
      {
        id: 9,
        amount: 1,
        price: 14,
      },
    ],

    inventoryTools: [
      {
        id: 0,
        amount: 1,
        legal: true,
      },
      {
        id: 1,
        amount: 1,
        legal: true,
      },
      {
        id: 2,
        amount: 1,
        legal: true,
      },
      {
        id: 3,
        amount: 1,
        legal: true,
      },
      {
        id: 4,
        amount: 1,
        legal: false,
      },
      {
        id: 5,
        amount: 1,
        legal: false,
      },
      {
        id: 6,
        amount: 1,
        legal: false,
      },
      {
        id: 7,
        amount: 1,
        legal: false,
      },
      {
        id: 8,
        amount: 1,
        legal: false,
      },
      {
        id: 9,
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

// prices = {
//   "grass": (20, 29),
//   "scun": (30, 44),
//   "hash": (20, 29),
//   "acid": (20, 29),
//   "extasy": (15, 21),
//   "speed": (28, 44),
//   "heroine": (40, 59),
//   "coca": (100, 149),
//   "sugar": (40, 59),
//   "mush": (15, 21),
// }

// names: [
//   { id: 1, name: "grass" },
//   { id: 2, name: "scun" },
//   { id: 3, name: "hash" },
//   { id: 4, name: "acid" },
//   { id: 5, name: "extasy" },
//   { id: 6, name: "speed" },
//   { id: 7, name: "heroine" },
//   { id: 8, name: "coca" },
//   { id: 9, name: "sugar" },
//   { id: 10, name: "mush" },
// ],
