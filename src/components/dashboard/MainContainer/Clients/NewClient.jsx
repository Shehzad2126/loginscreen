import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled.div`
  margin-top: 1.5rem; /* equivalent to mt-6 */
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom : 14px;

`;

const FormTitle = styled.p`
  font-size: 1.5rem; /* equivalent to fs-3 */
  font-weight: bold; /* equivalent to fw-bold */
  margin: 0;
  text-align: center;
  color: #C72C88;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem; /* equivalent to mt-3 */
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 95%;
  outline: none;

  &:focus {
    border-color: #10898F; /* Custom focus color */
    box-shadow: 0 0 5px rgba(16, 137, 143, 0.5);
  }
`;

const FormButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #10898F;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a6a70;
  }
`;

const NewClient = ({ setShowForm }) => {
  return (
    <FormContainer>
      <Header>
        <FormTitle>Add Client</FormTitle>
        <CloseIcon icon={faClose} onClick={() => setShowForm(false)} />
      </Header>
      <Form>
        <FormInput type="text" name="name" placeholder="Client Name" required />
        <FormInput type="text" name="companyName" placeholder="Company Name" required />
        <FormInput type="email" name="email" placeholder="Email" required />
        <FormInput type="tel" name="phone" placeholder="Phone No." required />
        <FormInput type="text" name="proposal" placeholder="Shared Proposal" required />
        <FormButton type="submit">Add</FormButton>
      </Form>
    </FormContainer>
  );
};

export default NewClient;
