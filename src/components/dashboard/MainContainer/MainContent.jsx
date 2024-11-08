import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import Client from "./Clients";
import Projects from "./Projects";
import Proposal from "./Proposal";
import Reports from "./Reports";
import Team from "./Team";
import Calendar from "./Calender";

const ContentContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const MainContent = () => {
  const activeTab = useSelector((state) => state.tab.activeTab);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Clients":
        return <Client />;
      case "Proposals":
        return <Proposal />;
      case "Projects":
        return <Projects />;
      case "Team":
        return <Team />;
      case "Calendar":
        return <Calendar />;
      case "Report":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return <ContentContainer>{renderContent()}</ContentContainer>;
};

export default MainContent;
