import React from "react";
import Stat from "../stat/Stat";

const Stats = ({ player1 }) => {
  return (
    <div>
      <Stat name="points" number={player1?.pts} />
      <Stat name="rebounds" number={player1?.reb} />
      <Stat name="assist" number={player1?.ast} />
    </div>
  );
};

export default Stats;
