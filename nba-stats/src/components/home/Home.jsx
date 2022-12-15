import { useState, useEffect } from "react";
import SearchPlayer from "../searchPlayer/SearchPlayer";
import Player from "../player/Player";
import style from "./Home.module.scss";

export const Home = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div className={style.home}>
      <SearchPlayer setPlayers={setPlayers} players={players} />
      <Player players={players} />
    </div>
  );
};
