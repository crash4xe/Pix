import { Component } from "react";

const places = ["Himalaya", "Kanyakumari", "Bombay"];

class List extends Component {
  render() {
    return (
      <ol>
        {places.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ol>
    );
  }
}

export default List;
