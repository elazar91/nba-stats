import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart({ playersData }) {
  console.log(playersData);
  return (
    <div style={{ width: 700 }}>
      {playersData && <Bar data={playersData} />}
    </div>
  );
}

export default Chart;
