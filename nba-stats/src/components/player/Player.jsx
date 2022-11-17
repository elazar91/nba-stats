import React from "react";
import Stats from "../stats/Stats";

const Player = ({ player1 }) => {
  return (
    <div>
      <div>{player1?.playerName?.first_name}</div>
      <Stats player1={player1?.stats} />
    </div>
  );
};

export default Player;
