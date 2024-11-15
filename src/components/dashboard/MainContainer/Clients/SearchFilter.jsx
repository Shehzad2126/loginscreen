import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  width: 134px;
  text-align: center;
  color: #10898f;
  margin-right: 1%;
`;

const DropdownButton = styled.button`
  padding: 6px;
  width: 132px;
  border: 1px solid ${(props) => (props.isOpen ? '#10898F' : '#D8D8D8')};
  border-radius: 6px;
  cursor: pointer;
  font-size: small;
  color: ${(props) => (props.isOpen ? '#10898F' : '#D8D8D8')};
  background-color: #fff;
`;

const OptionsContainer = styled.div`
  position: absolute;
  font-size: small;
  top: 86%;
  left: 0;
  right: 0;
  border: 1px solid #10898F;
  border-radius: 6px;
  background-color: #fff;
  z-index: 10;
  min-height: 200px;
  overflow-y: auto;
`;

const Option = styled.div`
  padding: 6px;
  text-align: center;
  border-bottom: 1px solid #10898F;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchFilter = ({ isOpen, onToggle, onFilterChange, disable }) => {
  return (
    <DropdownContainer>
      <DropdownButton disabled={disable} onClick={onToggle} isOpen={isOpen}>
        Status Filter
      </DropdownButton>
      {isOpen && (
        <OptionsContainer onClick={onToggle}>
          {['New', 'Contacted', 'IN Progress', 'Proposed', 'Negotiated', 'Deal', 'Closed'].map(
            (status) => (
              <Option key={status} onClick={() => onFilterChange(status)}>
                {status}
              </Option>
            )
          )}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};


export default SearchFilter;
