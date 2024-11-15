import React, {  useState } from 'react';
import styled from 'styled-components';
import icon1 from '../../../../images/Group 221.svg';
import icon2 from '../../../../images/Group 214.svg';
import icon3 from '../../../../images/Group 213.svg';
import icon4 from '../../../../images/Group 96.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SearchField from '../Dashboard/SearchField';
import SearchFilter from './SearchFilter';
import LabelFilter from './LabelFilter';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Table from './Table';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ContentContainer = styled.div`
font-family : 'Roboto';
  .icon1bg {
    background-color: #10898F;
    padding : 8px;
    border-radius: 50%;
    height: 6%
  }
  .icon2bg {
    background-color: #C72C88;
    padding : 8px;
    border-radius: 50%;
    height :6%
  }
  .clienttxt {
    font-weight: 500;
   padding : 6px;
  } 
`;
const NavbarDiv = styled.div`
display:flex;
 justify-content: space-between;
  borderBottom:1px solid #F2F4F7 ;
   height: 12vh;
    margin-right : 10px;
`;

const Card = styled.div`
  width: 18%;
  height: 14%;
  padding: 0.5rem 1rem;
  border: 1px solid rgb(242, 244, 247);
  border-radius: 20px;
  margin-top: 32px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const IconText = styled.p`
  color: gray;
  font-size: 72%;
  height: 12px;
`;

const IconTextLarge = styled.p`
  font-size: 1.125rem;
    font-weight: 600;
    color: rgb(45, 55, 72);
  font-family: sans-serif;
`;

const IconTextColored = styled.p`
  color: ${(props) => props.color || '#10898F'};
  padding: 0.25rem 0.5rem;
    background-color: rgb(242, 244, 247);
    border-radius: 9999px;
    height: 3%;
    font-size: 0.75rem;
    font-weight: 600;
`;
const Button = styled.button`
  outline: none;
  border: 1px solid ${(props) => (props.primary ? '#10898F' : 'lightgrey')};
  color: ${(props) => (props.primary ? 'white' : '#10898F')};
  height: 32px;
  background: ${(props) => (props.primary ? '#10898F' : 'white')};
  border-radius: 6px;
  font-size: smaller;
  margin-left: 8px;
`;
const NewClient = styled.button`
outline: none;
  border: 1px solid ${(props) => (props.primary ? '#10898F' : 'lightgrey')};
  color: ${(props) => (props.primary ? 'white' : '#10898F')};
  height: 32px;
  background: ${(props) => (props.primary ? '#10898F' : 'white')};
  border-radius: 6px;
  font-size: smaller;
  margin-left: 8px;
  margin-right: 10px;
`

const FilterInputContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 8px;
`;

const FilterInput = styled.input`
  border: 1px solid #10898F;
  width: 100px;
  border-radius: 6px;
  padding: 8px;
  padding-right: 24px; /* space for the cross icon */
  outline: none;
  font-size: small;
  color: #10898F;
  height : 10px;
`;

const CrossIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
  color : grey;
`;

// Main component
const Content = ({ setShowForm }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilter, setSelectedFilters] = useState([]);
  const [labelFilter, setLabelFilter] = useState([]);
  const [disable, setDisable] = useState(false)
  const [labelDisable, setLabelDisable] = useState(false)

  const handleDropdownToggle = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };
  console.log(selectedFilter)

  const handleFilterChange = (option) => {
    setSelectedFilters((prev) => (prev.includes(option) ? prev : [...prev, option]));
    setDisable(!disable)
  };

  const handleLabelFilterChange = (option) => {
    setLabelFilter((prev) => (prev.includes(option) ? prev : [...prev, option]));
    setLabelDisable(!labelDisable)
  };

  const removeFilter = (filter, type) => {
    type === 'status'
      ? setSelectedFilters((prev) => prev.filter((f) => f !== filter))
      : setLabelFilter((prev) => prev.filter((f) => f !== filter)) ;
      setDisable(!disable)
  };
  const removeLabelFilter =(filter, type)=>{
    type === 'label'
      ? setLabelFilter((prev) => prev.filter((f) => f !== filter))
      : setSelectedFilters((prev) => prev.filter((f) => f !== filter));
      setLabelDisable(!labelDisable)
  };

  return (
    <ContentContainer>
    <NavbarDiv>
    <h3>Sales Lead</h3>
    <SearchField/>
    </NavbarDiv>
        <div style={{display:'flex' , justifyContent: 'space-between', marginRight: 8+'px'}}>
          <Card>
            <IconWrapper>
              <img src={icon1} alt="Total Clients Icon" className="icon1bg " />
              <IconText>Total Clients</IconText>
            </IconWrapper>
            <IconWrapper>
              <IconTextLarge>52</IconTextLarge>
              <IconTextColored>70%<img src={icon2} alt="" /></IconTextColored>
            </IconWrapper>
          </Card>
          <Card>
            <IconWrapper>
              <img src={icon1} alt="Total Clients Icon" className="icon2bg" />
              <IconText>New Clients</IconText>
            </IconWrapper>
            <IconWrapper>
              <IconTextLarge>05</IconTextLarge>
              <IconTextColored><span style={{color: '#C72C88'}}>70%</span><img src={icon3} alt="" /></IconTextColored>
            </IconWrapper>
          </Card>
          <Card>
            <IconWrapper>
              <img src={icon1} alt="Total Clients Icon" className="icon1bg rounded-circle p-3" />
              <IconText>Contacted Clients</IconText>
            </IconWrapper>
            <IconWrapper>
              <IconTextLarge>40</IconTextLarge>
              <IconTextColored>70%<img src={icon2} alt=""  /> </IconTextColored>
            </IconWrapper>
          </Card>
          <Card>
            <IconWrapper>
              <img src={icon1} alt="Total Clients Icon" className="icon2bg rounded-circle p-3" />
              <IconText>IN Progress Clients</IconText>
            </IconWrapper>
            <IconWrapper>
              <IconTextLarge>25</IconTextLarge>
              <IconTextColored><span style={{color: '#C72C88'}}>70%</span><img src={icon3} alt="" /></IconTextColored>
            </IconWrapper>
          </Card>
          
          {/* Add similar Cards for other client information */}
          
        </div>

        <div style={{marginTop :32+ 'px', marginBottom: 26+'px', display: 'flex', justifyContent: 'space-between'}}>

            <div style={{display:'flex'}} >
              <span className="clienttxt">Clients</span>
              <SearchFilter 
          isOpen={openDropdown === 'search'} 
          onToggle={() => handleDropdownToggle('search')}
          onFilterChange={handleFilterChange} 
          disable={disable}
        />
        <LabelFilter 
          isOpen={openDropdown === 'label'} 
          onToggle={() => handleDropdownToggle('label')}
          handleLabelFilter={handleLabelFilterChange} 
          labelDisable={labelDisable}
        />
               {selectedFilter.map((filter, index) => (
          <FilterInputContainer key={index}>
            <FilterInput value={filter} readOnly />
            <CrossIcon icon={faTimes} onClick={() => removeFilter(filter, 'status')} />
          </FilterInputContainer>
        ))}
        {labelFilter.map((filter, index) => (
          <FilterInputContainer key={index}>
            <FilterInput value={filter} readOnly />
            <CrossIcon icon={faTimes} onClick={() => removeLabelFilter(filter, 'label')} />
          </FilterInputContainer>
        ))}
              
            </div>
            <div>
              <Button><img src={icon4} alt="upload" style={{marginRight : 12+'px'}} />Upload CVS</Button>
              <NewClient primary onClick={() => setShowForm(true)} style={{cursor:'pointer'}} >
                <FontAwesomeIcon icon={faPlus} style={{marginRight : 10+'px'}} />New Client
              </NewClient>
            </div>
          </div>

        <div style={{marginRight: 10+'px'}} >
          <Table selectedFilter= {selectedFilter}/>
        </div>
    </ContentContainer>
  );
};

export default Content;
