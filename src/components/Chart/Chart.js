import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.datas.map((data) => data.value);
  // const totalMax = Math.max(...dataValues);
  let totalMax = 0;

  for (let i = 0; i < dataValues.length; i++) {
    totalMax += dataValues[i];
  }
  console.log(totalMax);

  return (
    <div className="chart">
      {props.datas.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
