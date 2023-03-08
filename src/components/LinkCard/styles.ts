import styled from "styled-components";

export const LinkCardContainer = styled.a`
  border: 1px solid #178cfc;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  padding: 2%;
  display: flex;
  margin-bottom: 15px;
  background-color: transparent;
  justify-content: center;
  cursor: pointer;
  transition: 700ms;

  &:hover {
    background-color: #178cfc;
    transform: scale(1.1);

    p {
      color: #05122a;
    }
  }
`;

export const LinkText = styled.p`
  color: #178cfc;
  font-size: 1rem;
`;
