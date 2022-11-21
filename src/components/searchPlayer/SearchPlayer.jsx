import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SearchPlayer = ({ player1Search }) => {
  const [searchPlayer, setSearchPlayer] = useState({});
  const [player, setPlayer] = useState({});
  const [playerId, setPlayerId] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.balldontlie.io/api/v1/players?search=${searchPlayer}`)
      .then(async (res) => {
        if ((res.data.data.length = 1 && res.data.data[0].id)) {
          setPlayer(res.data.data[0]);
          setPlayerId(res.data.data[0].id);
        }
      });
  }, [searchPlayer]);

  useEffect(() => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`
      )
      .then(async (res) => {
        console.log(res.data.data);
        await player1Search({
          playerDetails: player,
          stats: res.data.data[0],
        });
      });
  }, [player, player1Search, playerId]);

  const searchPlayerByName = (e) => {
    if (e.key === "Enter") setSearchPlayer(e.target.value);
    console.log(searchPlayer);
  };

  return (
    <div>
      <input type="text" onKeyDown={searchPlayerByName} />
    </div>
  );
};

export default SearchPlayer;
