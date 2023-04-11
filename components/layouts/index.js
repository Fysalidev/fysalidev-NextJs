import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </StyledWrapper>
    </>
  );
};

export default Layout;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 97vh;
`;
