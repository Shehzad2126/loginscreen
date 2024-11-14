import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { PiImagesSquare } from "react-icons/pi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserFriends, FaTags, FaRegIdBadge } from "react-icons/fa";
import { BiMessageSquareDetail, BiBell, BiHelpCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../store/tabSlice";
import { Link } from "react-router-dom";
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%;
  position: fixed;
  justify-content: space-between;
  height: 100vh; /* Full height */
  background-color: #ffffff; /* Background color */
`;

const Nav = styled.nav`
  padding-top: 0rem;
`;

const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.3rem; /* Space between tabs */
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.3rem 1rem; /* Padding for clickable area */
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "#ffe4e6" : "transparent"}; /* Light pink */
  color: ${({ active }) =>
    active ? "#319795" : "#4a5568"}; /* Teal if active */
  border-left: ${({ active }) =>
    active ? "4px solid #d53f8c" : "none"}; /* Pink line */
  font-size: 0.7rem; /* Font size for tabs */
  text-align: left; /* Align text to the left */

  &:hover {
    color: #319795; /* Teal on hover */
  }
`;

const TabIcon = styled.span`
  font-size: 1rem; /* Adjusted icon size */
`;

const TabText = styled.span`
  font-weight: 600;
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
      color: #319795; /* Teal on hover */
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
  width: 2.5rem; /* Adjusted size */
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  text-align: left;
`;

const UserName = styled.p`
  font-size: 0.875rem;
  font-weight: 600; /* Bold font */
  color: #2d3748; /* Gray 800 */
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10%;
`;
const LogoImage = styled.img`
  width: 70%; /* Adjust size as needed */
  cursor: pointer;
`;

const UserEmail = styled.p`
  font-size: 0.75rem; /* Smaller font */
  color: #319795; /* Teal */
`;

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  const tabs = [
    { name: "Dashboard", icon: <GoHome /> },
    { name: "Clients", icon: <FaRegIdBadge /> },
    { name: "Proposals", icon: <FaTags /> },
    { name: "Projects", icon: <FaUserFriends /> },
    { name: "Team", icon: <PiImagesSquare /> },
    { name: "Calendar", icon: <IoCalendarClearOutline /> },
    { name: "Report", icon: <BsGraphUpArrow /> },
  ];

  return (
    <SidebarContainer>
      <LogoContainer>
        {/* Make the logo clickable */}
        <Link to="/">
          <LogoImage
            src="https://s3-alpha-sig.figma.com/img/9079/e577/d374cb9befbc544e868f725647387e0a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VTRjK~vv9S9JDUErPDLk9z0zHHFqRVDPj34PlLLU64uD1eijDfoc5YLL8cnCpPsFTQ27z-sLybUelPBtFgM7FqUoWTWqgrgVo-QINOnVvyc0sFYsGe1P-iuWugwmlk0SrxwM86pODvqpW17RgagLI3JyoUKRmt2ZoRcUuodJdu4CkLp0Rg80DvkbjI7XKCNtVfsWrKrK8sBbjqxTOVl9EHNS1~INRfAdAhe0mhrd1DhXMdkEmwGBiVQ0MgbzD9gzsoS8Lesl5U3wEV2DajFzOKkSmceTqpg-lXXoH34zREFIjSbqKBFM~fatl3qVefepVkXPgYLMyJKFWDqzMjokKg__"
            alt="CentrixHub Logo"
          />
        </Link>
      </LogoContainer>
      <Nav>
        <TabList>
          {tabs.map((tab) => (
            <TabItem
              key={tab.name}
              active={activeTab === tab.name}
              onClick={() => dispatch(setActiveTab(tab.name))}
            >
              <TabIcon>{tab.icon}</TabIcon>
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
