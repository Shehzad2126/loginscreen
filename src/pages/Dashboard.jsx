import React from "react";
import styled from "styled-components";
import LeftSidebar from "../components/dashboard/LeftSidebar";
import MainContent from "../components/dashboard/MainContainer/MainContent";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Sidebar = styled.div`
  width: 18%;
  box-shadow: 0px 0px 3px 0px #888888;
`;

const Content = styled.div`
  width: 82%;
  background-color: rgba(248, 248, 248, 1);
  padding: 10px;
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
