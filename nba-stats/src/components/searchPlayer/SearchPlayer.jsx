import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import style from "./SearchPlayer.module.scss";
import YearSelect from "./yearSelect/YearSelect";
import PlayerSearch from "./playerSearch/PlayerSearch";

const SearchPlayer = ({ setPlayers, players }) => {
  const [searchPlayer, setSearchPlayer] = useState({});
  const [player, setPlayer] = useState();
  const [playerId, setPlayerId] = useState();
  const [year, setYear] = useState();
  const [playersList, setPlayersList] = useState();

  useEffect(() => {
    if (searchPlayer)
      axios
        .get(
          `https://www.balldontlie.io/api/v1/players?per_page=100&search=${searchPlayer}`
        )
        .then(async (res) => {
          console.log("Players list: ", res.data.data);
          if (res.data.data && res.data.data.length > 0) {
            setPlayersList(res.data.data);
          }
        });
  }, [searchPlayer]);

  // useEffect(() => {
  //   if (playerId && year)
  //     axios
  //       .get(
  //         `https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=${playerId}`
  //       )
  //       .then(async (res) => {
  //         console.log(res);
  //         await setPlayers([
  //           ...players,
  //           {
  //             playerDetails: player,
  //             stats: res.data.data[0],
  //           },
  //         ]);
  //       });
  //   // getPlayerData();
  // }, [player, setPlayers, playerId, year]);

  const getPlayerData = () => {
    console.log({ playerId, year });
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=${playerId}`
      )
      .then((res) => {
        console.log(res);
        setPlayers([
          ...players,
          {
            playerDetails: player,
            stats: res.data.data[0],
          },
        ]);
      });
  };

  return (
    <div>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          getPlayerData();
        }}
      >
        <div className={style.searchPlayer}>
          <PlayerSearch
            playersList={playersList}
            setPlayerId={setPlayerId}
            setSearchPlayer={setSearchPlayer}
            setPlayer={setPlayer}
          />
        </div>
        <YearSelect setYear={setYear} />
        <input type="submit" value="Submit!" />
      </form>
    </div>
  );
};

export default SearchPlayer;
