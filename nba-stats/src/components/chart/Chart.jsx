import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart({ players }) {
  const [playersData, setPlayersData] = useState();
  const [selectedStat, setSelectedStat] = useState("pts");

  useEffect(() => {
    setPlayersData({
      labels: [selectedStat],
      datasets: players.map((player) => {
        return {
          label: `${player.playerDetails.first_name} ${player.playerDetails.last_name}`,
          data: [player.stats[selectedStat]],
          backgroundColor: `rgba(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255}, 0.7)`,
        };
      }),
    });
  }, [players, selectedStat]);

  const handleStatChange = (event) => {
    setSelectedStat(event.target.value);
  };

  return (
    <div>
      {playersData?.datasets.length > 0 && (
        <select onChange={handleStatChange}>
          <option value="pts">Points</option>
          <option value="games_played">Games played</option>
          <option value="fgm">Field goals made</option>
          <option value="fga">Field goals attempt</option>
          <option value="fg_pct">Field goals percentage</option>
          <option value="fg3m">Three-point field goals made</option>
          <option value="fg3a">Three-point field goals attempt</option>
          <option value="fg3_pct">Three-point field goals percentage</option>
          <option value="ftm">Free throws made</option>
          <option value="fta">Free throws attempt</option>
          <option value="ft_pct">Free throws Percentage</option>
          <option value="oreb">Offensive rebounds</option>
          <option value="dreb">Defensive rebounds</option>
          <option value="reb">Rebounds</option>
          <option value="ast">Assists</option>
          <option value="stl">Steals</option>
          <option value="blk">Blocks</option>
        </select>
      )}

      <div style={{ width: 700 }}>
        {playersData?.datasets.length > 0 && <Bar data={playersData} />}
      </div>
    </div>
  );
}

export default Chart;
