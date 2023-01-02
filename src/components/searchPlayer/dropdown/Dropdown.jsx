import style from "./Dropdown.module.scss";

const Dropdown = ({ playersList, setSearchPlayer }) => {
  const selectPlayer = (e, id) => {
    const player = playersList.filter((player) => player.id === id);
    setSearchPlayer(player);
  };

  return (
    <div className={style.dropdown}>
      {playersList.map((player) => (
        <div
          key={player.id}
          className={style.selectPlayer}
          onClick={(e) => selectPlayer(e, player.id)}
        >
          {player.first_name} {player.last_name}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
