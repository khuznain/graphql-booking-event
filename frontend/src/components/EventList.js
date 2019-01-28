import React from "react";

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event, i) => {
        return <li key={i}>{event.title}</li>;
      })}
    </ul>
  );
};

export default EventList;
