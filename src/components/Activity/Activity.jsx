import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./activity.scss";
import PropTypes from "prop-types";

/**
 *@description Create the activity graph chart. The sessions contains an array of objects with the following properties: day, kilogram, calories
 * @param {array} activity
 * @param {number} day
 * @param {number} kilogram
 * @param {number} calories
 * @returns {JSX.Element}
 */

const Activity = ({ activity }) => {
  return (
    <div className="dailyActivity">
      <div className="dailyActivity-title">
        <h2>Activité quotidienne</h2>
        <div className="dailyActivity-description">
          <div className="dailyActivity-text">
            <div className="dailyActivity-text-icon black"></div>
            <p>Poids (Kg)</p>
          </div>
          <div className="dailyActivity-text">
            <div className="dailyActivity-text-icon red"></div>
            <p>Calories brûlées (KCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer
        title="Durée moyenne des sessions"
        width="100%"
        height="100%"
      >
        <BarChart data={activity} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin-2", "dataMax+1"]}
            tickCount="3"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            // domain={[0, "dataMax+100"]}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 *@description a function that create a tool tip for the activity graph chart
 * @param {array} payload
 * @param {active} boolean
 * @returns {JSX.Element}
 */

//custom tooltip of BarChart
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip-activity">
        <p className="label">{`${payload[0].value}`}kg</p>
        <p className="label">{`${payload[1].value}`}KCal</p>
      </div>
    );
  }
  return null;
}

//proptypes of CustomTooltip
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

//proptypes of Activity
Activity.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

export default Activity;
