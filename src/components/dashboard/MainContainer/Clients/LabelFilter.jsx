import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  width: 134px;
  text-align: center;
  color: #10898F;
`;

const DropdownButton = styled.button`
width : 132px;
  padding: 6px;
  border: 1px solid ${(props) => (props.isOpen ? '#10898F' : '#D8D8D8')};
  border-radius: 6px;
  cursor: pointer;
  font-size: small;
  color: ${(props) => (props.isOpen ? '#10898F' : '#D8D8D8')};
  background-color: #fff;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 86%;
  left: 0;
  right: 0;
  font-size: small;
  border: 1px solid #10898F;
  border-radius: 6px;
  background-color: #fff;
  z-index: 10;
  max-height: 200px;
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

const LabelFilter = ({ isOpen, onToggle, handleLabelFilter, labelDisable }) => {
  const handleOptionClick = (option) => {
    handleLabelFilter(option);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={onToggle} disabled={labelDisable} isOpen={isOpen}>
        Label Filter
      </DropdownButton>
      {isOpen && (
        <OptionsContainer onClick={onToggle}>
          {['Hot', 'Warm', 'Cold'].map((label) => (
            <Option key={label} onClick={() => handleOptionClick(label)}>
              {label}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default LabelFilter;
