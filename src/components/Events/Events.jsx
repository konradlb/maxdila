import React, { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";

function Events() {
  const appState = useContext(AppStateContext);

  const events = appState.events.eventsMessages.map((eventMessage) => (
    <p key={eventMessage}>{eventMessage}</p>
  ));

  return (
    <>
      Wydarzenia Dzień:{appState.stats.day} Wyd: {events}
    </>
  );
}

export default Events;
