import { useState, useEffect } from "react";
import SearchPlayer from "../searchPlayer/SearchPlayer";
import Player from "../player/Player";
import style from "./Home.module.scss";
import Chart from "../chart/Chart";

export const Home = () => {
  const [players, setPlayers] = useState([]);
  const [playersData, setPlayersData] = useState();

  useEffect(() => {
    console.log({ playersData });
    setPlayersData({
      labels: ["points"],
      datasets: players.map((player) => {
        return {
          label: `${player.playerDetails.first_name} ${player.playerDetails.last_name}`,
          data: [player.stats.pts],
          backgroundColor: `rgba(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255}, 0.7)`,
        };
      }),
    });
  }, [players]);

  return (
    <div className={style.home}>
      <SearchPlayer setPlayers={setPlayers} players={players} />
      <Player players={players} />
      {players && <Chart playersData={playersData} />}
    </div>
  );
};
