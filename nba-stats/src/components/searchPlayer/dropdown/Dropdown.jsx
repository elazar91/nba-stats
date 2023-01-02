const Dropdown = ({ playersList }) => {
  return (
    <div>
      {playersList.map((player) => (
        <div>{player.first_name}</div>
      ))}
    </div>
  );
};

export default Dropdown;
