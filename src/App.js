import React from "react";
import Header from "./components/Header";
import SwipButtons from "./components/SwipButtons";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    //BEM class CSS Style
    <div className="app">
      {/**Header */}
      <Header />
      {/**Tinder Cards */}
      <TinderCards />
      {/**SwipeButtons */}
      <SwipButtons />
    </div>
  );
}

export default App;
