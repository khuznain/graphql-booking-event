import React, { Component } from "react";
import { Query } from "react-apollo";
import EventList from "../components/EventList";
import { GET_EVENTS } from "../queries/events";

class Event extends Component {
  state = {};
  render() {
    return (
      <Query query={GET_EVENTS}>
        {({ loading, error, data }) => {
          if (error) return <p>Error</p>;
          if (loading || !data) return <p>loading</p>;

          return <EventList events={data.events} />;
        }}
      </Query>
    );
  }
}

export default Event;
