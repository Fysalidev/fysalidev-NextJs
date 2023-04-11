import styled from "styled-components";
import Image from "next/image";

const Card = () => {
  return (
    <StyledCard>
      <Image src="/nextjs.png" alt="NextJS" width={230} height={230} />
      <h3>Card Title</h3>
    </StyledCard>
  );
};

export default Card;

// styled-components

const StyledCard = styled.div`
  
  background-color: white;
  padding : 1rem;
  border-radius: 2px;

  & img {
    object-fit: cover;
  }
  & h3 {
    color : black;
    text-align: center;
  }
`;
