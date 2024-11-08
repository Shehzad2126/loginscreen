// import ActivityChart from "./ActivityChart";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
// `;

// const ChartWrapper = styled.div`
//   width: 55%;
//   background: black;
// `;

// const ActiveNowSection = styled.div`
//   width: 45%;
//   padding: 1rem 1rem;
//   border-radius: 0.75rem;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 0.25rem;
// `;

// const Title = styled.h2`
//   font-size: 0.8rem;
//   font-weight: 600;
// `;

// const ViewAllLink = styled.a`
//   font-size: 0.8rem;
//   color: #38b2ac;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const UserList = styled.div`
//   max-width: 18rem;
//   padding-left: 1.75rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.25rem;
// `;

// const UserCard = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0.3rem 1rem;
//   padding-left: 1.25rem;
//   background-color: white;
//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
//   border-radius: 0.75rem;
// `;

// const UserImageContainer = styled.div`
//   position: relative;
//   margin-right: 0.75rem;
//   margin-left: -3rem;
// `;

// const UserImage = styled.img`
//   width: 1.8rem;
//   height: 1.8rem;
//   border-radius: 50%;

//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
// `;

// const OnlineIndicator = styled.span`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 0.75rem;
//   height: 0.75rem;
//   background-color: #38b2ac;
//   border: 2px solid white;
//   border-radius: 50%;
//   transform: translate(25%, -25%);
//   z-index: 10;
// `;

// const UserInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const UserName = styled.p`
//   font-size: 0.825rem;
//   font-weight: 400;
//   color: #2d3748;
// `;

// const UserRole = styled.p`
//   font-size: 0.675rem;
//   color: #718096;
// `;

// const TimeSpentInfo = styled.div`
//   text-align: right;
// `;

// const TimeSpent = styled.p`
//   font-size: 0.825rem;
//   font-weight: 600;
//   color: #d53f8c;
// `;

// const TimeSpentLabel = styled.p`
//   font-size: 0.55rem;
//   color: #ed64a6;
// `;

// const ActivityAndActiveNow = () => {
//   const activeUsers = [
//     {
//       name: "Ryan Thompson",
//       role: "Lead Strategist",
//       timeSpent: "30 mins",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       name: "Ryan Thompson",
//       role: "Lead Strategist",
//       timeSpent: "58 mins",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//   ];

//   return (
//     <Container>
//       <ChartWrapper>
//         <ActivityChart />
//       </ChartWrapper>
//       <ActiveNowSection>
//         <Header>
//           <Title>Active Now</Title>
//           <ViewAllLink href="#">View All &rarr;</ViewAllLink>
//         </Header>
//         <UserList>
//           {activeUsers.map((user, index) => (
//             <UserCard key={index}>
//               <div className="flex items-center">
//                 <UserImageContainer>
//                   <UserImage src={user.image} alt={user.name} />
//                   <OnlineIndicator />
//                 </UserImageContainer>
//                 <UserInfo>
//                   <UserName>{user.name}</UserName>
//                   <UserRole>{user.role}</UserRole>
//                 </UserInfo>
//               </div>
//               <TimeSpentInfo>
//                 <TimeSpent>{user.timeSpent}</TimeSpent>
//                 <TimeSpentLabel>Time Spent</TimeSpentLabel>
//               </TimeSpentInfo>
//             </UserCard>
//           ))}
//         </UserList>
//       </ActiveNowSection>
//     </Container>
//   );
// };

// export default ActivityAndActiveNow;
import ActivityChart from "./ActivityChart";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ChartWrapper = styled.div`
  width: 55%;
  margin-top: 35px;
`;

const ActiveNowSection = styled.div`
  width: 45%;
  padding: 1rem 1rem;
  border-radius: 0.75rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: 600;
`;

const ViewAllLink = styled.a`
  font-size: 0.8rem;

  color: #38b2ac;
  &:hover {
    text-decoration: underline;
  }
`;

const UserList = styled.div`
  max-width: 18rem;
  padding-left: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const UserCard = styled.div`
  position: relative;
  display: flex;
  height: 7vh;

  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  padding-left: 1.25rem;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 0.75rem;
`;

const UserImageContainer = styled.div`
  position: relative;
  margin-right: 0.75rem;
  margin-left: -3rem;
`;

const UserImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`;

const OnlineIndicator = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  background-color: #38b2ac;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(25%, -25%);
  z-index: 10;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.p`
  font-size: 0.825rem;
  font-weight: 400;
  margin-bottom: -5px;
  color: #2d3748;
`;

const UserRole = styled.p`
  font-size: 0.675rem;
  color: #718096;
`;

const TimeSpentInfo = styled.div`
  text-align: right;
`;

const TimeSpent = styled.p`
  font-size: 0.825rem;
  font-weight: 600;
  color: #d53f8c;
`;

const TimeSpentLabel = styled.p`
  font-size: 0.55rem;
  color: #ed64a6;
`;

const ActivityAndActiveNow = () => {
  const activeUsers = [
    {
      name: "Ryan Thompson",
      role: "Lead Strategist",
      timeSpent: "30 mins",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jessica Smith",
      role: "Marketing Manager",
      timeSpent: "58 mins",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <Container>
      <ChartWrapper>
        <ActivityChart />
      </ChartWrapper>
      <ActiveNowSection>
        <Header>
          <Title>Active Now</Title>
          <ViewAllLink href="#">View All &rarr;</ViewAllLink>
        </Header>
        <UserList>
          {activeUsers.map((user, index) => (
            <UserCard key={index}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <UserImageContainer>
                  <UserImage src={user.image} alt={user.name} />
                  <OnlineIndicator />
                </UserImageContainer>
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserRole>{user.role}</UserRole>
                </UserInfo>
              </div>
              <TimeSpentInfo>
                <TimeSpent>{user.timeSpent}</TimeSpent>
                <TimeSpentLabel>Time Spent</TimeSpentLabel>
              </TimeSpentInfo>
            </UserCard>
          ))}
        </UserList>
      </ActiveNowSection>
    </Container>
  );
};

export default ActivityAndActiveNow;
