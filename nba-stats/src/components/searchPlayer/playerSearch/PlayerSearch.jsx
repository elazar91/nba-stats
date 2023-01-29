import React, { useState } from "react";
import style from "./PlayerSearch.module.scss";

const PlayerSearch = ({
  playersList,
  setPlayerId,
  setSearchPlayer,
  setPlayer,
}) => {
  const [query, setQuery] = useState();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <input
        type="text"
        placeholder="Search for a player"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setSearchPlayer(event.target.value);
          setShowOptions(true);
        }}
      />
      {playersList?.length > 0 && showOptions && (
        <ul className={style.playersList}>
          {playersList?.map((player) => (
            <li
              key={player.id}
              value={player.id}
              className={style.selectPlayer}
              onClick={() => {
                setPlayerId(player.id);
                setPlayer(player);
                setQuery(`${player.first_name} ${player.last_name}`);
                setShowOptions(false);
              }}
            >
              {player.first_name} {player.last_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PlayerSearch;
