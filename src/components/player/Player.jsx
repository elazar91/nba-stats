import React from "react";
import Stats from "../stats/Stats";

const Player = ({ player1 }) => {
  console.log(player1);
  return (
    <table>
      <tr></tr>
      <tr>
        <Stats player1={player1} />
      </tr>
    </table>
  );
};

export default Player;
