import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Text,
  ResponsiveContainer,
} from "recharts";
import "./performance.scss";
import PropTypes from "prop-types";

/**
 * @name Performance
 *@description create the activity graph chart
 * @param {array} performance
 * @param {number} kind //kind of value(cardio, energy, endurance, strength, speed, intensity)
 * @param {number} value
 * @returns {JSX.Element}
 */

const Performance = ({ performances }) => {
  return (
    <div className="performance">
      <ResponsiveContainer
        className="performance"
        title="Intensité"
        width="100%"
        height="100%"
      >
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="100%"
          data={performances}
          margin={{ top: 25, bottom: 25, left: 40, right: 40 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickline={false}
            stroke="#fff"
            // cx="50%"
            // cy="50%"
            tick={(props) => renderPolarAngleAxis(props)}
            // tick={{ fontSize: 12 }}
          />

          <Radar
            name="performance"
            dataKey="value"
            fill="#ff0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 *@description display position of words (cardio, energy, endurance, strength, speed, intensity) in the radar chart
 * @param {number} payload
 * @param {number} x
 * @param {number} y
 * @param {number} cx
 * @param {number} cy
 * @returns {JSX.Element}
 */

function renderPolarAngleAxis({ payload, x, y, cx, cy }) {
  return (
    <Text
      verticalAnchor="middle"
      y={y + (y - cy) / 8}
      x={x + (x - (cx + 100)) / 6}
      style={{ fill: "rgba(255, 255, 255)", fontSize: 12 }}
    >
      {payload.value}
    </Text>
  );
}

//proptypes for readerPolarAngleAxis
renderPolarAngleAxis.propTypes = {
  payload: PropTypes.object.isRequired,
};

//propTypes for Performance

Performance.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.number,
      value: PropTypes.number,
    })
  ),
};

export default Performance;
