// import React, { useState } from "react";
// import styled from "styled-components";
// import LeftSidebar from "../components/dashboard/LeftSidebar";
// import MainContent from "../components/dashboard/MainContainer/MainContent";
// import { IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   position: relative;

//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Sidebar = styled.div`
//   width: 18%;
//   box-shadow: 0px 0px 3px 0px #888888;

//   @media (max-width: 960px) {
//     display: ${(props) => (props.show ? "block" : "none")};
//     position: absolute;
//     z-index: 1000;
//     background-color: white;
//     height: 100vh;
//     left: 0;
//   }
// `;

// const Content = styled.div`
//   width: 82%;
//   background-color: rgba(248, 248, 248, 1);
//   padding: 10px;

//   @media (max-width: 960px) {
//     width: 100%;
//   }
// `;

// const ToggleButton = styled(IconButton)`
//   display: none !important; /* Ensure it's hidden by default on large screens */

//   @media (max-width: 960px) {
//     display: block !important; /* Show only on smaller screens */
//     position: fixed;
//     top: 10px; /* Adjust this as needed for vertical positioning */
//     left: -320px;
//     z-index: 1100;
//   }
// `;

// function Dashboard() {
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setShowSidebar((prevShow) => !prevShow);
//   };

//   return (
//     <Container>
//       <ToggleButton onClick={toggleSidebar} color="primary">
//         <MenuIcon />
//       </ToggleButton>
//       <Sidebar show={showSidebar}>
//         <LeftSidebar />
//       </Sidebar>
//       <Content>
//         <MainContent />
//       </Content>
//     </Container>
//   );
// }

// export default Dashboard;
// Dashboard.js
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LeftSidebar from "../components/dashboard/LeftSidebar";
import CollapsedSidebar from "../components/dashboard/CollapsedSidebar";
import MainContent from "../components/dashboard/MainContainer/MainContent";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Sidebar = styled.div`
  width: ${(props) => (props.collapsed ? "5%" : "18%")};
  transition: width 0.3s;
`;

const Content = styled.div`
  width: ${(props) => (props.collapsed ? "95%" : "82%")};
  transition: width 0.3s;
  background-color: rgba(248, 248, 248, 1);
  padding: 10px;
`;

function Dashboard() {
  const isCollapsed = useSelector((state) => state.tab.isCollapsed);

  return (
    <Container>
      <Sidebar collapsed={isCollapsed}>
        {isCollapsed ? <CollapsedSidebar /> : <LeftSidebar />}
      </Sidebar>
      <Content collapsed={isCollapsed}>
        <MainContent />
      </Content>
    </Container>
  );
}

export default Dashboard;
