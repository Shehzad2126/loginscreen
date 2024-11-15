// import PropTypes from "prop-types";
// import { TbPencil } from "react-icons/tb";

// const StatCard = ({ title, value, percentage, icon, color }) => {
//   return (
//     <div className="flex flex-col justify-between p-4 bg-white rounded-lg w-80 mr-7 ">
//       {/* Icon and Title */}
//       <div className="flex items-center space-x-2">
//         <div
//           className="flex items-center justify-center rounded-full p-13"
//           style={{ backgroundColor: color, width: "25px", height: "25px" }}
//         >
//           <span className="text-sm text-white">
//             <TbPencil style={{ width: "13px", height: "13px" }} />
//           </span>
//         </div>
//         <span className="text-xs font-medium text-gray-500">{title}</span>
//       </div>

//       <div className="flex items-center justify-between mt-2">
//         <h2 className="text-lg font-semibold text-gray-800">{value}</h2>
//         <div className="px-2 py-1 bg-gray-100 rounded-full">
//           <span className="text-xs font-semibold" style={{ color: color }}>
//             {percentage}%
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// StatCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   icon: PropTypes.node.isRequired,
//   color: PropTypes.string,
// };

// StatCard.defaultProps = {
//   percentage: 0,
//   color: "#10898F",
// };

// export default StatCard;
import PropTypes from "prop-types";
import { TbPencil } from "react-icons/tb";
import styled from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
  width: 22%; /* Equivalent to w-80 */
  margin-right: 1rem; /* Equivalent to mr-7 */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Equivalent to space-x-2 */
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  width: 25px;
  height: 25px;
`;

const Title = styled.span`
  font-size: 0.75rem; /* Equivalent to text-xs */
  font-weight: 500; /* Equivalent to font-medium */
  color: rgba(75, 85, 99, 1); /* Equivalent to text-gray-500 */
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem; /* Equivalent to mt-2 */
`;

const Value = styled.h2`
  font-size: 1.125rem; /* Equivalent to text-lg */
  font-weight: 600; /* Equivalent to font-semibold */
  color: rgba(45, 55, 72, 1); /* Equivalent to text-gray-800 */
`;

const PercentageWrapper = styled.div`
  padding: 0.25rem 0.5rem; /* Equivalent to px-2 py-1 */
  background-color: rgba(226, 232, 240, 1); /* Equivalent to bg-gray-100 */
  border-radius: 9999px; /* Fully rounded */
`;

const Percentage = styled.span`
  font-size: 0.75rem; /* Equivalent to text-xs */
  font-weight: 600; /* Equivalent to font-semibold */
  color: ${(props) => props.color};
`;

const StatCard = ({ title, value, percentage, icon, color }) => {
  return (
    <CardContainer>
      {/* Icon and Title */}
      <Header>
        <IconWrapper color={color}>
          <TbPencil style={{ width: "13px", height: "13px", color: "white" }} />
        </IconWrapper>
        <Title>{title}</Title>
      </Header>

      <ValueContainer>
        <Value>{value}</Value>
        <PercentageWrapper>
          <Percentage color={color}>{percentage}%</Percentage>
        </PercentageWrapper>
      </ValueContainer>
    </CardContainer>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
};

StatCard.defaultProps = {
  percentage: 0,
  color: "#10898F",
};

export default StatCard;
