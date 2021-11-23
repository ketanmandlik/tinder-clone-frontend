import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios";

import "./TinderCards.css";

function TinderCards() {
  const [lastDirection, setLastDirection] = useState("");
  const [people, setPeople] = useState([]);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing : ", +nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log("Left the Screen : ", +name);
  };

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }

    fetchData();
  }, []);

  return (
    <div className="tindersCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3 style={{ color: "#FFF" }}>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
