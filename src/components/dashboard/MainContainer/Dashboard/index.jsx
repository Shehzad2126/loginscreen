import styled from "styled-components";
import React from "react";
import StatCard from "./StatCard";
import { FaTasks, FaProjectDiagram, FaDollarSign } from "react-icons/fa";
import Activity from "./Activity";
import SearchField from "./SearchField";
import TodayTask from "./TodayTask";
import Proposals from "./Proposals";
import CalendarComponent from "./CalendarComponent";

const DashboardContainer = styled.div`
  padding: 0.25rem 0.5rem 0rem;
  width: 98%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 960px) {
    display: flex;
    width: 95%;
  }
`;

const Section = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  @media (max-width: 960px) {
    // padding: 0 3%;
  }
`;
const LeftDiv = styled.div`
  width: 67%;
  padding: 0px 0.5rem;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
const RightDiv = styled.div`
  width: 33%;
  @media (max-width: 960px) {
    display: none;
  }
`;
const HeaderSection = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
const LeftHeadingDiv = styled.div`
  width: 67%;
  padding: 0px 0.5rem;
  @media (max-width: 960px) {
    width: 15%;
  }
`;
const RightSearchDiv = styled.div`
  width: 33%;
  @media (max-width: 960px) {
    width: 85%;
  }
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
`;

const WelcomeCard = styled.div`
  padding: 1rem 2rem;
  background-color: rgba(16, 137, 143, 1);
  border-radius: 0.5rem;
  color: white;
  width: 80%;
`;

const WelcomeCardTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
`;

const StatusRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatusText = styled.div`
  font-size: 0.75rem;
  padding: 3px 0;
  color: #ffffff;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0.25rem;
  margin-top: 0.5rem;
  background-color: rgba(87, 187, 192, 1);
  border-radius: 0.25rem;
`;

const Progress = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 0.25rem;
  width: 80%; /* Can adjust width dynamically as needed */
`;

const StatusCount = styled(StatusText)`
  margin-top: 0;
`;

const CalendarWrapper = styled.div`
  width: 100%;
`;

const StatCardsWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
`;

const RightSection = styled.div`
  width: 90%;
  padding: 0.5rem 1rem 2rem;
  background-color: white;
  height: aotu;
  border-radius: 0.9rem;
`;

const TaskImage = styled.img`
  width: 90%;
  height: 20vh;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

const TaskTitle = styled.h3`
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
`;
const TaskHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
`;
const TaskDescription = styled.p`
  font-size: 0.675rem;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      {/* First main div: Title and Search Field */}
      <HeaderSection>
        <LeftHeadingDiv>
          <Title>Dashboard</Title>
        </LeftHeadingDiv>
        <RightSearchDiv>
          <SearchField />
        </RightSearchDiv>
      </HeaderSection>

      {/* Second main div: Welcome Card and Calendar */}
      <Section>
        <LeftDiv>
          <WelcomeCard>
            <WelcomeCardTitle>Hello, Jack</WelcomeCardTitle>
            <StatusRow>
              <StatusText>7 new projects are waiting for you</StatusText>
              <StatusText>Status</StatusText>
            </StatusRow>
            <ProgressBarContainer>
              <ProgressBar>
                <Progress />
              </ProgressBar>
              <StatusCount>120/127</StatusCount>
            </ProgressBarContainer>
          </WelcomeCard>
        </LeftDiv>
        <RightDiv>
          <CalendarWrapper>
            <CalendarComponent />
          </CalendarWrapper>
        </RightDiv>
      </Section>

      {/* Third main div: Stats, Activity, and Proposals */}
      <Section>
        <LeftDiv>
          <StatCardsWrapper>
            <StatCard
              title="Today's Tasks"
              value={15}
              percentage={70}
              icon={<FaTasks />}
              color="rgba(16, 137, 143, 1)"
            />
            <StatCard
              title="Total Projects"
              value={127}
              percentage={80}
              icon={<FaProjectDiagram />}
              color="rgba(199, 44, 136, 1)"
            />
            <StatCard
              title="Total Earnings"
              value="$12000"
              percentage={60}
              icon={<FaDollarSign />}
              color="rgba(16, 137, 143, 1)"
            />
          </StatCardsWrapper>
          <div style={{ paddingTop: "0.75rem" }}>
            <Activity />
            <Proposals />
          </div>
        </LeftDiv>
        <RightDiv>
          <RightSection>
            <TaskTitle>Task Today</TaskTitle>
            <TaskImage
              src="https://s3-alpha-sig.figma.com/img/c646/cd8c/9e05cf0339e081b33cfa12c1b8e20492?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QW1uEJSIN77sAdYuFXV3j4mEQLIVKfEtDXKo3ozBnYP8zXEIfAxtn0kdVT37-womohDpma6SPdiW346mwMqmnXSUNw58fZ03ymde8eVDgEmSsi3kBWZtaY7BqeIrc2OsNkz-YmPEIolf-grET3eVL~XiERh6~GI6Bn9yfLK7SBOiJdujEbTIRpXnAd~yLBYjP-EolYgaQvYs0EApQNluNkhPXPQcsD2nQY~vdu7HyKZTP7GtUU9kV8ynOUziCgW1loAcemcqHtIxPam11jIOheNETARVpEC99pd8BLmHAyWCoEKd1ptYvpZ3gbnmYPMd-lsCkB3TIJ7c8I~U-eixDw__"
              alt="Task"
            />
            <TaskHeading>IMPLEMENT Remote Work Policy</TaskHeading>
            <TaskDescription>Workforce Planning Analyst</TaskDescription>
            <TodayTask />
          </RightSection>
        </RightDiv>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;
