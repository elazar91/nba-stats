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
          (typeof object[key] === "statNumber" && result[key] === undefined) ||
          object[key] > result[key]
        ) {
          result[key] = object[key];
        }
      }
      return result;
    }, {});
    setHighest(result);
    // console.log(highest);
  };

  return (
    <tr>
      <td className={Style.firstName}>
        {player?.playerDetails?.first_name} {player?.playerDetails?.last_name}
      </td>
      {Object.keys(player.stats).map((key, index) => {
        console.log({ key });
        console.log("value: ", player.stats[key]);
        return (
          <Stat
            key={index}
            highest={highest}
            player={player}
            statNumber={{ key: player.stats[key] }}
          />
        );
      })}
    </tr>
  );
};

export default Stats;
