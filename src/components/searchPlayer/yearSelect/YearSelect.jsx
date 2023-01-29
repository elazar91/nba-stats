import React, { useState } from "react";
import style from "./YearSelect.module.scss";

const YearSelect = ({ setYear }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1978 }, (_, i) => 1979 + i);

  const filteredYears = years.filter((y) => y.toString().includes(searchTerm));

  const handleSearch = (e) => {
    setShowOptions(true);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a year"
        value={searchTerm}
        onBlur={() => setTimeout(() => setShowOptions(false), 100)}
        onChange={handleSearch}
      />
      {showOptions && filteredYears.length > 0 && (
        <ul className={style.yearsList}>
          {filteredYears.map((y) => (
            <li
              key={y}
              className={style.selectYear}
              onClick={() => {
                setSearchTerm(y);
                setYear(y);
              }}
            >
              {y}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YearSelect;
