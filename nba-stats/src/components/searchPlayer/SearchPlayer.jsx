import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Dropdown from "./dropdown/Dropdown";
import style from "./SearchPlayer.module.scss";

const SearchPlayer = ({ setPlayers, players }) => {
  const [searchPlayer, setSearchPlayer] = useState({});
  const [player, setPlayer] = useState({});
  const [playerId, setPlayerId] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectYear, setSelectYear] = useState();
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

            // if (res.data.data[0]?.id) {
            //   setPlayer(res.data.data[0]);
            //   setPlayerId(res.data.data[0].id);
            // }
          }
        });
  }, [searchPlayer]);

  useEffect(() => {
    if (playerId)
      axios
        .get(
          `https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=${playerId}`
        )
        .then(async (res) => {
          console.log(res.data.data);
          await setPlayers([
            ...players,
            {
              playerDetails: player,
              stats: res.data.data[0],
            },
          ]);
        });
  }, [player, setPlayers, playerId, year]);

  const searchPlayerByName = (e) => {
    // console.log(searchPlayer);
    setSearchPlayer(e.target.value);
  };

  return (
    <div>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          if (e.target) {
            setSearchPlayer(e.target[0].value);
            setYear(Number(e.target[1].value));
          }
        }}
      >
        <div className={style.searchPlayer}>
          <input type="text" onChange={searchPlayerByName} />
          {playersList && (
            <Dropdown
              playersList={playersList}
              setSearchPlayer={setSearchPlayer}
            />
          )}
        </div>
        <input
          type="text"
          name="year"
          id="year"
          onChange={(e) => {
            if (
              e.target.value.length === 4 &&
              e.target.value > 1979 &&
              e.target.value <= year
            )
              setYear(Number(e.target.value));
          }}
        />
        <input type="submit" value="Submit!" />
      </form>
    </div>
  );
};

export default SearchPlayer;
