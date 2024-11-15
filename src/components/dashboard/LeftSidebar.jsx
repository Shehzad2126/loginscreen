// import styled from "styled-components";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { BiMessageSquareDetail, BiBell, BiHelpCircle } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import { setActiveTab, toggleSidebar } from "../../store/tabSlice";
// import Centrixhub_Logo from "../../Assets/Centrix_Logo.svg";
// import DashboardIcon from "../../Assets/DashboardIcon.svg";
// import ClientIcon from "../../Assets/ClientIcon.svg";
// import ProposalIcon from "../../Assets/ProposalIcon.svg";
// import ProjectIcon from "../../Assets/Projects.svg";
// import TeamIcon from "../../Assets/TeamIcon.svg";
// import CalendarIcon from "../../Assets/CalenderIcon.svg";
// const SidebarContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 16%;
//   position: fixed;
//   justify-content: space-between;
//   height: 100vh; /* Full height */
//   background-color: #ffffff; /* Background color */
// `;

// const Nav = styled.nav`
//   padding-top: 0rem;
// `;

// const TabList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   padding: 0;
//   gap: 0.3rem; /* Space between tabs */
// `;

// const TabItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap-bottom: 0.75rem;
//   padding: 0.3rem 1rem; /* Padding for clickable area */
//   cursor: pointer;
//   background-color: ${({ active }) =>
//     active ? "#ffe4e6" : "transparent"}; /* Light pink */
//   color: ${({ active }) =>
//     active ? "#319795" : "#4a5568"}; /* Teal if active */
//   border-left: ${({ active }) =>
//     active ? "4px solid #d53f8c" : "none"}; /* Pink line */
//   font-size: 0.7rem; /* Font size for tabs */
//   text-align: left; /* Align text to the left */

//   &:hover {
//     color: #319795; /* Teal on hover */
//   }
// `;

// const TabIcon = styled.span`
//   font-size: 1rem;
//   margin-right: 7px;
// `;

// const TabText = styled.span`
//   font-weight: 600;
// `;

// const Footer = styled.div`
//   margin-top: auto;
//   display: flex;
//   flex-direction: column;
//   padding: 15px;
// `;

// const IconContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   font-size: 1rem;
//   color: #4a5568;

//   & > svg {
//     cursor: pointer;
//     transition: color 0.2s;

//     &:hover {
//       color: #319795; /* Teal on hover */
//     }
//   }
// `;

// const UserProfile = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 0.5rem 0;
//   gap: 0.5rem;
// `;

// const UserImage = styled.img`
//   width: 2.5rem; /* Adjusted size */
//   height: 2.5rem;
//   border-radius: 50%;
//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
// `;

// const UserInfo = styled.div`
//   text-align: left;
// `;

// const UserName = styled.p`
//   font-size: 0.875rem;
//   font-weight: 600; /* Bold font */
//   color: #2d3748; /* Gray 800 */
// `;
// const LogoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 0 10%;
//   padding-left: auto !important;
//   height: 10vh;
// `;
// const LogoImage = styled.img`
//   width: 100% !important;
//   height: 10vh;
//   cursor: pointer;
//   margin-left: auto;
// `;

// const UserEmail = styled.p`
//   font-size: 0.75rem; /* Smaller font */
//   color: #319795; /* Teal */
// `;

// const LeftSidebar = () => {
//   const dispatch = useDispatch();
//   const activeTab = useSelector((state) => state.tab.activeTab);

//   const tabs = [
//     {
//       name: "Dashboard",
//       icon: <img src={DashboardIcon} alt="Dashboard Icon" />,
//     },
//     { name: "Clients", icon: <img src={ClientIcon} alt="Client Icon" /> },
//     { name: "Proposals", icon: <img src={ProposalIcon} alt="Proposal Icon" /> },
//     { name: "Projects", icon: <img src={ProjectIcon} alt="Project Icon" /> },
//     { name: "Team", icon: <img src={TeamIcon} alt="Team Icon" /> },
//     { name: "Calendar", icon: <img src={CalendarIcon} alt="Calendar Icon" /> },
//     { name: "Report", icon: <BsGraphUpArrow /> },
//   ];
//   return (
//     <SidebarContainer>
//       <LogoContainer onClick={() => dispatch(toggleSidebar())}>
//         <LogoImage src={Centrixhub_Logo} alt="CentrixHub Logo" />
//       </LogoContainer>
//       <Nav>
//         <TabList>
//           {tabs.map((tab) => (
//             <TabItem
//               key={tab.name}
//               active={activeTab === tab.name}
//               onClick={() => dispatch(setActiveTab(tab.name))}
//             >
//               <TabIcon>{tab.icon}</TabIcon>
//               <TabText>{tab.name}</TabText>
//             </TabItem>
//           ))}
//         </TabList>
//       </Nav>
//       <Footer>
//         <IconContainer>
//           <BiMessageSquareDetail />
//           <BiBell />
//           <BiHelpCircle />
//         </IconContainer>
//         <UserProfile>
//           <UserImage
//             src="https://avatar.iran.liara.run/public/boy"
//             alt="User"
//           />
//           <UserInfo>
//             <UserName>Unknown</UserName>
//             <UserEmail>unknown@gmail.com</UserEmail>
//           </UserInfo>
//         </UserProfile>
//       </Footer>
//     </SidebarContainer>
//   );
// };

// export default LeftSidebar;
import styled from "styled-components";
import { BiMessageSquareDetail, BiBell, BiHelpCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, toggleSidebar } from "../../store/tabSlice";
import Centrixhub_Logo from "../../Assets/Centrix_Logo.svg";
import DashboardIcon from "../../Assets/DashboardIcon.svg";
import DashboardIconActive from "../../Assets/DashboardIconActive.svg";
import ClientIcon from "../../Assets/ClientIcon.svg";
import ClientIconActive from "../../Assets/ClientIconActive.svg";
import ProposalIcon from "../../Assets/ProposIconActive.svg";
import ProposalIconActive from "../../Assets/ProposalIconActive.svg";
import ProjectIcon from "../../Assets/Projects.svg";
import ProjectIconActive from "../../Assets/ProjectsIconActive.svg";
import TeamIcon from "../../Assets/TeamIcon.svg";
import TeamIconActive from "../../Assets/TeamIconActive.svg";
import CalendarIcon from "../../Assets/CalenderIcon.svg";
import CalendarIconActive from "../../Assets/CalenderIconActive.svg";
import { BsGraphUpArrow } from "react-icons/bs";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%;
  position: fixed;
  justify-content: space-between;
  height: 100vh;
  background-color: #ffffff;
`;

const Nav = styled.nav`
  padding-top: 0rem;
`;

const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.3rem;
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.3rem 1rem;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#ffe4e6" : "transparent")};
  color: ${({ active }) => (active ? "#319795" : "#4a5568")};
  border-left: ${({ active }) => (active ? "4px solid #d53f8c" : "none")};
  font-size: 0.7rem;
  text-align: left;

  &:hover {
    color: #319795;
  }
`;

const TabText = styled.span`
  font-weight: 600;
  margin-left: 7px;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  color: #4a5568;

  & > svg {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #319795;
    }
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 0;
  gap: 0.5rem;
`;

const UserImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  text-align: left;
`;

const UserName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10%;
  height: 10vh;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 10vh;
  cursor: pointer;
`;

const UserEmail = styled.p`
  font-size: 0.75rem;
  color: #319795;
`;

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  // Define tabs with icons as functions
  const tabs = [
    {
      name: "Dashboard",
      icon: (active) => (
        <img
          src={active ? DashboardIconActive : DashboardIcon}
          alt="Dashboard Icon"
        />
      ),
    },
    {
      name: "Clients",
      icon: (active) => (
        <img src={active ? ClientIconActive : ClientIcon} alt="Client Icon" />
      ),
    },
    {
      name: "Proposals",
      icon: (active) => (
        <img
          src={active ? ProposalIconActive : ProposalIcon}
          alt="Proposal Icon"
        />
      ),
    },
    {
      name: "Projects",
      icon: (active) => (
        <img
          src={active ? ProjectIconActive : ProjectIcon}
          alt="Project Icon"
        />
      ),
    },
    {
      name: "Team",
      icon: (active) => (
        <img src={active ? TeamIconActive : TeamIcon} alt="Team Icon" />
      ),
    },
    {
      name: "Calendar",
      icon: (active) => (
        <img
          src={active ? CalendarIconActive : CalendarIcon}
          alt="Calendar Icon"
        />
      ),
    },
    {
      name: "Report",
      icon: (active) => (
        <BsGraphUpArrow
          style={{ color: active ? "#319795" : "#4a5568", fontSize: "1rem" }}
        />
      ),
    },
  ];

  return (
    <SidebarContainer>
      <LogoContainer onClick={() => dispatch(toggleSidebar())}>
        <LogoImage src={Centrixhub_Logo} alt="CentrixHub Logo" />
      </LogoContainer>
      <Nav>
        <TabList>
          {tabs.map((tab) => (
            <TabItem
              key={tab.name}
              active={activeTab === tab.name}
              onClick={() => dispatch(setActiveTab(tab.name))}
            >
              {tab.icon(activeTab === tab.name)}
              <TabText>{tab.name}</TabText>
            </TabItem>
          ))}
        </TabList>
      </Nav>
      <Footer>
        <IconContainer>
          <BiMessageSquareDetail />
          <BiBell />
          <BiHelpCircle />
        </IconContainer>
        <UserProfile>
          <UserImage
            src="https://avatar.iran.liara.run/public/boy"
            alt="User"
          />
          <UserInfo>
            <UserName>Unknown</UserName>
            <UserEmail>unknown@gmail.com</UserEmail>
          </UserInfo>
        </UserProfile>
      </Footer>
    </SidebarContainer>
  );
};

export default LeftSidebar;
