import React from "react";
import { useEffect, useState } from "react";
import Stat from "../stat/Stat";
import style from "./Stats.module.scss";

const Stats = ({ player, players }) => {
  const [highest, setHighest] = useState(false);

  useEffect(() => {
    players.sort((player) => player);
  }, []);

  return (
    <tr>
      <td>
        {player?.playerDetails?.first_name} {player?.playerDetails?.last_name}
      </td>
      <Stat number={player?.stats?.games_played} highest={highest} />
      <Stat number={player?.stats?.min} highest={highest} />
      <Stat number={player?.stats?.pts} highest={highest} />
      <Stat number={player?.stats?.fgm} highest={highest} />
      <Stat number={player?.stats?.fga} highest={highest} />
      <Stat number={player?.stats?.fg_pct} highest={highest} />
      <Stat number={player?.stats?.fg3m} highest={highest} />
      <Stat number={player?.stats?.fg3a} highest={highest} />
      <Stat number={player?.stats?.fg3_pct} highest={highest} />
      <Stat number={player?.stats?.ftm} highest={highest} />
      <Stat number={player?.stats?.fta} highest={highest} />
      <Stat number={player?.stats?.ft_pct} highest={highest} />
      <Stat number={player?.stats?.oreb} highest={highest} />
      <Stat number={player?.stats?.dreb} highest={highest} />
      <Stat number={player?.stats?.reb} highest={highest} />
      <Stat number={player?.stats?.ast} highest={highest} />
      <Stat number={player?.stats?.stl} highest={highest} />
      <Stat number={player?.stats?.blk} highest={highest} />
    </tr>
  );
};

export default Stats;
