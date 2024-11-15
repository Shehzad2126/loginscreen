import React, { useState } from 'react';
import styled from 'styled-components';
import source from '../../../../images/source.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPencil, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { User } from './Users/User';

const Status = styled.span`
  padding: 0 14px;
  color: #10898f;
  border-radius: 20%;
  background: rgb(238 238 238);
`;
const Status2 = styled.span`
  padding: 0 14px;
  color: #C72C88;
  border-radius: 20%;
  background: rgb(238 238 238);
`;

const Source = styled.div`
  background: rgb(228, 226, 226);
  border-radius: 50%;
  padding: 6px;
  display: flex;
  width: 29px;
  justify-content: center;
`;

const Tablee = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: small;
  border: 1px solid #F2F4F7;
  font-family: Roboto;
  margin-right: 8px;
  
  td {
    padding: 8px;
  }
  tr{
    border-bottom: 1px solid rgb(242, 244, 247);
  }
  thead {
    color: gray;
    background-color: rgb(238, 238, 238);
  }
  tbody {
    background: white;
  }
`;

const Sourcetd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
`;

const Button = styled.button`
  outline: none;
  border: 1px solid #10898F;
  color: #10898F;
  height: 32px;
  background: white;
  border-radius: 6px;
  font-size: smaller;
  margin-left: 8px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  outline: none;
  border: 1px solid #FF1414;
  color: #FF1414;
  height: 32px;
  background: white;
  border-radius: 6px;
  font-size: smaller;
  margin-left: 8px;
  cursor: pointer;
`;

const Table = ({selectedFilter}) => {
  const [visibleRow, setVisibleRow] = useState(null);

  const handleShow = (index) => {
    setVisibleRow(visibleRow === index ? null : index);
  };

  return (
    <Tablee>
      <thead>
        <tr>
          <td>Client Name</td>
          <td>Company Name</td>
          <td>Email</td>
          <td>Phone No.</td>
          <td>Status</td>
          <td>Leads Label</td>
          <td>Shared Proposal</td>
          <td>Source</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {User.map((v, i) => (
          <React.Fragment key={i}>
            <tr>
              <td>Leanne Graham</td>
              <td>Romageura-Corona</td>
              <td>Shanna@melissa.tv</td>
              <td>1-463-223-7777</td>
              <td style={{textAlign:'start'}}><Status>{v.status}</Status></td>
              <td><Status2>HOT</Status2></td>
              <td>Branding, designing</td>
              <Sourcetd>
                <Source>
                  <img src={source} alt="source icon" />
                </Source>
              </Sourcetd>
              <td onClick={() => handleShow(i)} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </td>
            </tr>

            {visibleRow === i && (
              <tr>
                <td colSpan={9}>
                  <div style={{ marginLeft: '74%' }}>
                    <DeleteBtn>
                      <FontAwesomeIcon icon={faTrash} style={{ marginRight: '10px' }} />Delete
                    </DeleteBtn>
                    <Button>
                      <FontAwesomeIcon icon={faPencil} style={{ marginRight: '10px' }} />Edit
                    </Button>
                    <Button>
                      <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />View Contact
                    </Button>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Tablee>
  );
};

export default Table;
