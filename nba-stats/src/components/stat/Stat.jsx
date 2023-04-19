import { useEffect } from "react";
import { useState } from "react";
import Style from "./stat.module.scss";

const Stat = ({ statNumber, highest, player }) => {
  const [high, setHigh] = useState(false);

  useEffect(() => {
    Object.keys(highest).forEach((key) => {
      if (highest[key] === player[key]) setHigh(true);
    });
    console.log(statNumber);
  }, [highest, player, statNumber]);
  return (
    <>
      <td className={high ? Style.highest : ""}>{statNumber.key}</td>
    </>
  );
};

export default Stat;
