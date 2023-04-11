import styled from "styled-components";
import Card from "./Card";

const Cards = () => {
    return ( 
        <StyledWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
        </StyledWrapper>
     );
}
 
export default Cards;

//STYLED-COMPONENTS

const StyledWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`