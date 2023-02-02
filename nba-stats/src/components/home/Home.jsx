import { useState, useEffect } from "react";
import SearchPlayer from "../searchPlayer/SearchPlayer";
import Player from "../player/Player";
import style from "./Home.module.scss";
import Chart from "../chart/Chart";

export const Home = () => {
  const [players, setPlayers] = useState([]);

  return (
    <div className={style.home}>
      <SearchPlayer setPlayers={setPlayers} players={players} />
      <Player players={players} />
      {players && <Chart players={players} />}
    </div>
  );
};
