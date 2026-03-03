import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background-color: #fafafa;
    border: 1px solid #fafafa;
    color: #22272e;

    &:hover {
      background-color: #fafafa40;
      color: #fff;
    }
  `,
  danger: css`
    width: 15%;
    min-width: 150px;
    background-color: transparent;
    color: #ff6b6b;
    border: 1px solid #ff6b6b;
    margin: 20px 0;

    &:hover {
      background-color: #ff6b6b40;
      color: #fff;
    }
  `
};

export const ButtonContainer = styled.button`
  border-radius: 20px;
  height: 62px;
  width: 40%;
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.01);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  {/**
   * Usa a desestruturação para extrair a prop variant.
   * Busca um valor dentro do objeto "variants".
   * Se "variants[variant] retornar um valor "falsy" (undefined, por exemplo), a expressão usará o
   * valor de primary como padrão.
   */}
  ${({ variant }) => variants[variant] || variants.primary}
`;
