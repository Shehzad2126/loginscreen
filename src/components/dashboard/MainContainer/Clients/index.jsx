import React, { useState } from "react";
import NewClient from "./NewClient";
import Content from "./Content";
import styled from "styled-components";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const ContentDiv = styled.div`
    min-width: 96%;
    min-height: 100%;
    background: white;
  `;

  return (
    <>
      <ContentDiv>
        <Content setShowForm={setShowForm} />
      </ContentDiv>
      {showForm && (
        <Overlay>
          <NewClient setShowForm={setShowForm} />
        </Overlay>
      )}
    </>
  );
};
export default Index;
