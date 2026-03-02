import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 80%;
  font-size: 20px;

  margin: 20px;
  transition: transform 0.5s ease;

  &:hover {
    background-color: #fafafa40;
    color: #fff;
    cursor: pointer;
    transform: scale(1.01);
  }
`;
