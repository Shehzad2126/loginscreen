// import React from "react";
// import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { setActiveTab, toggleSidebar } from "../../store/tabSlice";
// import { GoHome } from "react-icons/go";
// import { PiImagesSquare } from "react-icons/pi";
// import { IoCalendarClearOutline } from "react-icons/io5";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { FaUserFriends, FaTags, FaRegIdBadge } from "react-icons/fa";
// import { BiMessageSquareDetail, BiBell, BiHelpCircle } from "react-icons/bi";

// const SidebarContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 4%;
//   position: fixed;
//   height: 100vh;
//   background-color: #ffffff;
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 1rem;
//   height: 10vh;
//   cursor: pointer;
// `;

// const LogoImage = styled.img`
//   width: 100%;
// `;

// const TabList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0;
//   gap: 0.2rem;
// `;

// const TabItem = styled.li`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   cursor: pointer;
//   padding: 0.4rem 0;
//   background-color: ${({ active }) => (active ? "#ffe4e6" : "transparent")};
//   color: ${({ active }) => (active ? "#319795" : "#4a5568")};
//   border-left: ${({ active }) => (active ? "4px solid #d53f8c" : "none")};
//   transition: background-color 0.3s, color 0.3s;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const Footer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: auto; /* Pushes footer to the bottom */
//   padding-bottom: 1rem;
// `;

// const FooterIcon = styled.div`
//   font-size: 1.2rem;
//   color: #4a5568;
//   padding: 0.5rem 0;
//   cursor: pointer;

//   &:hover {
//     color: #319795;
//   }
// `;

// const UserProfile = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const UserImage = styled.img`
//   width: 2.5rem;
//   height: 2.5rem;
//   border-radius: 50%;
//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
// `;

// const CollapsedSidebar = () => {
//   const dispatch = useDispatch();
//   const activeTab = useSelector((state) => state.tab.activeTab);

//   const tabs = [
//     { name: "Dashboard", icon: <GoHome /> },
//     { name: "Clients", icon: <FaRegIdBadge /> },
//     { name: "Proposals", icon: <FaTags /> },
//     { name: "Projects", icon: <FaUserFriends /> },
//     { name: "Team", icon: <PiImagesSquare /> },
//     { name: "Calendar", icon: <IoCalendarClearOutline /> },
//     { name: "Report", icon: <BsGraphUpArrow /> },
//   ];

//   return (
//     <SidebarContainer>
//       <LogoContainer onClick={() => dispatch(toggleSidebar())}>
//         <LogoImage
//           src="https://s3-alpha-sig.figma.com/img/1a75/de47/44b563e51431be51183dd063dfc7c51d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gokTNKoE9kvaYgBsoHtZUID0ZKi5F5DrsVt09k36z5Q~2Bv55M0IeMF~j077NyY-wJLZ4Zohvjv0PSIEuVuCCVOtKKpeLMN5wLVAJCe6sRqaSAt-LkEjl6XLulk~t9IoYWuZhEqNcTeZm52HyzmyDfrstEGREEhb3zs9zHwwX8QC47LOBCD7Jh~RTWO-9LeePjaYPcXBGtu7cxbye1s6y5YIU7ctR4Svp5tAnbOA2n9B6t99Hv4-91vF6yee52H2F61nus2xN3AEHXnL4EIkzKLTPrPBJAb3R6aq1WNQmQ6c7zGlLtNGsviJPa8LEl8Qv3c2l7WqBQskhommMwj6GA__"
//           alt="CentrixHub Logo"
//         />
//       </LogoContainer>
//       <nav>
//         <TabList>
//           {tabs.map((tab) => (
//             <TabItem
//               key={tab.name}
//               active={activeTab === tab.name}
//               onClick={() => dispatch(setActiveTab(tab.name))}
//             >
//               {tab.icon}
//             </TabItem>
//           ))}
//         </TabList>
//       </nav>
//       <Footer>
//         <FooterIcon>
//           <BiMessageSquareDetail />
//         </FooterIcon>
//         <FooterIcon>
//           <BiBell />
//         </FooterIcon>
//         <FooterIcon>
//           <BiHelpCircle />
//         </FooterIcon>
//         <UserProfile>
//           <UserImage
//             src="https://avatar.iran.liara.run/public/boy"
//             alt="User"
//           />
//         </UserProfile>
//       </Footer>
//     </SidebarContainer>
//   );
// };

// export default CollapsedSidebar;
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, toggleSidebar } from "../../store/tabSlice";
import Logo from "../../Assets/Logo.svg";
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
import { BiHelpCircle } from "react-icons/bi";
import MessageIcon from "../../Assets/MessageIcon.svg";
import NotificationIcon from "../../Assets/NotificationIcon.svg";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 4%;
  position: fixed;
  height: 100vh;
  background-color: #ffffff;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 10vh;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 38px;
`;

const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 0.2rem;
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  padding: 0.4rem 0;
  background-color: ${({ active }) => (active ? "#ffe4e6" : "transparent")};
  color: ${({ active }) => (active ? "#319795" : "#4a5568")};
  border-left: ${({ active }) => (active ? "4px solid #d53f8c" : "none")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-bottom: 1rem;
`;

const FooterIcon = styled.div`
  font-size: 1.2rem;
  color: #4a5568;
  padding: 0.5rem 0;
  cursor: pointer;

  &:hover {
    color: #319795;
  }
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const UserImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const CollapsedSidebar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

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
  ];

  return (
    <SidebarContainer>
      <LogoContainer onClick={() => dispatch(toggleSidebar())}>
        <LogoImage src={Logo} alt="CentrixHub Logo" />
      </LogoContainer>
      <nav>
        <TabList>
          {tabs.map((tab) => (
            <TabItem
              key={tab.name}
              active={activeTab === tab.name}
              onClick={() => dispatch(setActiveTab(tab.name))}
            >
              {tab.icon(activeTab === tab.name)}
            </TabItem>
          ))}
        </TabList>
      </nav>
      <Footer>
        <FooterIcon>
          <img src={MessageIcon} alt="MessageIcon" />
        </FooterIcon>
        <FooterIcon>
          <img src={NotificationIcon} alt="MessageIcon" />
        </FooterIcon>
        <FooterIcon>
          <BiHelpCircle />
        </FooterIcon>
        <UserProfile>
          <UserImage
            src="https://avatar.iran.liara.run/public/boy"
            alt="User"
          />
        </UserProfile>
      </Footer>
    </SidebarContainer>
  );
};

export default CollapsedSidebar;
