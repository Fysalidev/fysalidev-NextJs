import styled from "styled-components";
import QuickbarBtn from "./QuickbarBtn";

const Quickbar = () => {
  return (
    <>
      <StyledWrapper>
        <QuickbarBtn href="/" />
        <QuickbarBtn href="/welcome" />
        <QuickbarBtn href="/inform" />
        <QuickbarBtn href="/learn" />
        <QuickbarBtn href="/stack" />
      </StyledWrapper>
    </>
  );
};

export default Quickbar;

const StyledWrapper = styled.nav`
  display: flex;
  gap: 1rem;
`;
