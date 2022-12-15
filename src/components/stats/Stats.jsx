import React from "react";
import Stat from "../stat/Stat";
import style from "./Stats.modules.scss";

const Stats = ({ player }) => {
  return (
    <>
      <tr>
        <td>
          {player?.playerDetails?.first_name} {player?.playerDetails?.last_name}
        </td>
        <Stat number={player?.stats?.games_played} />
        <Stat number={player?.stats?.min} />
        <Stat number={player?.stats?.pts} />
        <Stat number={player?.stats?.fgm} />
        <Stat number={player?.stats?.fga} />
        <Stat number={player?.stats?.fg_pct} />
        <Stat number={player?.stats?.fg3m} />
        <Stat number={player?.stats?.fg3a} />
        <Stat number={player?.stats?.fg3_pct} />
        <Stat number={player?.stats?.ftm} />
        <Stat number={player?.stats?.fta} />
        <Stat number={player?.stats?.ft_pct} />
        <Stat number={player?.stats?.oreb} />
        <Stat number={player?.stats?.dreb} />
        <Stat number={player?.stats?.reb} />
        <Stat number={player?.stats?.ast} />
        <Stat number={player?.stats?.stl} />
        <Stat number={player?.stats?.blk} />
      </tr>
    </>
  );
};

export default Stats;
