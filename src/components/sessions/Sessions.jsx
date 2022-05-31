import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./sessions.scss";
import PropTypes from "prop-types";

/**
 *@name Sessions
 * @description create the sessions graph chart. It has the userId and sessions. Sessions is an array of object with day and sessionlength.
 * @param {array} session
 * @param {string} day - the day of the week
 * @param {number} sessionLength - the length of the session in minutes
 * @returns {JSX.Element}
 */

const Sessions = ({ session }) => {
  return (
    <div className="sessions">
      <div className="sessions-title">
        <h2>
          Durée moyenne des <br />
          sessions
        </h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          outerRadius={90}
          data={session}
          margin={{
            top: 30,
            left: 5,
            right: 5,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="day"
            stroke="#fff"
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide={true} domain={["dataMin-10", "dataMax+10"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth="3"
            fill="#FF0D0D"
            activeDot={{ stroke: "#FF3333", strokeWidth: 6, r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 *@name CustomToolTip
 * @param {array} payload
 * @param {boolean} active
 * @returns {JSX.Element}
 */

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {payload[0].value}
          <span>min</span>
        </p>
      </div>
    );
  }
  return null;
}

//proptypes customTooltip
CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

//proptypes Sessions
Sessions.propTypes = {
  session: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};

export default Sessions;
