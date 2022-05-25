import React from "react";
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./score.scss";

const datacolor = [
  {
    fill: "none",
  },
];

const Score = ({ score }) => {
  // function to render value inside radial bar chart
  const renderLegend = () => {
    // const {payload } = props
    return (
      <div className="radialBarLegend">
        <span>{score}%</span>
        <p>
          de votre
          <br />
          objectif
        </p>
      </div>
    );
  };

  return (
    <div className="score">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={datacolor}
          startAngle={90}
          endAngle={(360 * score) / 100 + 90}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 2]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={300}
            background={{ fill: "#FF0101" }}
            Clockwise={false}
            dataKey={score}
            cornerRadius={10}
            circle
            cx="50%"
            cy="50%"
            r="80px"
          />

          <text
            x={30}
            y={33}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fontWeight={600}
          >
            Score
          </text>

          <Legend
            content={renderLegend}
            layout="horizontal"
            verticalAlign="middle"
            width={200}
            wrapperStyle={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "20px",
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;
