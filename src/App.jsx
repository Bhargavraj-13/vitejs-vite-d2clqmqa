// App.js
import React from "react";
import DestinationContainer from "./DestinationContainer";
import './App.css'; // Importing CSS for styling

const App = () => {
  return (
    <div className="app">
      <h1>Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
};

export default App;
