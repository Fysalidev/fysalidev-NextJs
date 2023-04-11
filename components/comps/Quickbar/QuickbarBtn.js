"use client";

import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const QuickbarBtn = ({ href }) => {
  const router = useRouter();
  const checkPath = router.pathname === href;
  const [isSelected, setIsSelected] = useState(checkPath);
 
  return (
    <Link href={href}>
      <StyledCircle
        onClick={() => {
          setIsSelected(!isSelected);
        }}
        className={isSelected ? "selected" : "notSelected"}
      />
    </Link>
  );
};

export default QuickbarBtn;

const StyledCircle = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: white;
  border-radius: 50%;
  &&:hover {
    background-color: rgb(240 0 42);
  }
  &&.selected {
    background-color: rgb(240 0 42);
  }
`;
