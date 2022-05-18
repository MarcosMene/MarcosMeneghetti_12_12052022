import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./performance.scss";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function Performance() {
  return (
    <div className="performance">
      <ResponsiveContainer className="performance">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="#fff" />
          {/* <PolarRadiusAxis /> */}
          <Radar name="Mike" dataKey="A" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
