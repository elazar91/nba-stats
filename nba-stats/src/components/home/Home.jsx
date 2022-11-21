import React from "react";
import SearchPlayer from "../searchPlayer/SearchPlayer";
import Player from "../player/Player";
import { useState, useEffect } from "react";

export const Home = () => {
  const [player1, setPlayer1] = useState();

  useEffect(() => {
    console.log(player1);
  }, [player1]);

  return (
    <div>
      <SearchPlayer player1Search={setPlayer1} />
      <Player player1={player1} />
    </div>
  );
};
