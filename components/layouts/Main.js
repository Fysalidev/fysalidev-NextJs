import styled from "styled-components";

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;

const StyledMain = styled.main`
height: 90vh;
`;
