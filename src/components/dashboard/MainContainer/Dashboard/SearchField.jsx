import { FaSearch } from "react-icons/fa";
import { BiBell, BiEnvelope } from "react-icons/bi";
import styled from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  padding: 0.2rem 0; /* Equivalent to py-2 */
  // margin-left: 0.75rem; /* Equivalent to ml-3 */
  gap: 0.5rem; /* Equivalent to space-x-2 */
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem; /* Equivalent to px-1 py-1 */
  gap: 1rem; /* Equivalent to space-x-4 */
  // background-color: rgba(250, 204, 255, 0.5); /* Light pink background */
  background: #ffe4e6;

  border-radius: 9999px; /* Fully rounded */
`;

const SearchInput = styled.input`
  flex-grow: 1;
  color: rgba(55, 65, 81, 1); /* Dark gray text color */
  background: transparent;
  border: none; /* No border */
  outline: none; /* Remove outline */

  &::placeholder {
    color: rgba(156, 163, 175, 1); /* Placeholder color */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem; /* Equivalent to px-4 py-1 */
  gap: 1rem; /* Equivalent to space-x-4 */
  background: #ffe4e6;

  border-radius: 9999px; /* Fully rounded */
`;

const StyledBell = styled(BiBell)`
  font-size: 1.25rem; /* Equivalent to text-xl */
  color: rgba(55, 65, 81, 1); /* Dark gray color */
  cursor: pointer; /* Pointer on hover */
`;

const StyledEnvelope = styled(BiEnvelope)`
  font-size: 1.25rem; /* Equivalent to text-xl */
  color: rgba(55, 65, 81, 1); /* Dark gray color */
  cursor: pointer; /* Pointer on hover */
`;

const SearchField = () => {
  return (
    <Container>
      <SearchWrapper>
        <FaSearch style={{ color: "rgba(75, 85, 99, 1)" }} />
        <SearchInput type="text" placeholder="Search" />
      </SearchWrapper>
      <IconWrapper>
        <StyledBell />
        <StyledEnvelope />
      </IconWrapper>
    </Container>
  );
};

export default SearchField;
