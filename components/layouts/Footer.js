import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Copyright 2023 | <Link href="https://fysalidev.notion.site/D-veloppeur-Web-87ada7661f8c4dbf8802e00fe8cadcfd">Fysalidev</Link>
      </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  text-align: center;
`;
