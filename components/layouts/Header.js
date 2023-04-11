import Link from "next/link";
import styled from "styled-components";
/* import Navbar from "./Navbar"; */
import Quickbar from "../comps/Quickbar";

const content = {
  title: "{ ... Fysalidev 🌶️🌶️🌶️ }",
};

const { title } = content;

const Header = () => {
  return (
    <Wrapper>
      <StyledSection>
        <Link href="/">
          <Title>{title}</Title>
        </Link>
      </StyledSection>
      <Quickbar />
    </Wrapper>
  );
};

export default Header;

//STYLED-COMPONENTS

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px white;
  padding: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;
