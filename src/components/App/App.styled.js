import styled from '@emotion/styled';

export const MainContainer = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  border-radius: 15px;
  border: none;
  background-color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 660px) {
    width: auto;
    margin: 0 100px;
  }
`;
