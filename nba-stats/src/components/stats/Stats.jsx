import React from "react";
import Stat from "../stat/Stat";

const Stats = ({ player1 }) => {
  return (
    <>
      <tr>
        <td>name</td>
        <td>points</td>
        <td>rebounds</td>
        <td>assist</td>
      </tr>
      <tr>
        <td>
          {player1?.playerDetails?.first_name}{" "}
          {player1?.playerDetails?.last_name}
        </td>
        <Stat number={player1.stats?.pts} />
        <Stat number={player1.stats?.reb} />
        <Stat number={player1.stats?.ast} />
      </tr>
    </>
  );
};

export default Stats;
