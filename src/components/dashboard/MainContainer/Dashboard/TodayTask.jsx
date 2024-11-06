// import { FaClock } from "react-icons/fa";
// import styled from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   padding: 1rem 1rem 0rem 1rem;
//   background-color: white;
// `;

// const Header = styled.div`
//   display: flex;
//   font-size: 0.8rem;
//   font-weight: bold;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 0.5rem;
// `;

// const ProgressContainer = styled.div`
//   width: 100%;
//   height: 0.5rem;
//   background-color: #e2e8f0;
//   border-radius: 0.5rem;
//   margin-bottom: 1rem;
// `;

// const ProgressBar = styled.div`
//   height: 100%;
//   background-color: #319795;
//   border-radius: 0.5rem;
//   width: ${(props) => props.progress}%;
// `;

// const TimeEstimate = styled.div`
//   display: flex;
//   font-size: 0.8rem;
//   align-items: center;
//   color: #4a5568;
// `;

// const TimeIcon = styled(FaClock)`
//   color: #319795;
//   margin-right: 0.5rem;
// `;

// const AvatarsContainer = styled.div`
//   display: flex;
//   gap: -1rem;
// `;

// const Avatar = styled.img`
//   width: 1.7rem;
//   height: 1.7rem;
//   border: 2px solid white;
//   border-radius: 50%;
//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
// `;

// const Divider = styled.div`
//   width: 100%;
//   margin: 1.5rem 0;
//   border-top: 1px solid #e2e8f0;
// `;

// const TaskTitle = styled.h4`
//   margin-bottom: 0.75rem;
//   font-size: 0.85rem;
//   font-weight: 600;
// `;

// const TaskList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const TaskItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const TaskNumber = styled.div`
//   width: 1rem;
//   height: 1rem;
//   padding: 0.25rem;

//   background-color: #e2e8f0;
//   color: #2d3748;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 0.875rem;
// `;

// const TaskDescription = styled.span`
//   font-size: 0.775rem;

//   color: #2d3748;
// `;

// const TodayTask = () => {
//   const progressPercentage = 90;
//   const timeEstimate = "1 Hour";
//   const avatars = [
//     "https://avatar.iran.liara.run/public/36",
//     "https://avatar.iran.liara.run/public/10",
//     "https://avatar.iran.liara.run/public/24",
//     "https://avatar.iran.liara.run/public/35",
//     "https://avatar.iran.liara.run/public/13",
//   ];

//   return (
//     <Container>
//       <Header>
//         <span className="text-gray-800 ">Progress</span>
//         <span style={{ color: "#319795", fontWeight: "400" }}>
//           {progressPercentage}%
//         </span>
//       </Header>
//       <ProgressContainer>
//         <ProgressBar progress={progressPercentage} />
//       </ProgressContainer>
//       <div className="flex items-center justify-between">
//         <TimeEstimate>
//           <TimeIcon />
//           <span>{timeEstimate}</span>
//         </TimeEstimate>
//         <AvatarsContainer>
//           {avatars.map((avatar, index) => (
//             <Avatar key={index} src={avatar} alt="User" />
//           ))}
//         </AvatarsContainer>
//       </div>
//       <Divider />
//       <TaskTitle>Detail Task</TaskTitle>
//       <TaskList>
//         <TaskItem>
//           <TaskNumber>1</TaskNumber>
//           <TaskDescription>Draft Remote Work Policy</TaskDescription>
//         </TaskItem>
//         <TaskItem>
//           <TaskNumber>2</TaskNumber>
//           <TaskDescription>
//             Review Legal and Compliance Requirements
//           </TaskDescription>
//         </TaskItem>
//         <TaskItem>
//           <TaskNumber>3</TaskNumber>
//           <TaskDescription>
//             Conduct Employee Training on Remote Work Best Practices
//           </TaskDescription>
//         </TaskItem>
//       </TaskList>
//     </Container>
//   );
// };

// export default TodayTask;
import { FaClock } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #e2e8f0; /* Light gray */
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #319795; /* Teal */
  border-radius: 0.5rem;
  width: ${(props) => props.progress}%;
`;

const TimeEstimate = styled.div`
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  color: #4a5568; /* Gray 600 */
`;

const TimeIcon = styled(FaClock)`
  color: #319795; /* Teal */
  margin-right: 0.5rem;
`;

const AvatarsContainer = styled.div`
  display: flex;
  gap: -1rem; /* Negative gap for overlapping avatars */
`;

const Avatar = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Divider = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  border-top: 1px solid #e2e8f0; /* Light gray */
`;

const TaskTitle = styled.h4`
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TaskNumber = styled.div`
  width: 1rem;
  height: 1rem;
  padding: 0.25rem;
  background-color: #e2e8f0; /* Light gray */
  color: #2d3748; /* Gray 800 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem; /* Text sm */
`;

const TaskDescription = styled.span`
  font-size: 0.775rem; /* Text xs */
  color: #2d3748; /* Gray 800 */
`;

const TodayTask = () => {
  const progressPercentage = 90;
  const timeEstimate = "1 Hour";
  const avatars = [
    "https://avatar.iran.liara.run/public/36",
    "https://avatar.iran.liara.run/public/10",
    "https://avatar.iran.liara.run/public/24",
    "https://avatar.iran.liara.run/public/35",
    "https://avatar.iran.liara.run/public/13",
  ];

  return (
    <Container>
      <Header>
        <span style={{ color: "#2d3748" }}>Progress</span> {/* Gray 800 */}
        <span style={{ color: "#319795", fontWeight: "400" }}>
          {progressPercentage}%
        </span>
      </Header>
      <ProgressContainer>
        <ProgressBar progress={progressPercentage} />
      </ProgressContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TimeEstimate>
          <TimeIcon />
          <span>{timeEstimate}</span>
        </TimeEstimate>
        <AvatarsContainer>
          {avatars.map((avatar, index) => (
            <Avatar key={index} src={avatar} alt="User" />
          ))}
        </AvatarsContainer>
      </div>
      <Divider />
      <TaskTitle>Detail Task</TaskTitle>
      <TaskList>
        <TaskItem>
          <TaskNumber>1</TaskNumber>
          <TaskDescription>Draft Remote Work Policy</TaskDescription>
        </TaskItem>
        <TaskItem>
          <TaskNumber>2</TaskNumber>
          <TaskDescription>
            Review Legal and Compliance Requirements
          </TaskDescription>
        </TaskItem>
        <TaskItem>
          <TaskNumber>3</TaskNumber>
          <TaskDescription>
            Conduct Employee Training on Remote Work Best Practices
          </TaskDescription>
        </TaskItem>
      </TaskList>
    </Container>
  );
};

export default TodayTask;
