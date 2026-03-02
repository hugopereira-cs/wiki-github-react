import styled from 'styled-components';

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 80%;

  margin: 20px;
  box-sizing: border-box;

  input {
    background: transparent;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    color: #fff;
    font-size: 20px;
    box-sizing: border-box;
    outline: none;
  }

  input:focus {
    outline: 2px solid #fafafa;
    outline-offset: -2px;
    border-radius: 20px;
  }
`;
