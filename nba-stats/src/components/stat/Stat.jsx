import React from "react";

const Stat = ({ number, highest }) => {
  return (
    <>
      <td className={highest ? "highest" : ""}>{number}</td>
    </>
  );
};

export default Stat;
