import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";
import Quickbar from "@/components/comps/Quickbar";
import { useContext } from "react";
import AppContext from "@/components/context/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

const content = {
  title: "{ ... Fysalidev 🌶️🌶️🌶️ }",
  paragraph1: "Développement front-end d'applications web.",
  paragraph2:
    "Prendre soin soin des interfaces qui vous représentent devant vos clients.",
};

const { title, paragraph1, paragraph2 } = content;

export default function Home() {
  return (
    <StyledMain>
      <StyledLogoWrapper>
        <StyledLogo>🌶️</StyledLogo>
      </StyledLogoWrapper>
      <StyledText>
        <StyledTitle>{title}</StyledTitle>
        <StyledPragraph>{paragraph1}</StyledPragraph>
        <StyledPragraph>{paragraph2}</StyledPragraph>
      </StyledText>
      <Quickbar />
    </StyledMain>
  );
}

//STYLES

const StyledMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top:15rem;
`;

const StyledLogoWrapper = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  display: flex;
  height: 17rem;
  justify-content: center;
  width: 17rem;
`;

const StyledLogo = styled.span`
  font-size: 10rem;
  padding-right: 1rem;
`;

const StyledText = styled.div`
  text-align: center;
  font-family: "Indie Flower", cursive;
  font-weight: bold;
`;

const StyledTitle = styled.h1`
  font-size: 1.8rem;
  margin: 1rem 0;
  /* font-weight: bold; */
`;

const StyledPragraph = styled.p`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;
