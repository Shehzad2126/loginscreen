import React from "react";
import styled from "styled-components";
import LeftSidebar from "../components/dashboard/LeftSidebar";
import MainContent from "../components/dashboard/MainContainer/MainContent";

// Styled components
const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;

  padding: 0;
`;

const Sidebar = styled.div`
  width: 16%; /* Equivalent to w-2/12 */
`;

const Content = styled.div`
  width: 84%; /* Equivalent to w-10/12 */
  background-color: rgba(248, 248, 248, 1);
`;

function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <LeftSidebar />
      </Sidebar>
      <Content>
        <MainContent />
      </Content>
    </Container>
  );
}

export default Dashboard;
