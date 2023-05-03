import styled from '@emotion/styled';

export const PlainText = styled.p`
  width: 33%;
`;

export const Button = styled.button`
  border: none;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(18, 100, 150, 255);
  border: 1px solid rgba(18, 122, 177, 255);
  color: white;
  &:hover {
    background-color: rgb(255, 255, 255);
    transition: all 0.5s ease-out;
    color: rgb(0, 0, 0);
  }
`;
