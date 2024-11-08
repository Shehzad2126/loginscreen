// import styled from "styled-components";
// import { IoIosArrowDown } from "react-icons/io";
// import PropTypes from "prop-types";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "S", projects: 4, tasks: 1 },
//   { name: "M", projects: 15, tasks: 10 },
//   { name: "T", projects: 0, tasks: 0 },
//   { name: "W", projects: 20, tasks: 14 },
//   { name: "T", projects: 6, tasks: 4 },
//   { name: "F", projects: 12, tasks: 10 },
//   { name: "S", projects: 9, tasks: 7 },
// ];

// // Styled Components
// const ChartContainer = styled.div`
//   max-width: 100%;
//   padding: 8px 16px;
//   background-color: white;
//   border: 1px solid #e5e7eb;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 8px;
// `;

// const Title = styled.h3`
//   font-size: 0.75rem;
//   font-weight: 600;
//   color: #1f2937;
// `;

// const Subtitle = styled.p`
//   font-size: 0.75rem;
//   color: #6b7280;
// `;

// const CustomTooltipContainer = styled.div`
//   padding: 8px;
//   background-color: #fff;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const CustomTooltipRow = styled.div`
//   display: flex;
//   align-items: center;
//   color: ${(props) => props.color};
//   margin-top: ${(props) => (props.isFirst ? "0" : "4px")};

//   span {
//     display: inline-block;
//     width: 8px;
//     height: 8px;
//     background-color: ${(props) => props.color};
//     border-radius: 50%;
//     margin-right: 5px;
//   }

//   p {
//     font-size: 0.875rem;
//   }
// `;

// // Custom Tooltip to show both tasks and projects
// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const taskData = payload.find((item) => item.dataKey === "tasks");
//     const projectData = payload.find((item) => item.dataKey === "projects");

//     return (
//       <CustomTooltipContainer>
//         {taskData && (
//           <CustomTooltipRow color="#10898F" isFirst>
//             <span></span>
//             <p>{`${taskData.value} Tasks`}</p>
//           </CustomTooltipRow>
//         )}
//         {projectData && (
//           <CustomTooltipRow color="#C72C88">
//             <span></span>
//             <p>{`${projectData.value} Projects`}</p>
//           </CustomTooltipRow>
//         )}
//       </CustomTooltipContainer>
//     );
//   }
//   return null;
// };

// // Prop validation for CustomTooltip
// CustomTooltip.propTypes = {
//   active: PropTypes.bool,
//   payload: PropTypes.array,
// };

// const ActivityChart = () => (
//   <ChartContainer>
//     <Header>
//       <Title>Activity</Title>
//       <Subtitle>
//         <div className="flex items-center">
//           This Week
//           <IoIosArrowDown />
//         </div>
//       </Subtitle>
//     </Header>
//     <ResponsiveContainer width="100%" height={110}>
//       <LineChart
//         data={data}
//         margin={{ top: 0, right: 0, left: -35, bottom: 1 }}
//       >
//         <CartesianGrid vertical={true} horizontal={false} stroke="#e0e0e0" />
//         <XAxis
//           dataKey="name"
//           tickLine={false}
//           axisLine={false}
//           tick={{ fill: "#6B7280" }}
//         />
//         <YAxis
//           domain={[10, 30]}
//           ticks={[10, 20, 30]}
//           tickFormatter={(value) => value / 10}
//           axisLine={false}
//           tickLine={false}
//           tick={{ fill: "#6B7280" }}
//         />
//         <Tooltip content={<CustomTooltip />} />
//         <Line
//           type="linear"
//           dataKey="projects"
//           stroke="#C72C88"
//           strokeWidth={2}
//           dot={(props) =>
//             props.payload === props.activeDot
//               ? { r: 5, fill: "#fff", strokeWidth: 2, stroke: "#C72C88" }
//               : false
//           }
//           activeDot={{
//             r: 5,
//             strokeWidth: 1,
//             fill: "#C72C88",
//             stroke: "#fff",
//           }}
//         />
//         <Line
//           type="linear"
//           dataKey="tasks"
//           stroke="#10898F"
//           strokeWidth={2}
//           dot={(props) =>
//             props.payload === props.activeDot
//               ? { r: 5, fill: "#fff", strokeWidth: 2, stroke: "#10898F" }
//               : false
//           }
//           activeDot={{
//             r: 5,
//             strokeWidth: 3,
//             fill: "#10898F",
//             stroke: "#fff",
//           }}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   </ChartContainer>
// );

// export default ActivityChart;

// ActivityChart.propTypes = {
//   activeDot: PropTypes.object,
//   payload: PropTypes.array,
// };
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "S", projects: 4, tasks: 1 },
  { name: "M", projects: 15, tasks: 10 },
  { name: "T", projects: 0, tasks: 0 },
  { name: "W", projects: 20, tasks: 14 },
  { name: "T", projects: 6, tasks: 4 },
  { name: "F", projects: 12, tasks: 10 },
  { name: "S", projects: 9, tasks: 7 },
];

// Styled Components
const ChartContainer = styled.div`
  max-width: 100%;
  padding: 0px 10px;
  background-color: white;
  border: 1px solid #e5e7eb;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Title = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: #1f2937;
`;

const Subtitle = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
`;

const CustomTooltipContainer = styled.div`
  padding: 8px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CustomTooltipRow = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  margin-top: ${(props) => (props.isFirst ? "0" : "4px")};

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin-right: 5px;
  }

  p {
    font-size: 0.875rem;
  }
`;

// Custom Tooltip to show both tasks and projects
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const taskData = payload.find((item) => item.dataKey === "tasks");
    const projectData = payload.find((item) => item.dataKey === "projects");

    return (
      <CustomTooltipContainer>
        {taskData && (
          <CustomTooltipRow color="#10898F" isFirst>
            <span></span>
            <p>{`${taskData.value} Tasks`}</p>
          </CustomTooltipRow>
        )}
        {projectData && (
          <CustomTooltipRow color="#C72C88">
            <span></span>
            <p>{`${projectData.value} Projects`}</p>
          </CustomTooltipRow>
        )}
      </CustomTooltipContainer>
    );
  }
  return null;
};

// Prop validation for CustomTooltip
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const ActivityChart = () => (
  <ChartContainer>
    <Header>
      <Title>Activity</Title>
      <Subtitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          This Week
          <IoIosArrowDown />
        </div>
      </Subtitle>
    </Header>
    <ResponsiveContainer width="100%" height={127}>
      <LineChart
        data={data}
        margin={{ top: 0, right: 0, left: -35, bottom: 1 }}
      >
        <CartesianGrid vertical={true} horizontal={false} stroke="#e0e0e0" />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: "12px", fill: "#6B7280" }}
        />
        <YAxis
          domain={[10, 30]}
          ticks={[10, 20, 30]}
          tickFormatter={(value) => value / 10}
          tick={{ fontSize: "12px", fill: "#6B7280" }}
          axisLine={false}
          tickLine={false}
          // tick={{ fill: "#6B7280" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="linear"
          dataKey="projects"
          stroke="#C72C88"
          strokeWidth={2}
          dot={(props) =>
            props.payload === props.activeDot
              ? { r: 5, fill: "#fff", strokeWidth: 2, stroke: "#C72C88" }
              : false
          }
          activeDot={{
            r: 5,
            strokeWidth: 1,
            fill: "#C72C88",
            stroke: "#fff",
          }}
        />
        <Line
          type="linear"
          dataKey="tasks"
          stroke="#10898F"
          strokeWidth={2}
          dot={(props) =>
            props.payload === props.activeDot
              ? { r: 5, fill: "#fff", strokeWidth: 2, stroke: "#10898F" }
              : false
          }
          activeDot={{
            r: 5,
            strokeWidth: 3,
            fill: "#10898F",
            stroke: "#fff",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default ActivityChart;

ActivityChart.propTypes = {
  activeDot: PropTypes.object,
  payload: PropTypes.array,
};
