import React from "react";
import Stats from "../stats/Stats";

const Player = ({ players }) => {
  return (
    <table cellSpacing="0" border="1">
      <tbody>
        <tr>
          <th>name</th>
          <th>GP</th>
          <th>MIN</th>
          <th>PTS</th>
          <th>FGM</th>
          <th>FGA</th>
          <th>FG%</th>
          <th>3PM</th>
          <th>3PA</th>
          <th>3P%</th>
          <th>FTM</th>
          <th>FTA</th>
          <th>FT%</th>
          <th>OREB</th>
          <th>DREB</th>
          <th>REB</th>
          <th>AST</th>
          <th>STL</th>
          <th>BLK</th>
        </tr>
        {players?.length >= 0
          ? players?.map((player) => <Stats key={player?.id} player={player} />)
          : null}
      </tbody>
    </table>
  );
};

export default Player;
