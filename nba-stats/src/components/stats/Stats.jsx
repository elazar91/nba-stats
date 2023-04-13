import React from "react";
import { useEffect, useState } from "react";
import Stat from "../stat/Stat";
import Style from "./Stats.module.scss";

const Stats = ({ player, players }) => {
  const [highest, setHighest] = useState({
    games_played: null,
    player_id: null,
    season: null,
    min: null,
    fgm: null,
    fga: null,
    fg3m: null,
    fg3a: null,
    ftm: null,
    fta: null,
    oreb: null,
    dreb: null,
    reb: null,
    ast: null,
    stl: null,
    blk: null,
    turnover: null,
    pf: null,
    pts: null,
    fg_pct: null,
    fg3_pct: null,
    ft_pct: null,
  });

  useEffect(() => {
    // console.log(Math.max(...players.map((player) => player?.stats.pts)));
    // console.log(players.map((player) => Object.keys(player.stats)));
    getMaxValues(players);
    // console.log(highest);
  }, [players]);

  const getMaxValues = (arr) => {
    const result = arr.reduce((result, obj) => {
      let object = obj.stats;
      for (let key in object) {
        if (
          (typeof object[key] === "number" && result[key] === undefined) ||
          object[key] > result[key]
        ) {
          result[key] = object[key];
        }
      }
      return result;
    }, {});
    setHighest(result);
    console.log(highest);
  };

  return (
    <tr>
      <td className={Style.firstName}>
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
