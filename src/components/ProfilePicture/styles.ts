import styled from "styled-components";

export const ImageContainer = styled.div`
  border: 5px solid #178cfc;
  width: 55%;
  max-width: 250px;
  min-width: 150px;
  border-radius: 50%;
  transition: 800ms;
  margin-bottom: 10px;
  
  &:hover {
    border: 15px solid #178cfc;
  }

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
