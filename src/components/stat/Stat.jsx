import React from "react";

const Stat = ({ name, number }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{number}</div>
    </div>
  );
};

export default Stat;
