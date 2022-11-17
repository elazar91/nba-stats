import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SearchPlayer = ({ player1Search }) => {
  const [searchPlayer, setSearchPlayer] = useState({});
  const [playerId, setPlayerId] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.balldontlie.io/api/v1/players?search=${searchPlayer}`)
      .then(async (res) => {
        console.log(res.data.data);
        if ((res.data.data.length = 1 && res.data.data[0].id)) {
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
        player1Search({ playerName: searchPlayer, stats: res.data.data });
      });
  }, [playerId]);

  const searchPlayerByName = (e) => {
    setSearchPlayer(e.target.value);
    console.log(searchPlayer);
  };

  // const searchPlayer = () => {
  //   player1Search({ name: player, points: 6, rebounds: 4, assists: 1 });
  // };

  return (
    <div>
      <input type="text" onChange={searchPlayerByName} />
    </div>
  );
};

export default SearchPlayer;
